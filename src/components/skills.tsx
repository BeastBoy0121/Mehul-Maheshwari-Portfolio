"use client";

import { motion } from "framer-motion";

const skills = {
    "Languages": [
        "Python", "Java", "JavaScript", "TypeScript", "C/ C++", "C#", "SQL", "KQL", "PHP", "Dart", "HTML/CSS"
    ],
    "Frameworks & Libraries": [
        "React", "Next.js", "Node.js", "Laravel", "Django", "Flutter", ".NET", "jQuery", "AG-grid", "Tailwind CSS"
    ],
    "Tools & Platforms": [
        "Azure", "Azure AI Foundry", "Azure Monitoring", "Databricks", "Power BI", "Git/GitHub", "Unity", "Selenium", "Cypress", "VS Code", "Docker"
    ]
};

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My technical stack is built on modern, reliable tools that allow me to build scalable and performant applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-20 justify-items-center max-w-7xl mx-auto">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group pt-10 px-4 w-full flex justify-center perspective-1000 h-full"
                        >
                            <div className="relative w-full max-w-[350px] transition-transform duration-300 ease-out group-hover:-translate-y-2 h-full">
                                {/* Folder Back Layer (Depth) */}
                                <div className="absolute top-0 left-0 w-full h-full bg-border rounded-xl transform translate-y-2 translate-x-2 -z-10 group-hover:bg-yellow-200/50 transition-colors duration-300" />

                                {/* Folder Tab */}
                                <div className="absolute -top-10 left-0 w-40 h-10 bg-card border-t border-l border-r border-border rounded-t-xl z-0 group-hover:bg-yellow-400 group-hover:border-yellow-500 transition-colors duration-300" />

                                {/* Folder Body */}
                                <div className="relative z-10 bg-card border border-border rounded-b-xl rounded-tr-xl rounded-tl-none p-8 min-h-[240px] flex flex-col group-hover:bg-yellow-50 group-hover:border-yellow-400 transition-all duration-300 shadow-sm group-hover:shadow-xl h-full">
                                    <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-yellow-900 transition-colors duration-300 flex items-center gap-2">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 content-start">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg transition-colors cursor-default group-hover:bg-yellow-200 group-hover:text-yellow-900 border border-transparent group-hover:border-yellow-300/50"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
