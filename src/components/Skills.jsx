import { Container } from "react-bootstrap";

function Skills() {

    const categories = [

        {
            title: "Game Development",

            skills: [
                "Unity",
                "C#",
                "Physics",
                "Animation",
                "UI Systems",
                "Addressables",
                "Gameplay Programming"
            ]
        },

        {
            title: "Programming",

            skills: [
                "Python",
                "Java",
                "ActionScript",
                "C#"
            ]
        },

        {
            title: "Tools",

            skills: [
                "Git",
                "Plastic SCM",
                "VS Code",
                "Android Studio"
            ]
        },

        {
            title: "Soft Skills",

            skills: [
                "Problem Solving",
                "Communication",
                "Team Collaboration",
                "Leadership",
                "Client Management",
                "Requirement Gathering"
            ]
        }

    ];

    return (

        <section id="skills">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    SKILLS & EXPERTISE
                </h2>

                <div className="skills-grid">

                    {
                        categories.map((cat, index) => (

                            <div
                                key={index}
                                className="skill-category"
                            >

                                <h3>{cat.title}</h3>

                                <div>

                                    {
                                        cat.skills.map((skill, i) => (

                                            <span
                                                key={i}
                                                className="skill-pill"
                                            >
                                                {skill}
                                            </span>

                                        ))
                                    }

                                </div>

                            </div>

                        ))
                    }

                </div>

            </Container>

        </section>

    );

}

export default Skills;