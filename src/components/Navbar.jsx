import { useEffect, useState } from "react";
import {
    FaAward,
    FaBriefcase,
    FaCode,
    FaEnvelope,
    FaGamepad,
    FaHome
} from "react-icons/fa";

const navItems = [
    { href: "#home", label: "Home", icon: FaHome },
    { href: "#games", label: "Projects", icon: FaGamepad },
    { href: "#achievements", label: "Awards", icon: FaAward },
    { href: "#experience", label: "Experience", icon: FaBriefcase },
    { href: "#skills", label: "Skills", icon: FaCode },
    { href: "#contact", label: "Contact", icon: FaEnvelope }
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = navItems
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target.id) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            {
                rootMargin: "-35% 0px -50% 0px",
                threshold: [0.15, 0.35, 0.55]
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const closeMenu = () => {
        const menu = document.getElementById("navMenu");

        if (menu?.classList.contains("show")) {
            menu.classList.remove("show");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <span className="brand-text">Aditya Sahu</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const sectionId = item.href.replace("#", "");

                            return (
                                <li className="nav-item" key={item.href}>
                                    <a
                                        className={`nav-link ${activeSection === sectionId ? "active" : ""}`}
                                        href={item.href}
                                        onClick={closeMenu}
                                    >
                                        <Icon className="nav-icon" />
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
