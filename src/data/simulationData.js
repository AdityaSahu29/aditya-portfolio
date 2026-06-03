const BASE = import.meta.env.BASE_URL;

const simulationData = [

    {
        id: 1,

        title: "Workverse",

        image: `${BASE}images/workverse.jpg`,

        overview:
            "A Unity-based gamified workplace simulation platform that helps users develop soft skills, workplace intelligence, and decision-making through interactive real-world scenarios.",

        role:
            "Game Developer & Growth Architect",

        features: [
            "Workplace Simulation",
            "AI Soft Skills Coach",
            "Career Progression System",
            "Interactive Decision Making",
            "Gamified Learning"
        ],

        technologies: [
            "Unity",
            "C#",
        ],

        challenges:
            "Designed and optimized simulation workflows while ensuring smooth performance on mobile devices.",

        playstore: "https://play.google.com/store/apps/details?id=com.Workverse.Simulator&hl=en_IN"
    },

    {
        id: 2,

        title: "Bellverse",

        image: `${BASE}images/bellverse.jpg`,

        overview:
            "A hospitality service training simulator designed to help employees master customer service standards through realistic scenarios and AI-guided coaching.",

        role:
            "Game Developer & Growth Architect",

        features: [
            "3D Environment",
            "Simulation Logic",
            "Interactive Elements"
        ],

        technologies: [
            "Unity",
            "C#",
        ],

        challenges:
            "Developed interactive cutscenes and service-training experiences that transformed real-world hospitality workflows into engaging gameplay scenarios. Collaborated with stakeholders to deliver intuitive and effective learning experiences.",

        playstore: "https://play.google.com/store/apps/details?id=com.Bellverse.Simulator&hl=en_IN"
    },

    {
        id: 3,

        title: "Kamlaverse",

        image: `${BASE}images/kamlaverse.jpg`,

        overview:
            "A role-based service training simulation where employees learn operational workflows, guest interactions, teamwork, and service excellence through practical scenarios.",

        role:
            "Lead Unity Developer",

        features: [
            "3D Simulation",
            "Custom UI",
            "Performance Optimization",
            "Mobile Deployment"
        ],

        technologies: [
            "Unity",
            "C#",
            "Optimization"
        ],

        challenges:
            "Managed end-to-end Unity development while coordinating between clients and internal teams including backend developers, UI designers, and 3D artists. Implemented API integrations, handled requirement changes, and ensured smooth production, testing, and delivery of the final product.",

        playstore: "https://play.google.com/store/apps/details?id=com.kamlaverse&hl=en_IN"
    }
];

export default simulationData;