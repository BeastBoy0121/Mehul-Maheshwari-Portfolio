"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Microsoft Azure AI Fundamentals (AI-900)",
        issuer: "Microsoft",
        date: "Nov 2025",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/MehulMaheshwari-2617/2F8B28CFEEC1459B?sharingId=64FA5A3EE1F1C592",
    },
    {
        title: "Certified in Cybersecurity (CC)",
        issuer: "ISC2",
        date: "Oct 2025",
        link: "https://www.credly.com/badges/1dce57f5-1e35-43e4-94b2-d5b85ed4b1c8/public_url",
    },
    {
        title: "Green Software for Practitioners",
        issuer: "The Linux Foundation",
        date: "Jun 2024",
        link: "https://trainingportal.linuxfoundation.org/learn/certificates/green-software-for-practitioners-lfc131?id=9095c0f8-6f99-440e-b0f7-1ebe44f75090",
    },
    {
        title: "Machine Learning with Big Data",
        issuer: "Coursera",
        date: "Nov 2022",
        link: "https://coursera.org/verify/6UZJWZJCT4BB",
    },
    {
        title: "Graph Analytics for Big Data",
        issuer: "Coursera",
        date: "Oct 2022",
        link: "https://coursera.org/verify/HF93Y3J6UC5R",
    },
    {
        title: "Big Data Integration and Processing",
        issuer: "Coursera",
        date: "Apr 2022",
        link: "https://coursera.org/verify/7N2TDT79UQVS",
    },
    {
        title: "Big Data Modeling and Management Systems",
        issuer: "Coursera",
        date: "Apr 2022",
        link: "https://coursera.org/verify/MQTP95LCB9L5",
    },
    {
        title: "Introduction to Big Data",
        issuer: "Coursera",
        date: "Mar 2022",
        link: "https://coursera.org/verify/D77K6ZA2V6EA",
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

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all"
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
