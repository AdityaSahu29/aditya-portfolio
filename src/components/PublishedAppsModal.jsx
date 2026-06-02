import { Modal, Button } from "react-bootstrap";

function PublishedAppsModal({
    show,
    onHide,
    app
}) {

    if (!app) return null;

    return (

        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>

                    {app.title}

                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <img
                    src={app.image}
                    alt={app.title}
                    className="img-fluid rounded mb-4"
                />

                <h4>Overview</h4>

                <p>
                    {app.overview}
                </p>

                <h4>My Role</h4>

                <p>
                    {app.role}
                </p>

                <h4>Features</h4>

                <ul>

                    {app.features.map((feature, index) => (

                        <li key={index}>
                            {feature}
                        </li>

                    ))}

                </ul>

                <h4>Technologies</h4>

                <div>

                    {app.technologies.map((tech, index) => (

                        <span
                            key={index}
                            className="skill-pill"
                        >
                            {tech}
                        </span>

                    ))}

                </div>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="info"
                    href={app.playstore}
                    target="_blank"
                >

                    View On Play Store

                </Button>

            </Modal.Footer>

        </Modal>

    );
}

export default PublishedAppsModal;