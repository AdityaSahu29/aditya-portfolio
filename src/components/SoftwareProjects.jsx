import { Container, Row, Col } from "react-bootstrap";

const projects = [
    {
        title: "Applicant Tracking System",
        stack: "React • Node.js • Express • SQLite",
        description:
            "Role-based hiring platform with job approvals, candidate management and workflow automation."
    },

    {
        title: "Agreement Management System",
        stack: "React • Node.js • Express • SQLite",
        description:
            "Document management platform with version control, role-based permissions and workflow tracking."
    },

    {
        title: "TenderTrack",
        stack: "Python • AI • Scraping",
        description:
            "Government tender scraping, monitoring and tracking platform with automation features."
    }
];

function SoftwareProjects() {
    return (
        <section id="software-projects">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    SOFTWARE PROJECTS
                </h2>

                <Row>

                    {projects.map((project, index) => (
                        <Col lg={4} key={index} className="mb-4">

                            <div className="glass-card software-card p-4 h-100">

                                <h3>{project.title}</h3>

                                <p className="tech-text">
                                    {project.stack}
                                </p>

                                <p>
                                    {project.description}
                                </p>

                            </div>

                        </Col>
                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default SoftwareProjects;