"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Microsoft Azure AI Fundamentals (AI-900)",
        issuer: "Microsoft",
        date: "Nov 2025",
        link: "#",
    },
    {
        title: "Certified in Cybersecurity (CC)",
        issuer: "ISC2",
        date: "Oct 2025",
        link: "#",
    },
    {
        title: "Green Software for Practitioners",
        issuer: "The Linux Foundation",
        date: "Jun 2024",
        link: "#",
    },
    {
        title: "Graph Analytics for Big Data",
        issuer: "Coursera",
        date: "Oct 2022",
        link: "#",
    },
    {
        title: "Machine Learning with Big Data",
        issuer: "Coursera",
        date: "Nov 2022",
        link: "#",
    },
    {
        title: "Introduction to Big Data",
        issuer: "Coursera",
        date: "Mar 2022",
        link: "#",
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all"
                        >
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">{cert.title}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{cert.issuer} • {cert.date}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                                >
                                    View Certificate <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
