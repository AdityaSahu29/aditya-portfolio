import { Container } from "react-bootstrap";

const skills = [
    "Unity",
    "C#",
    "Game Development",
    "Mobile Games",
    "Physics Systems",
    "UI Design",
    "Animation",
    "Git",
    "Plastic SCM",
    "Adobe Animate",
    "React",
    "Node.js",
    "SQLite",
    "Problem Solving"
];

function Skills() {
    return (
        <section id="skills">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    TECH STACK
                </h2>

                <div className="text-center">

                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="skill-pill"
                        >
                            {skill}
                        </span>
                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Skills;