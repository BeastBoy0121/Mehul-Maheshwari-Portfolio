"use client";

import React from "react";

export default function LogoTestPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Logo Concepts</h1>
                    <p className="text-neutral-400">
                        Exploration for "Mehul Maheshwari" (MM)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Option 1: Geometric Interlock */}
                    <LogoCard
                        title="Concept 1: Geometric Interlock"
                        description="Sharp, structural M's interlocking. Represents stability and architecture."
                    >
                        <svg
                            viewBox="0 0 100 100"
                            className="w-32 h-32 text-indigo-500"
                            fill="currentColor"
                        >
                            <path d="M20 20 L40 20 L50 40 L60 20 L80 20 L80 80 L60 80 L60 50 L50 70 L40 50 L40 80 L20 80 Z" />
                            <path
                                d="M50 40 L50 70"
                                stroke="black"
                                strokeWidth="2"
                                className="mix-blend-overlay"
                            />
                        </svg>
                        {/* A more stylized alternative for Concept 1 */}
                        <svg viewBox="0 0 100 100" className="w-32 h-32 mt-4" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 80 V 30 L 50 60 L 80 30 V 80" className="text-indigo-500" />
                        </svg>
                    </LogoCard>

                    {/* Option 2: Minimal Path */}
                    <LogoCard
                        title="Concept 2: The Code Path"
                        description="A continuous line forming two M's, reminiscent of a pulse or data stream."
                    >
                        <svg
                            viewBox="0 0 100 100"
                            className="w-32 h-32 text-emerald-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 70 L 15 30 L 32.5 55 L 50 30 L 67.5 55 L 85 30 L 85 70" />
                        </svg>
                    </LogoCard>

                    {/* Option 3: Tech / Bracket */}
                    <LogoCard
                        title="Concept 3: Dev Brackets"
                        description="Using angle brackets < > to form the M shape indirectly. Highly developer focused."
                    >
                        <svg
                            viewBox="0 0 100 100"
                            className="w-32 h-32 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {/* Left partial M */}
                            <path d="M 15 80 L 35 30 L 50 60" />
                            {/* Right partial M */}
                            <path d="M 50 60 L 65 30 L 85 80" />

                            {/* Accent dots or brackets */}
                            <circle cx="50" cy="85" r="4" fill="currentColor" className="text-white" />
                        </svg>
                    </LogoCard>

                    {/* Option 4: Modern Monogram */}
                    <LogoCard
                        title="Concept 4: Circular Monogram"
                        description="Modern, contained, energetic. Good for favicons and avatars."
                    >
                        <svg
                            viewBox="0 0 100 100"
                            className="w-32 h-32 text-violet-500"
                            fill="none"
                        >
                            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" />
                            <path
                                d="M 30 70 L 30 35 L 50 55 L 70 35 L 70 70"
                                stroke="currentColor"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </LogoCard>
                </div>

                <div className="text-center pt-10">
                    <p className="text-sm text-neutral-500">
                        These are SVGs and can be infinitely scaled, recolored, and animated.
                    </p>
                </div>
            </div>
        </div>
    );
}

function LogoCard({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col items-center justify-center space-y-6 hover:border-neutral-700 transition-colors group">
            <div className="flex flex-col items-center justify-center p-8 bg-neutral-950/50 rounded-lg w-full h-64 group-hover:bg-neutral-950/80 transition-colors">
                {children}
            </div>
            <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
                <p className="text-neutral-400 text-sm">{description}</p>
            </div>
        </div>
    );
}
