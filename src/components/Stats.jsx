import { Container, Row, Col } from "react-bootstrap";

function Stats() {
    return (
        <section>

            <Container>

                <Row>

                    <Col md={3}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">10+</div>
                            <p>Games & Apps Built</p>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">5</div>
                            <p>Play Store Titles</p>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">3</div>
                            <p>3D Simulations Delivered</p>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">2+</div>
                            <p>Years Professional Experience</p>
                        </div>
                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Stats;