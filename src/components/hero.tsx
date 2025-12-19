"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ParticleNetwork } from "@/components/ui/particle-network";
import { DotGridRipple } from "@/components/ui/dot-grid-ripple";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 relative overflow-hidden">
            {/* Background Options - Theme Based */}
            {mounted && (
                <>
                    {resolvedTheme === 'light' ? (
                        <DotGridRipple className="absolute inset-0 z-0" />
                    ) : (
                        <ParticleNetwork className="absolute inset-0 z-0" />
                    )}
                </>
            )}

            <div className="container px-4 mx-auto z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left order-2"
                    >
                        <h2 className="text-sm md:text-base font-semibold text-primary mb-4 tracking-wider uppercase">
                            Software Developer
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Innovating with<br className="hidden md:block" />
                            <span className="text-primary">Code and Curiosity.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8">
                            Versatile software developer with experience in designing, developing, and implementing impactful solutions across scalable, real-world applications.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-12">
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors w-full sm:w-auto"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors w-full sm:w-auto"
                            >
                                Contact Me
                            </Link>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-6 text-muted-foreground">
                            <a
                                href="https://www.linkedin.com/in/mehul-maheshwari-mm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/BeastBoy0121"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://www.instagram.com/mehul_mah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="mailto:maheshwarimehulofficial@gmail.com"
                                className="hover:text-foreground transition-colors"
                            >
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            // Option 4: The Drifter (Current - Space Float)
                            x: [0, 10, -10, 0],
                            y: [0, -15, 10, 0],
                        }}
                        transition={{
                            duration: 0.5, // Entrance duration

                            // Loop animations
                            y: {
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            x: {
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        className="flex-1 relative order-1 flex justify-center md:justify-center"
                    >
                        {/* Hybrid Style: "The Organic Portal" */}
                        {/* Combines Option 2 (Organic Blob) with rotating rings from Option 1 */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* 1. The Gradient Border Wrapper */}
                            <div className="absolute -inset-[2px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden animate-[blob_7s_infinite]">
                                <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_270deg,theme(colors.primary.DEFAULT)_360deg)] animate-[spin_4s_linear_infinite] opacity-100" />
                                <div className="absolute -inset-[100%] bg-[conic-gradient(from_180deg,transparent_0_270deg,theme(colors.secondary.DEFAULT)_360deg)] animate-[spin_4s_linear_infinite_reverse] opacity-100" />
                            </div>

                            {/* Blob Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_7s_infinite]" />

                            {/* Blob Image Container */}
                            <div className="absolute inset-[2px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-2 border-background shadow-2xl z-10 bg-background animate-[blob_7s_infinite]">
                                <img
                                    src="/images/profile_placeholder.jpg"
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
