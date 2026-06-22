import { Container } from "react-bootstrap";
import {
    FaCode,
    FaGamepad,
    FaTools,
    FaUsers
} from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";

function Skills() {
    const coreStack = [
        "Unity",
        "C#",
        "React",
        "Python",
        "Node.js",
        "SQLite"
    ];

    const categories = [

        {
            title: "Game Development",
            icon: FaGamepad,

            skills: [
                { name: "Unity", level: 95 },
                { name: "C#", level: 90 },
                { name: "Physics", level: 85 },
                { name: "Animation", level: 85 },
                { name: "UI Systems", level: 88 },
                { name: "Addressables", level: 80 },
                { name: "Gameplay Programming", level: 92 }
            ]
        },

        {
            title: "Programming",
            icon: FaCode,

            skills: [
                { name: "Python", level: 85 },
                { name: "Java", level: 78 },
                { name: "ActionScript", level: 75 },
                { name: "C#", level: 90 }
            ]
        },

        {
            title: "Tools",
            icon: FaTools,

            skills: [
                { name: "Git", level: 88 },
                { name: "Plastic SCM", level: 85 },
                { name: "VS Code", level: 90 },
                { name: "Android Studio", level: 82 }
            ]
        },

        {
            title: "Soft Skills",
            icon: FaUsers,

            skills: [
                { name: "Problem Solving", level: 95 },
                { name: "Communication", level: 88 },
                { name: "Team Collaboration", level: 90 },
                { name: "Leadership", level: 85 },
                { name: "Client Management", level: 87 },
                { name: "Requirement Gathering", level: 86 }
            ]
        }

    ];

    return (

        <section id="skills">

            <Container>

                <h2 className="display-4 text-center neon-text mb-5">
                    SKILLS & EXPERTISE
                </h2>

                <RevealOnScroll className="core-stack">
                    <span className="core-stack-label">Core Stack</span>

                    <div className="core-stack-list">
                        {coreStack.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </RevealOnScroll>

                <div className="skills-grid">

                    {
                        categories.map((cat, index) => {
                            const Icon = cat.icon;

                            return (
                                <RevealOnScroll
                                    key={index}
                                    className="skill-category"
                                    delay={index * 100}
                                >

                                    <div className="skill-category-heading">
                                        <span className="skill-category-icon">
                                            <Icon />
                                        </span>
                                        <h3>{cat.title}</h3>
                                    </div>

                                    <div>

                                        {
                                            cat.skills.map((skill, i) => (

                                                <div
                                                    key={i}
                                                    className="skill-item"
                                                >
                                                    <div className="skill-header">
                                                        <span className="skill-name">
                                                            {typeof skill === 'string' ? skill : skill.name}
                                                        </span>
                                                        <span className="skill-level">
                                                            {typeof skill === 'string' ? '' : `${skill.level}%`}
                                                        </span>
                                                    </div>
                                                    {typeof skill !== 'string' && (
                                                        <div className="skill-bar">
                                                            <div
                                                                className="skill-progress"
                                                                style={{ width: `${skill.level}%` }}
                                                            ></div>
                                                        </div>
                                                    )}
                                                </div>

                                            ))
                                        }

                                    </div>

                                </RevealOnScroll>
                            );
                        })

                    }

                </div>

            </Container>

        </section>

    );

}

export default Skills;
