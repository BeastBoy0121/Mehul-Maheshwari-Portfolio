"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const { theme } = useTheme();

    // Use a ref to store phi so it persists across re-renders/resizes if we needed to recreate
    // But cobe lets us update state. 
    // Actually, cobe's state.phi is internal. We track it here if we want to control it.
    // Let's just update width/height dynamically.

    useEffect(() => {
        let phi = 0;
        let width = 0;

        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        }

        window.addEventListener('resize', onResize);
        onResize();

        if (!canvasRef.current) return;

        // Globe configuration
        // Dark mode: Dark background, Glowy dots
        // Light mode: White background, Dark dots
        const isDark = theme === "dark" || !theme || theme === "system";

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: isDark ? 1 : 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: isDark ? [0.3, 0.3, 0.3] : [1, 1, 1],
            markerColor: isDark ? [0.1, 0.8, 1] : [0.1, 0.1, 0.1],
            glowColor: isDark ? [1, 1, 1] : [0.5, 0.5, 0.5],
            markers: [
                { location: [12.9716, 77.5946], size: 0.1 },
            ],
            onRender: (state) => {
                // Update grid size if window resized
                if (state.width !== width * 2) {
                    state.width = width * 2;
                    state.height = width * 2;
                }

                // Animation
                if (!pointerInteracting.current) {
                    phi += 0.005;
                }
                state.phi = phi + pointerInteractionMovement.current;
            },
        });

        return () => {
            window.removeEventListener('resize', onResize);
            globe.destroy();
        };
    }, [theme]);

    return (
        <div
            className={className}
            style={{
                width: "100%",
                maxWidth: "100%", // Let parent control width
                aspectRatio: 1,
                margin: "auto",
                position: "relative",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    cursor: "grab",
                    contain: "layout paint size",
                    opacity: 1,
                }}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grabbing";
                    }
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grab";
                    }
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grab";
                    }
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta * 0.005;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta * 0.005;
                    }
                }}
            />
        </div>
    );
}
