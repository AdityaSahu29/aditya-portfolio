import { Container, Row, Col } from "react-bootstrap";

function CommercialProjects() {
    return (
        <section id="commercial">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    COMMERCIAL PROJECTS
                </h2>

                <Row>

                    <Col lg={6}>

                        <div className="glass-card p-4 h-100">

                            <h3 className="text-info">
                                Workverse Simulations
                            </h3>

                            <p>
                                Developed mobile-based 3D simulation
                                applications using Unity.
                            </p>

                            <ul>
                                <li>Workverse</li>
                                <li>Bellverse</li>
                                <li>Kamlaverse</li>
                            </ul>

                            <p>
                                Led complete Unity development of
                                Kamlaverse including gameplay systems,
                                UI, optimization and deployment.
                            </p>

                        </div>

                    </Col>

                    <Col lg={6}>

                        <div className="glass-card p-4 h-100">

                            <h3 className="text-info">
                                Big Pixels Technology
                            </h3>

                            <p>
                                Contributed to published educational
                                and creativity-focused mobile games.
                            </p>

                            <ul>
                                <li>ABC Preschool Games</li>
                                <li>Animal Coloring Games for Kids</li>
                                <li>ABC Flashcards & Puzzle Games</li>
                                <li>Mandala Art: Coloring Pages</li>
                                <li>Super Hero Games Coloring</li>
                            </ul>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default CommercialProjects;