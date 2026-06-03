import { useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import gamesData from "../data/gamesData";

import GameModal from "./GameModal";

function Games() {

    const [selectedGame, setSelectedGame] = useState(null);

    const [show, setShow] = useState(false);

    const openGame = (game) => {
        setSelectedGame(game);
        setShow(true);
    };

    return (

        <section id="games">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    FEATURED GAMES
                </h2>

                <Row>

                    {
                        gamesData.map((game) => (

                            <Col
                                lg={4}
                                md={6}
                                className="mb-4"
                                key={game.id}
                            >

                                <Card className="glass-card game-card h-100">

                                    <div className="game-image-wrapper">

                                        <Card.Img
                                            variant="top"
                                            src={game.image}
                                            className="game-img"
                                        />

                                        <div className="game-overlay">

                                            <span className="game-badge">
                                                Unity Project
                                            </span>

                                        </div>

                                    </div>

                                    <Card.Body>

                                        <Card.Title className="game-title">
                                            {game.title}
                                        </Card.Title>

                                        <div className="feature-tags">

                                            {game.features.slice(0, 3).map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="feature-tag"
                                                >
                                                    {feature}
                                                </span>
                                            ))}

                                        </div>

                                        <Card.Text className="game-description">

                                            {game.overview.substring(0, 100)}...

                                        </Card.Text>

                                        <div className="tech-stack">

                                            {game.technologies.slice(0, 2).map((tech, index) => (
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
                                                onClick={() => {
                                                    openGame(game);
                                                }}
                                            >
                                                View Details
                                            </Button>

                                            <Button
                                                className="details-btn"
                                                variant="success"
                                                href={game.apk}
                                                download
                                            >
                                                Android APK
                                            </Button>

                                        </div>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))
                    }

                </Row>

            </Container>

            <GameModal
                show={show}
                onHide={() => setShow(false)}
                game={selectedGame}
            />

        </section>

    );
}

export default Games;