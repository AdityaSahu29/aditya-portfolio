import { useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import publishedAppsData from "../data/publishedAppsData";

import PublishedAppsModal from "./PublishedAppsModal";

function PublishedApps() {

    const [show, setShow] = useState(false);

    const [selectedApp, setSelectedApp] =
        useState(null);

    const openApp = (app) => {

        setSelectedApp(app);

        setShow(true);
    };

    return (

        <section id="published-apps">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    PUBLISHED PLAY STORE APPS

                </h2>

                <Row>

                    {publishedAppsData.map((app) => (

                        <Col
                            lg={4}
                            md={6}
                            className="mb-4"
                            key={app.id}
                        >

                            <Card className="glass-card game-card h-100">

                                <div className="game-image-wrapper">

                                    <Card.Img
                                        variant="top"
                                        src={app.image}
                                        className="game-img"
                                    />

                                </div>

                                <Card.Body>

                                    <Card.Title className="game-title">

                                        {app.title}

                                    </Card.Title>

                                    <div className="feature-tags">

                                        {app.features
                                            .slice(0, 3)
                                            .map((feature, index) => (

                                                <span
                                                    key={index}
                                                    className="feature-tag"
                                                >
                                                    {feature}
                                                </span>

                                            ))}

                                    </div>

                                    <Card.Text className="game-description">

                                        {app.overview}

                                    </Card.Text>

                                    <div className="tech-stack">

                                        {app.technologies
                                            .slice(0, 2)
                                            .map((tech, index) => (

                                                <span
                                                    key={index}
                                                    className="tech-pill"
                                                >
                                                    {tech}
                                                </span>

                                            ))}

                                    </div>

                                    <div className="game-buttons">

                                        <Button
                                            className="details-btn"
                                            onClick={() =>
                                                openApp(app)
                                            }
                                        >

                                            View Details

                                        </Button>

                                        <Button
                                            className="details-btn"
                                            href={app.playstore}
                                            target="_blank"
                                        >

                                            Play Store

                                        </Button>

                                    </div>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

            <PublishedAppsModal
                show={show}
                onHide={() => setShow(false)}
                app={selectedApp}
            />

        </section>

    );
}

export default PublishedApps;