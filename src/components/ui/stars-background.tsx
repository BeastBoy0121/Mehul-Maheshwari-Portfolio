"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Star {
    radius: number;
    angle: number;
    speed: number;
    yOffset: number; // Random vertical scatter for volume
    color: string;
    baseAlpha: number; // Intrinsic brightness
    baseSize: number; // Intrinsic size variation
}

export function StarsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        // Only render stars in dark mode
        if (theme === "light") return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        // Configuration
        const STAR_COUNT = 1500; // Dense galaxy
        const FOCAL_LENGTH = 800; // Viewing distance
        const TILT_ANGLE = Math.PI / 3; // 60 degrees tilt for depth effect

        // Initialize stars
        const initStars = () => {
            stars = [];
            const minRadius = 50;
            const maxRadius = Math.max(canvas.width, canvas.height) * 0.8;

            for (let i = 0; i < STAR_COUNT; i++) {
                // Distribute stars mostly in the center, fading out (Gaussian-ish)
                const radius = Math.random() * maxRadius + minRadius;

                stars.push({
                    radius,
                    angle: Math.random() * Math.PI * 2,
                    speed: (Math.random() * 0.001) + 0.0005, // Varied orbital speeds
                    yOffset: (Math.random() - 0.5) * 100, // Scattering for Galaxy thickness
                    color: "255, 255, 255", // Base RGB
                    baseAlpha: Math.random() * 0.6 + 0.4, // Random base opacity (0.4 to 1.0)
                    baseSize: Math.random() * 0.7 + 0.3, // Random base size multiplier
                });
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const render = () => {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // Sort stars by Z depth so closer stars draw on top
            // We need to calculate positions first to sort, but for simple stars simpler works:
            // Just drawing them is usually fine, but sorting improves the "brightest on top" effect.
            // However, for performance with 1500 stars/frame, we might skip sorting if not strictly needed.
            // Let's stick to direct draw for performance, but careful with opacity.

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                // Update rotation (Clockwise: decrease angle)
                star.angle -= star.speed;

                // Calculate 3D Position
                // Orbit on flat plane (X, Z) with some Y thickness
                // Then Tilt the whole system

                // Base planar coordinates (Flat Galaxy on X-Z plane)
                const x_base = star.radius * Math.cos(star.angle);
                const z_base = star.radius * Math.sin(star.angle);
                const y_base = star.yOffset; // Thickness

                // Apply Tilt (Rotate around X-axis)
                // y' = y*cos(theta) - z*sin(theta)
                // z' = y*sin(theta) + z*cos(theta)

                const x_final = x_base;
                const y_final = y_base * Math.cos(TILT_ANGLE) - z_base * Math.sin(TILT_ANGLE);
                const z_final = y_base * Math.sin(TILT_ANGLE) + z_base * Math.cos(TILT_ANGLE);

                // Perspective Projection
                // Z moves towards/away (Oscillates). closer = higher scale.
                const z_perspective = z_final + 200; // Push back slightly so we don't divide by zero

                // Simple perspective scale
                // scale = focalLength / (focalLength + z)
                // If z is distinct (coming towards us), we want z to be negative?
                // Standard: Camera at 0,0,0. Objects at z > 0 (in front?) or < 0?
                // Let's assume standard: z > 0 is further away.
                // So we add an offset to push the galaxy in front of camera.

                const projectionZ = z_final + FOCAL_LENGTH; // Center of galaxy is at FOCAL_LENGTH distance
                if (projectionZ <= 0) continue; // Behind camera

                const scale = FOCAL_LENGTH / projectionZ;

                const x_screen = cx + x_final * scale;
                const y_screen = cy + y_final * scale;

                // Dynamic Visuals based on Depth (scale) AND Intrinsic properties

                const size = Math.max(0.3, scale * 1.5 * star.baseSize); // Randomized size
                const opacity = Math.min(1, scale * 0.8 * star.baseAlpha); // Randomized opacity + depth fade

                if (
                    x_screen > 0 &&
                    x_screen < canvas.width &&
                    y_screen > 0 &&
                    y_screen < canvas.height
                ) {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(${star.color}, ${opacity})`;
                    ctx.arc(x_screen, y_screen, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    if (theme === "light") {
        return (
            <div className="absolute inset-0 bg-white -z-10" />
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full pointer-events-none"
        />
    );
}
