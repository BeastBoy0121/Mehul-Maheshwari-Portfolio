"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Printer, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-secondary/10">
            <div className="container px-4 mx-auto max-w-4xl">
                {/* Actions Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center mb-8 print:hidden"
                >
                    <Link
                        href="/"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to Portfolio
                    </Link>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                        >
                            <Printer className="h-4 w-4" />
                            Print
                        </button>
                        <a
                            href="/resume.pdf"
                            download="MehulMaheshwari_Resume.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        >
                            <Download className="h-4 w-4" />
                            Download PDF
                        </a>
                    </div>
                </motion.div>

                {/* Resume Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card text-card-foreground p-8 md:p-12 rounded-xl shadow-lg border border-border print:shadow-none print:border-none print:p-0"
                >
                    {/* Header */}
                    <header className="border-b border-border pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">Mehul Maheshwari</h1>
                            <p className="text-xl text-primary font-medium">Full Stack Developer</p>
                            <p className="text-muted-foreground mt-2 max-w-xl">
                                Versatile software developer with experience in designing, developing and implementing impactful solutions across frontend and backend systems, optimizing performance, and enhancing user experience.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                maheshwarimehul01@gmail.com
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +91-9119776469 / +971-507759183
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Bangalore, Karnataka, India
                            </div>
                            <div className="flex items-center gap-2">
                                <Linkedin className="h-4 w-4" />
                                <a href="https://www.linkedin.com/in/mehul-maheshwari-mm/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn Profile</a>
                            </div>
                        </div>
                    </header>

                    {/* Work Experience */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-primary">Work Experience</h2>

                        <div className="space-y-8">
                            {/* Shell */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h3 className="text-lg font-bold">Full-Stack Developer</h3>
                                    <span className="text-sm text-muted-foreground">Aug 2023 - Present</span>
                                </div>
                                <p className="text-primary/80 font-medium mb-2">Shell India Markets Private Limited, Bangalore</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-sm mb-1">SPARK FDAi Project:</h4>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                                        <li>Contributed to high-priority application for Shell Lubricants, leading to time/cost savings.</li>
                                        <li>Modified Search functionalities using ReactJS/TypeScript and improved backend with Python/MS SQL/Databricks.</li>
                                        <li>Integrated Azure Application Insights and developed Power BI dashboards.</li>
                                        <li>Worked with Azure AI Search for improved retrieval performance.</li>
                                        <li>Runner-up in 2024 Shell.ai Code Masters Awards.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-sm mb-1">Digital Health Check (DHC) Project:</h4>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                                        <li>Revamped Risk Assessment Matrix logic using ReactJS, Node.js, and MS SQL.</li>
                                        <li>Improved export functionality and dashboard readability.</li>
                                        <li>Implemented modularization for safer updates and better performance.</li>
                                        <li>Identified and resolved critical vulnerabilities; performed Green Software optimizations.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Knack Systems */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border" />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h3 className="text-lg font-bold">Technical Intern</h3>
                                    <span className="text-sm text-muted-foreground">Jan 2023 - July 2023</span>
                                </div>
                                <p className="text-primary/80 font-medium mb-2">Knack Systems, Mohali</p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                                    <li>Gained proficiency in automation testing (Cypress, Selenium) for web controls and alerts.</li>
                                    <li>Utilized JavaScript for scripting and test customization.</li>
                                </ul>
                            </div>

                            {/* MVPEx */}
                            <div className="relative pl-6 border-l-2 border-border">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border" />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h3 className="text-lg font-bold">Technical Intern</h3>
                                    <span className="text-sm text-muted-foreground">June 2022 - July 2022</span>
                                </div>
                                <p className="text-primary/80 font-medium mb-2">MVPEx, Delhi</p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                                    <li>Developed full-stack web applications using MERN stack.</li>
                                    <li>Produced high-quality graphic designs and showcased troubleshooting abilities.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-primary">Education</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                    <h3 className="text-lg font-bold">Bachelor of Technology (B.Tech), Computer Science and Engineering</h3>
                                    <span className="text-sm text-muted-foreground">July 2019 - July 2023</span>
                                </div>
                                <p className="text-muted-foreground">Manipal Institute of Technology, Karnataka</p>

                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-primary">Technical Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    ReactJS, NextJS, HTML, CSS, JavaScript, TypeScript, Node.js, Python, PHP, C#, C++, Java, SQL, Dart, Flutter, Laravel, .NET
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Azure (Pass, Monitoring, KQL, AI Search), Power BI, GitHub, Unity, Selenium, Cypress, Databricks, VS Code, MongoDB, MySQL, MS SQL
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-primary">Certifications</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                            <li>• Microsoft Azure AI Fundamentals (AI-900) (Nov 2025)</li>
                            <li>• Certified in Cybersecurity (CC) - ISC2 (Oct 2025)</li>
                            <li>• Green Software for Practitioners (Jun 2024)</li>
                            <li>• Graph Analytics for Big Data - Coursera (Oct 2022)</li>
                            <li>• Machine Learning with Big Data - Coursera (Nov 2022)</li>
                            <li>• Introduction to Big Data - Coursera (Mar 2022)</li>
                        </ul>
                    </section>

                    {/* Achievements & Leadership */}
                    <section>
                        <h2 className="text-xl font-bold mb-6 uppercase tracking-wider text-primary">Achievements & Leadership</h2>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>Runner-up:</strong> Shell.ai Code Masters Awards 2024 (SPARK FDAi).</li>
                                <li><strong>1st Position:</strong> Table Tennis (Oct 2025).</li>
                                <li><strong>Treasurer:</strong> MIT Gaming Club (Nov 2021 – Jan 2023).</li>
                                <li><strong>Campus Manager:</strong> Good Game Nation (May 2021 – May 2022).</li>
                                <li><strong>Volunteering:</strong> Blood donation drives, teaching at Tiny Tots Academy, Red-X-Disha orphanages.</li>
                            </ul>
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
}
