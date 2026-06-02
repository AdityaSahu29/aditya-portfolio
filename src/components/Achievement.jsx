import { Container, Row, Col } from "react-bootstrap";

function Achievement() {
    return (
        <section id="achievement">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    ACHIEVEMENTS
                </h2>

                <Row>

                    <Col lg={6} className="mb-4">

                        <div className="glass-card p-4 h-100">

                            <h3 className="text-info">
                                Unity × Google Play Developer Program
                            </h3>

                            <p className="mt-3">
                                Selected among 500 developers from over
                                5,400 applicants across India.
                            </p>

                            <p>
                                Successfully completed the Unity × Google Play
                                Game Developer Training Program and gained
                                industry-level exposure to Unity development.
                            </p>

                        </div>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <div className="glass-card p-4 h-100">

                            <h3 className="text-info">
                                Unity Certified Associate
                            </h3>

                            <p className="mt-3">
                                Earned the Unity Certified Associate
                                certification demonstrating knowledge of
                                gameplay programming, Unity workflows and
                                game development fundamentals.
                            </p>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Achievement;