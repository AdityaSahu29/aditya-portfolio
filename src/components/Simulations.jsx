import { Container, Row, Col } from "react-bootstrap";

const simulations = [
    {
        title: "Workverse",
        role: "Game Developer & Growth Architect",
        description:
            "Mobile-based 3D simulation platform developed using Unity for training and interactive experiences."
    },

    {
        title: "Bellverse",
        role: "Unity Developer",
        description:
            "Interactive simulation experience designed for engagement and immersive learning."
    },

    {
        title: "Kamlaverse",
        role: "Lead Unity Developer",
        description:
            "Managed complete Unity development independently including gameplay systems, UI, optimization and deployment."
    }
];

function Simulations() {
    return (
        <section id="simulations">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    3D SIMULATION PROJECTS
                </h2>

                <Row>

                    {simulations.map((sim, index) => (
                        <Col lg={4} key={index} className="mb-4">

                            <div className="glass-card simulation-card p-4 h-100">

                                <h3>{sim.title}</h3>

                                <span className="role-badge">
                                    {sim.role}
                                </span>

                                <p className="mt-3">
                                    {sim.description}
                                </p>

                            </div>

                        </Col>
                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default Simulations;