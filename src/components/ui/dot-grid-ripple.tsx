"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export const DotGridRipple = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    // Wave state
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Grid Config
        const SPACING = 30;
        const BASE_RADIUS = 1.5;
        const MAX_RADIUS = 4;
        const WAVE_RANGE = 200;

        let animationFrameId: number;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        const render = () => {
            timeRef.current += 0.05;

            const isDark = theme === "dark" || !theme || theme === "system";
            // Clear
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cols = Math.ceil(canvas.width / SPACING);
            const rows = Math.ceil(canvas.height / SPACING);

            ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * SPACING;
                    const y = j * SPACING;

                    // Calculate distance to mouse
                    const dx = x - mouseRef.current.x;
                    const dy = y - mouseRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let radius = BASE_RADIUS;
                    let opacity = 0.2;

                    if (dist < WAVE_RANGE) {
                        // Scale up based on proximity
                        const factor = 1 - Math.pow(dist / WAVE_RANGE, 2);
                        radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * factor;
                        opacity = 0.2 + 0.6 * factor;
                    }

                    // Draw Dot
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    // Dynamic color/opacity
                    ctx.fillStyle = isDark
                        ? `rgba(255, 255, 255, ${opacity})`
                        : `rgba(0, 0, 0, ${opacity})`;
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className={`${className} pointer-events-none`}
        />
    );
};
