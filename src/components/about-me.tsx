"use client";

import { motion } from "framer-motion";
import { GraduationCap, Music, Trophy, Activity, MapPin, Calendar, Briefcase } from "lucide-react";

export function AboutMe() {
    return (
        <section id="about" className="py-20 bg-secondary/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        About Me
                    </h2>

                    {/* Who I Am & Current Status */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Activity className="h-5 w-5 text-primary" />
                                Who I Am
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm a versatile software developer and computer science graduate, currently working as a <strong>Software Engineer at Shell</strong>.
                                My background spans full-stack development, AI, data engineering, and building scalable systems through continuous learning. Beyond tech, I'm deeply interested in music, sports, and gaming, which shape my creativity, discipline, and competitive mindset.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                Current Status
                            </h3>
                            <ul className="space-y-2 text-muted-foreground leading-relaxed">
                                <li>🚀 <strong>Full-Stack Developer at Shell</strong> (Bangalore)</li>
                                <li>🤖 <strong>ML Engineer Intern at Typeface</strong> (Palo Alto)</li>
                                <li>🎓 <strong>Masters Student at UCSD</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-6 text-center">Key Highlights</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <GraduationCap className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Education</h4>
                                <p className="text-xs text-muted-foreground">UCSD (AI), UW-Madison (CS), Manipal (B.Tech)</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Experience</h4>
                                <p className="text-xs text-muted-foreground">Shell, Typeface, Knack Systems</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <Trophy className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Achievements</h4>
                                <p className="text-xs text-muted-foreground">Shell.ai Runner-up, Bhangra Competitor</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <Music className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Interests</h4>
                                <p className="text-xs text-muted-foreground">Guitar, Soccer, Badminton</p>
                            </div>
                        </div>
                    </div>

                    {/* Journey Timeline */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>

                        {/* UCSD & Typeface */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Masters & AI Internships</h4>
                                <p className="text-primary text-sm font-medium">Present</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <p><strong>University of California, San Diego:</strong> Pursuing Masters in AI. Member of Da Real Punjabiz (Bhangra team).</p>
                                <p><strong>Typeface (Palo Alto):</strong> Machine Learning Engineer Intern.</p>
                            </div>
                        </div>

                        {/* Shell */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/80" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Shell India Markets</h4>
                                <p className="text-primary text-sm font-medium">Aug 2023 - Present</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <p><strong>Full-Stack Developer:</strong> Working on SPARK FDAi and Digital Health Check projects. Leveraging React, Python, and Azure to drive impact.</p>
                            </div>
                        </div>

                        {/* UW Madison */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/60" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">University of Wisconsin-Madison</h4>
                                <p className="text-primary text-sm font-medium">Class of 2024</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <p>Graduated with CS Major. Active in Madtown Bhangra, WSB, and Asian American Student Union.</p>
                            </div>
                        </div>

                        {/* Manipal */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/40" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Manipal Institute of Technology</h4>
                                <p className="text-primary text-sm font-medium">2019 - 2023</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <p>B.Tech in Computer Science. CGPA: 8.1. Treasurer of Gaming Club.</p>
                            </div>
                        </div>

                        {/* Internships */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/20" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Early Career Internships</h4>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <ul className="list-disc list-inside space-y-1">
                                    <li><strong>Knack Systems (2023):</strong> Automation Testing Intern.</li>
                                    <li><strong>MVPEx (2022):</strong> Technical Intern (MERN Stack).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
