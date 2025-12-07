"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Linux Custom Shell",
        description: "Developed a custom Linux Shell with fuzzy autocomplete, file search, and process monitoring using Python and C. Enhanced OS interaction and control.",
        tags: ["Python", "C", "System Programming", "Linux"],
        github: "#",
        demo: "#",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
    },
    {
        title: "Traffic Analyzer",
        description: "Command-line tool to analyze TCP traffic by capturing packets and filtering based on TCP header flags (SYN, ACK, FIN) using Python and Scapy.",
        tags: ["Python", "Networking", "Wireshark", "Scapy", "TCP/IP"],
        github: "#",
        demo: "#",
        image: "/traffic_analyzer.png",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow as a developer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                                    >
                                        <Github className="h-5 w-5 text-foreground" />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                                    >
                                        <ExternalLink className="h-5 w-5 text-foreground" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
