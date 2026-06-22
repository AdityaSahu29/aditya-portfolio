import { Container, Row, Col } from "react-bootstrap";
import RevealOnScroll from "./RevealOnScroll";

const achievements = [
    {
        title: "Unity Certified Associate",
        issuer: "Unity",
        image: `${import.meta.env.BASE_URL}images/certificates/associate.png`
    },

    {
        title: "Unity Essentials",
        issuer: "Unity",
        image: `${import.meta.env.BASE_URL}images/certificates/essentials.png`
    },

    {
        title: "Unity Junior Programmer",
        issuer: "Unity",
        image: `${import.meta.env.BASE_URL}images/certificates/junior-programmer.png`
    }
];

function Achievement() {

    return (

        <section id="achievements">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    CERTIFICATIONS & ACHIEVEMENTS

                </h2>

                <Row>

                    {achievements.map((badge, index) => (

                        <RevealOnScroll
                            as={Col}
                            lg={4}
                            md={6}
                            key={index}
                            className="mb-4"
                            delay={index * 100}
                        >

                            <div className="achievement-card">

                                <div className="achievement-image-wrapper">

                                    <img
                                        src={badge.image}
                                        alt={badge.title}
                                        className="achievement-image"
                                    />

                                </div>

                                <h4>
                                    {badge.title}
                                </h4>

                                <p>
                                    Issued by {badge.issuer}
                                </p>

                            </div>

                        </RevealOnScroll>

                    ))}

                </Row>

            </Container>

        </section>

    );
}

export default Achievement;
