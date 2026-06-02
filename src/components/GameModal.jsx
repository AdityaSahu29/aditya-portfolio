import { Modal, Button } from "react-bootstrap";

function GameModal({ show, onHide, game }) {

    if (!game) return null;

    return (

        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title>
                    {game.title}
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <img
                    src={game.image}
                    alt={game.title}
                    className="img-fluid rounded mb-4"
                />

                <h4>Overview</h4>

                <p>
                    {game.overview}
                </p>
                <h4>My Role</h4>

                <p>
                    {game.role}
                </p>

                <h4>Features</h4>

                <ul>
                    {
                        game.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))
                    }
                </ul>

                <h4>Technologies</h4>

                <div>

                    {
                        game.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="skill-pill"
                            >
                                {tech}
                            </span>
                        ))
                    }

                </div>

                <h4 className="mt-4">
                    Challenges Solved
                </h4>

                <p>
                    {game.challenges}
                </p>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="info"
                    href={game.playstore}
                    target="_blank"
                >
                    Play Store
                </Button>

            </Modal.Footer>

        </Modal>

    );
}

export default GameModal;