import { Container, Row, Col } from "react-bootstrap";

const apps = [
    {
        name: "ABC Preschool Games",
        link: "#"
    },

    {
        name: "Animal Coloring Games for Kids",
        link: "#"
    },

    {
        name: "ABC Flashcards & Puzzle Games",
        link: "#"
    },

    {
        name: "Mandala Art: Coloring Pages",
        link: "#"
    },

    {
        name: "Super Hero Games Coloring",
        link: "#"
    }
];

function PublishedApps() {
    return (
        <section id="published-apps">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    PUBLISHED PLAY STORE APPS
                </h2>

                <Row>

                    {apps.map((app, index) => (
                        <Col lg={4} md={6} key={index} className="mb-4">

                            <div className="glass-card app-card p-4 h-100">

                                <h4>{app.name}</h4>

                                <p>
                                    Published on Google Play Store
                                </p>

                                <a
                                    href={app.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-info"
                                >
                                    View App
                                </a>

                            </div>

                        </Col>
                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default PublishedApps;