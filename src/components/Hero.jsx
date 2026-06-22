import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaChevronDown } from "react-icons/fa";

import HeroAvatar from "./HeroAvatar";
import { RippleLink } from "./RippleButton";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="orb orb1"></div>
            <div className="orb orb2"></div>

            <Container>

                <Row className="align-items-center gy-5">

                    {/* LEFT SIDE */}

                    <Col lg={7} md={12}>

                        <motion.div
                            className="hero-status"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="status-dot"></span>
                            Available for Unity & Simulation Roles
                        </motion.div>

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

                            <RippleLink
                                href="#games"
                                className="cyber-btn"
                            >
                                Explore Projects
                            </RippleLink>

                            <RippleLink
                                href={`${import.meta.env.BASE_URL}Aditya-GameDeveloper.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-btn"
                            >
                                View Resume
                            </RippleLink>

                        </div>

                        <div className="achievement-badge">

                            Unity Certified Associate

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

                            <div className="hero-avatar-shell">
                                <HeroAvatar />
                            </div>

                        </motion.div>

                    </Col>

                </Row>

            </Container>

            {/* SCROLL DOWN INDICATOR */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <FaChevronDown />
            </motion.div>

        </section>
    );
}

export default Hero;
