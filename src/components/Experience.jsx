import { Container } from "react-bootstrap";

function Experience() {

    const jobs = [

        {
            year: "2025 - Present",
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
                "TenderTrack"
            ]
        },

        {
            year: "2024 - 2025",
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
            year: "2024",
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
            year: "2023 - 2024",
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

    return (

        <section id="experience">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    EXPERIENCE JOURNEY

                </h2>

                <div className="timeline">

                    {jobs.map((job, index) => (

                        <div
                            className="timeline-item"
                            key={index}
                        >

                            <div className="timeline-dot"></div>

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

                        </div>

                    ))}

                </div>

            </Container>

        </section>

    );
}

export default Experience;