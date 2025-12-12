"use client";

import { motion } from "framer-motion";
import { GraduationCap, Music, Trophy, Activity, MapPin, Calendar, Briefcase, Heart } from "lucide-react";

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

                    {/* Who I Am, Current Status & Interests */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Left Column: Who I Am & Status */}
                        <div className="flex flex-col justify-between h-full gap-8">
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
                                    <li>🚀 <strong>Software Engineer at Shell</strong> (Bangalore)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: What I Like */}
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm h-full">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Heart className="h-5 w-5 text-primary" />
                                What I Like
                            </h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong>Exploring new places & experiences</strong> — Travelling, adventures, and discovering diverse cultures.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong>Reading mystery & thriller novels</strong> — Keeping the mind sharp, curious, and engaged.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong>Music, gaming, & creative hobbies</strong> — Embracing fun, self-expression, and entertainment.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong>Sports & outdoor pursuits</strong> — Valuing discipline, wellness, and a healthy challenge.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong>Tech trends & innovation</strong> — Always curious, learning new skills, and looking forward.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span><strong>Embracing spontaneity</strong> — Open to change, personal growth, and fresh perspectives.</span>
                                </li>
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
                                <p className="text-xs text-muted-foreground">Manipal Institute of Technology (B.Tech Computer Science)</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Experience</h4>
                                <p className="text-xs text-muted-foreground">Shell, Knack Systems, MVPEx, Algorythma</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <Trophy className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Achievements</h4>
                                <p className="text-xs text-muted-foreground">Shell.ai Runner-up, Table Tennis Tournament Winner</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                                <Music className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <h4 className="font-semibold mb-1">Interests</h4>
                                <p className="text-xs text-muted-foreground">Guitar, Soccer, Badminton, TT, E-Sports - LoL, Valorant</p>
                            </div>
                        </div>
                    </div>

                    {/* Journey Timeline */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>

                        {/* Manipal */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Shell India Markets</h4>
                                <p className="text-primary text-sm font-medium">Aug 2023 - Present</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <p><strong>Software Engineer:</strong> Working on SPARK FDAi and Digital Health Check projects. Leveraging React, Python, and Azure to drive impact.</p>
                            </div>
                        </div>

                        {/* Shell */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/80" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Manipal Institute of Technology, Manipal (MIT)</h4>
                                <p className="text-primary text-sm font-medium">2019 - 2023</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <p>B.Tech in <strong>Computer Science and Engineering.</strong></p>
                                <p>Treasurer of MIT Gaming Club.</p>
                            </div>
                        </div>


                        {/* Internships */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/40" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Early Career Internships</h4>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <ul className="list-disc list-inside space-y-1">
                                    <li><strong>Knack Systems (2022):</strong> Automation and QA Intern.</li>
                                    <li><strong>MVPEx (2021):</strong> Technical Intern (MERN Stack).</li>
                                    <li><strong>Algorythma (2019):</strong> Technical Intern.</li>
                                </ul>
                            </div>
                        </div>

                        {/* High School */}
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary/20" />
                            <div className="mb-4">
                                <h4 className="text-xl font-bold">Abu Dhabi Indian School Branch-1, Abu Dhabi (High School)</h4>
                                <p className="text-primary text-sm font-medium">Graduated in 2019</p>
                            </div>
                            <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                <ul className="list-disc list-inside space-y-1">
                                    <li><strong>Abu Dhabi Indian School Branch-1, Abu Dhabi</strong>.</li>
                                    <li><strong>Head Boy</strong> (2018-2019)(Student Council President).</li>
                                    <li><strong>President of Activities</strong> (2016-2018)</li>
                                    <li><strong>Environment Club President</strong> (2015-2016)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
