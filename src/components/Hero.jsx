import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import GameController3D from "./GameController3D";

function Hero() {
    return (
        <section className="hero">

            <div className="orb orb1"></div>
            <div className="orb orb2"></div>

            <Container>

                <Row className="align-items-center gy-5">

                    {/* LEFT SIDE */}

                    <Col lg={7} md={12}>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            ADITYA SAHU
                        </motion.h1>

                        <div className="hero-subtitle">

                            <Typewriter
                                words={[
                                    "Unity Game Developer",
                                    "Simulation Developer",
                                    "Mobile Game Creator",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={40}
                            />

                        </div>

                        <p className="hero-description">

                            Game Developer specializing in Unity,
                            gameplay systems, simulations and mobile
                            applications.

                            <br /><br />

                            Experienced in developing commercial
                            simulation platforms, published Play Store
                            applications and web products.

                        </p>

                        <div className="hero-buttons">

                            <a
                                href="#games"
                                className="cyber-btn"
                            >
                                Explore Projects
                            </a>

                            <a
                                href={`${import.meta.env.BASE_URL}public/Aditya-GameDeveloper.pdf`}
                                download
                                className="resume-btn"
                            >
                                Download Resume
                            </a>

                        </div>

                        <div className="achievement-badge">

                            🏆 Unity Certified Associate

                        </div>

                    </Col>

                    {/* RIGHT SIDE */}

                    <Col lg={5} md={12}>

                        <motion.div
                            className="controller-container"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >

                            <GameController3D />

                        </motion.div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Hero;