import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";

function Experience() {
    const timelineRef = useRef(null);
    const [timelineProgress, setTimelineProgress] = useState(0);

    const jobs = [

        {
            year: "Nov 2025 - Present",
            company: "Ind-Velloni",
            role: "Developer",

            tech: [
                "React",
                "Node.js",
                "Express",
                "SQLite",
                "AI"
            ],

            achievements: [
                "Applicant Tracking System",
                "Agreement Management System",
                "Tender Searching & Tracking System"
            ]
        },

        {
            year: "Dec 2024 - Oct2025",
            company: "Workverse",
            role: "Game Developer & Growth Architect",

            tech: [
                "Unity",
                "C#",
                "Simulation",
                "Mobile"
            ],

            achievements: [
                "Workverse",
                "Bellverse",
                "Kamlaverse"
            ]
        },

        {
            year: "Apr 2024 - Nov 2024",
            company: "Big Pixel Technologies",
            role: "Game Developer",

            tech: [
                "Adobe Animate",
                "ActionScript",
                "Android"
            ],

            achievements: [
                "ABC Preschool Games",
                "Animal Coloring Games",
                "Mandala Art"
            ]
        },

        {
            year: "Dec 2023 - Apr 2024",
            company: "TenderOnTime",
            role: "Python Developer",

            tech: [
                "Python",
                "Automation",
                "Web Scraping"
            ],

            achievements: [
                "Multi-threaded Scrapers",
                "Automation Systems"
            ]
        }

    ];

    useEffect(() => {
        const updateProgress = () => {
            const timeline = timelineRef.current;

            if (!timeline) {
                return;
            }

            const rect = timeline.getBoundingClientRect();
            const viewportCenter = window.innerHeight * 0.55;
            const progress = ((viewportCenter - rect.top) / rect.height) * 100;

            setTimelineProgress(Math.max(0, Math.min(100, progress)));
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    const getInitials = (company) => company
        .split(/\s|-/)
        .filter(Boolean)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (

        <section id="experience">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    EXPERIENCE JOURNEY

                </h2>

                <div
                    className="timeline"
                    ref={timelineRef}
                    style={{ "--timeline-progress": `${timelineProgress}%` }}
                >

                    {jobs.map((job, index) => (

                        <RevealOnScroll
                            className="timeline-item"
                            key={index}
                            delay={index * 120}
                            direction="left"
                        >

                            <div className="timeline-dot">
                                <span>{getInitials(job.company)}</span>
                            </div>

                            <div className="timeline-content">

                                <span className="timeline-year">
                                    {job.year}
                                </span>

                                <h3>
                                    {job.company}
                                </h3>

                                <h5>
                                    {job.role}
                                </h5>

                                <div className="timeline-tech">

                                    {job.tech.map((tech, i) => (

                                        <span
                                            key={i}
                                            className="tech-pill"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <ul>

                                    {job.achievements.map((item, i) => (

                                        <li key={i}>
                                            {item}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </RevealOnScroll>

                    ))}

                </div>

            </Container>

        </section>

    );
}

export default Experience;
