import { Container } from "react-bootstrap";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileDownload,
    FaGooglePlay
} from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";
import { RippleLink } from "./RippleButton";

function Contact() {
    return (
        <section id="contact">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    LET'S CONNECT
                </h2>

                <RevealOnScroll className="glass-card contact-card p-5 text-center">

                    <span className="contact-kicker">Ready for the next build</span>

                    <h3 className="contact-title">
                        Let’s Build Something Interactive
                    </h3>

                    <p className="lead">
                        Open to Unity, Game Development and
                        Interactive Simulation opportunities.
                    </p>

                    <RippleLink
                        href="mailto:sahuaditya215@gmail.com"
                        className="contact-primary-btn"
                    >
                        <FaEnvelope />
                        <span>Mail Me</span>
                    </RippleLink>

                    <div className="social-links mt-5">

                        <RippleLink
                            href="https://github.com/AdityaSahu29"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </RippleLink>

                        <RippleLink
                            href="https://www.linkedin.com/in/aditya-sahu29/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </RippleLink>

                        <RippleLink
                            href={`${import.meta.env.BASE_URL}Aditya-GameDeveloper.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-btn"
                        >
                            <FaFileDownload />
                            <span>Resume</span>
                        </RippleLink>

                        <RippleLink
                            href="https://play.google.com/store/apps/details?id=com.techmate.penfight"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGooglePlay />
                            <span>Play Store</span>
                        </RippleLink>

                    </div>

                </RevealOnScroll>

            </Container>

        </section>
    );
}

export default Contact;
