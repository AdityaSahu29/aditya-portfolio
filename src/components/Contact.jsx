import { Container } from "react-bootstrap";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileDownload,
    FaGooglePlay
} from "react-icons/fa";

function Contact() {
    return (
        <section id="contact">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    LET'S CONNECT
                </h2>

                <div className="glass-card p-5 text-center">

                    <p className="lead">
                        Open to Unity, Game Development and
                        Interactive Simulation opportunities.
                    </p>

                    <div className="social-links mt-5">

                        <a
                            href="https://github.com/AdityaSahu29"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aditya-sahu29/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="mailto:sahuaditya215@gmail.com"
                        >
                            <FaEnvelope />
                            <span>Email</span>
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}public/Aditya-GameDeveloper.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-btn"
                        >
                            <FaFileDownload />
                            <span>Resume</span>
                        </a>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.techmate.penfight"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGooglePlay />
                            <span>Play Store</span>
                        </a>

                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Contact;