import { Modal, Button } from "react-bootstrap";

function SoftwareProjectsModal({
    show,
    onHide,
    project
}) {

    if (!project) return null;

    return (

        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>
                    {project.title}
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded mb-4"
                />

                <h4>Overview</h4>

                <p>
                    {project.overview}
                </p>

                <h4>My Role</h4>

                <p>
                    {project.role}
                </p>

                <h4>Features</h4>

                <ul>

                    {project.features.map((feature, index) => (

                        <li key={index}>
                            {feature}
                        </li>

                    ))}

                </ul>

                <h4>Technologies</h4>

                <div>

                    {project.technologies.map((tech, index) => (

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
                    {project.challenges}
                </p>

            </Modal.Body>

            <Modal.Footer>

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

export default SoftwareProjectsModal;