"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function DeveloperStats() {
    return (
        <section className="section-padding" id="stats">
            <div className="container-custom">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-12"
                >
                    Developer Activity
                </motion.h2>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* GitHub Contribution Graph */}
                    <motion.div
                        className="card-custom"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-lg font-semibold mb-6">
                            GitHub Contributions
                        </h3>

                        <GitHubCalendar
                            username="Darshan2095"
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={5}
                        />
                    </motion.div>

                    {/* Quick Developer Stats */}
                    <motion.div
                        className="card-custom flex flex-col justify-center gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >

                        <div>
                            <h4 className="text-sm text-muted-foreground">
                                Projects Built
                            </h4>
                            <p className="text-3xl font-bold">10+</p>
                        </div>

                        <div>
                            <h4 className="text-sm text-muted-foreground">
                                Technologies Used
                            </h4>
                            <p className="text-3xl font-bold">15+</p>
                        </div>

                        <div>
                            <h4 className="text-sm text-muted-foreground">
                                GitHub Repositories
                            </h4>
                            <p className="text-3xl font-bold">20+</p>
                        </div>

                        <div>
                            <h4 className="text-sm text-muted-foreground">
                                Years Coding
                            </h4>
                            <p className="text-3xl font-bold">3+</p>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}