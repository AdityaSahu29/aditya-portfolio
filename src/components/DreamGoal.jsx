import { Container } from "react-bootstrap";

function DreamGoal() {
    return (
        <section id="goal">

            <Container>

                <div className="glass-card p-5 text-center">

                    <h2 className="display-4 neon-text">
                        MY DREAM PROJECT
                    </h2>

                    <p className="lead mt-4">
                        A multiplayer open-world game inspired by
                        school life and childhood memories.
                    </p>

                    <p>
                        Imagine GTA-style freedom combined with
                        school adventures, friendships, sports,
                        festivals, exploration and mischief.
                    </p>

                    <h4 className="text-info mt-4">
                        "Back to School: The Ultimate Playground"
                    </h4>

                </div>

            </Container>

        </section>
    );
}

export default DreamGoal;