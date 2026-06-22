import { Container, Row, Col } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";

function Stats() {
    return (
        <section>

            <Container>

                <Row>

                    <RevealOnScroll as={Col} md={3} delay={0}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">10+</div>
                            <p>Games & Apps Built</p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll as={Col} md={3} delay={90}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">5</div>
                            <p>Play Store Titles</p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll as={Col} md={3} delay={180}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">3</div>
                            <p>3D Simulations Delivered</p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll as={Col} md={3} delay={270}>
                        <div className="glass-card stat-box">
                            <div className="stat-number">2+</div>
                            <p>Years Professional Experience</p>
                        </div>
                    </RevealOnScroll>

                </Row>

            </Container>

        </section>
    );
}

export default Stats;
