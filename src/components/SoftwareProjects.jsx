import { useState } from "react";

import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import softwareProjectsData from "../data/softwareProjectsData";

import SoftwareProjectsModal from "./SoftwareProjectsModal";

function SoftwareProjects() {

    const [show, setShow] = useState(false);

    const [selectedProject, setSelectedProject] =
        useState(null);

    const openProject = (project) => {

        setSelectedProject(project);

        setShow(true);
    };

    return (

        <section id="software-projects">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">

                    SOFTWARE PROJECTS

                </h2>

                <Row>

                    {softwareProjectsData.map((project) => (

                        <Col
                            lg={4}
                            md={6}
                            className="mb-4"
                            key={project.id}
                        >

                            <Card className="glass-card game-card h-100">

                                <div className="game-image-wrapper">

                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        className="game-img"
                                    />

                                </div>

                                <Card.Body>

                                    <Card.Title className="game-title">

                                        {project.title}

                                    </Card.Title>

                                    <div className="feature-tags">

                                        {project.features
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

                                        {project.overview}

                                    </Card.Text>

                                    <div className="tech-stack">

                                        {project.technologies
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
                                                openProject(project)
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

            <SoftwareProjectsModal
                show={show}
                onHide={() => setShow(false)}
                project={selectedProject}
            />

        </section>

    );
}

export default SoftwareProjects;