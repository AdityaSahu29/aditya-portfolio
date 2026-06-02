const BASE = import.meta.env.BASE_URL;

const simulationData = [

    {
        id: 1,

        title: "Workverse",

        image: `${BASE}images/workverse.jpg`,

        overview:
            "Mobile-based simulation platform developed using Unity for immersive learning and interactive experiences.",

        role:
            "Game Developer & Growth Architect",

        features: [
            "3D Simulation",
            "Interactive Environment",
            "Training Experience",
            "Mobile Support"
        ],

        technologies: [
            "Unity",
            "C#",
            "UI Toolkit",
            "Mobile Development"
        ],

        challenges:
            "Designed and optimized simulation workflows while ensuring smooth performance on mobile devices."
    },

    {
        id: 2,

        title: "Bellverse",

        image: `${BASE}images/bellverse.jpg`,

        overview:
            "Interactive simulation project focused on user engagement and immersive experiences.",

        role:
            "Unity Developer",

        features: [
            "3D Environment",
            "Simulation Logic",
            "Interactive Elements"
        ],

        technologies: [
            "Unity",
            "C#",
            "Mobile UI"
        ],

        challenges:
            "Built engaging simulation interactions while maintaining performance and usability."
    },

    {
        id: 3,

        title: "Kamlaverse",

        image: `${BASE}images/kamlaverse.jpg`,

        overview:
            "Complete Unity simulation project developed independently from planning to deployment.",

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
            "Managed the complete development lifecycle including gameplay systems, UI, optimization and deployment."
    }
];

export default simulationData;