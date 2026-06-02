import { Container } from "react-bootstrap";

function Experience() {
    return (
        <section id="experience">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    EXPERIENCE
                </h2>

                <div className="timeline">

                    <div className="timeline-item">

                        <h3>Ind-Velloni</h3>

                        <h5>Developer</h5>

                        <p>Nov 2025 - Present</p>

                        <ul>
                            <li>Developed AI-powered internal tools.</li>
                            <li>Built TenderTrack for GeM tender scraping and management.</li>
                            <li>Built Agreement Management System with role-based access and version control.</li>
                            <li>Built Applicant Tracking System using React, Node.js, Express and SQLite.</li>
                        </ul>

                    </div>

                    <div className="timeline-item">

                        <h3>Workverse</h3>

                        <h5>Game Developer & Growth Architect</h5>

                        <p>Dec 2024 - Oct 2025</p>

                        <ul>
                            <li>Designed and developed gameplay systems in Unity.</li>
                            <li>Built 3D simulation projects including Workverse, Bellverse and Kamlaverse.</li>
                            <li>Led Unity development of Kamlaverse.</li>
                            <li>Collaborated with teams on feature implementation and debugging.</li>
                            <li>Managed client communication and requirements gathering.</li>
                        </ul>

                    </div>

                    <div className="timeline-item">

                        <h3>Big Pixel Technologies</h3>

                        <h5>Game Developer</h5>

                        <p>Apr 2024 - Oct 2024</p>

                        <ul>
                            <li>Developed Android games using Adobe Animate and ActionScript.</li>
                            <li>Worked on multiple educational and coloring applications.</li>
                        </ul>

                    </div>

                    <div className="timeline-item">

                        <h3>TenderOnTime</h3>

                        <h5>Python Developer</h5>

                        <p>Dec 2023 - Apr 2024</p>

                        <ul>
                            <li>Built multithreaded web scraping solutions using Python.</li>
                            <li>Automated data collection and operational workflows.</li>
                        </ul>

                    </div>

                    <div className="timeline-item">

                        <h3>FooFoo Kids</h3>

                        <h5>Game Developer Intern</h5>

                        <p>Dec 2023 - Apr 2024</p>

                        <ul>
                            <li>Assisted in mobile game development and gameplay implementation.</li>
                        </ul>

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Experience;