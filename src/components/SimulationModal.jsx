import { Modal, Button } from "react-bootstrap";

function SimulationModal({ show, onHide, simulation }) {

    if (!simulation) return null;

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>
                    {simulation.title}
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <img
                    src={simulation.image}
                    alt={simulation.title}
                    className="img-fluid rounded mb-4"
                />

                <h4>Overview</h4>

                <p>
                    {simulation.overview}
                </p>

                <h4>My Role</h4>

                <p>
                    {simulation.role}
                </p>

                <h4>Features</h4>

                <ul>
                    {simulation.features.map((feature, index) => (
                        <li key={index}>
                            {feature}
                        </li>
                    ))}
                </ul>

                <h4>Technologies</h4>

                <div>
                    {simulation.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="skill-pill"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <h4 className="mt-4">
                    Challenges Solved
                </h4>

                <p>
                    {simulation.challenges}
                </p>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="outline-info"
                    href={simulation.playstore}
                    target="_blank"
                >
                    Play Store
                </Button>

                <Button
                    variant="info"
                    onClick={onHide}
                >
                    Close
                </Button>

            </Modal.Footer>

        </Modal>
    );
}

export default SimulationModal;