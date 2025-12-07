"use client";

import { motion } from "framer-motion";

const skills = {
    Frontend: [
        "ReactJS", "NextJS", "TypeScript", "JavaScript", "HTML/CSS", "jQuery", "Flutter", "Dart", "AG-grid"
    ],
    Backend: [
        "Node.js", "Python", "PHP", "C#", "C++", "Java", "SQL", "Laravel", ".NET"
    ],
    "Tools & Cloud": [
        "Azure", "Power BI", "GitHub", "Unity", "Selenium", "Cypress", "Databricks", "VS Code"
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
