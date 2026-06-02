import { useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import simulationData from "../data/simulationData";
import SimulationModal from "./SimulationModal";

function Simulations() {

    const [show, setShow] = useState(false);

    const [selectedSimulation, setSelectedSimulation] =
        useState(null);

    const openSimulation = (simulation) => {

        setSelectedSimulation(simulation);

        setShow(true);
    };

    return (

        <section id="simulations">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    3D SIMULATION PROJECTS

                </h2>

                <Row>

                    {simulationData.map((simulation) => (

                        <Col
                            lg={4}
                            md={6}
                            className="mb-4"
                            key={simulation.id}
                        >

                            <Card className="glass-card game-card h-100">

                                <div className="game-image-wrapper">

                                    <Card.Img
                                        variant="top"
                                        src={simulation.image}
                                        className="game-img"
                                    />

                                </div>

                                <Card.Body>

                                    <Card.Title className="game-title">

                                        {simulation.title}

                                    </Card.Title>

                                    <div className="feature-tags">

                                        {simulation.features
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

                                        {simulation.overview}

                                    </Card.Text>

                                    <div className="tech-stack">

                                        {simulation.technologies
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
                                                openSimulation(simulation)
                                            }
                                        >

                                            View Details

                                        </Button>

                                    </div>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

            <SimulationModal
                show={show}
                onHide={() => setShow(false)}
                simulation={selectedSimulation}
            />

        </section>

    );
}

export default Simulations;