const gamesData = [
    {
        id: 1,

        title: "Pen Fight",

        image: "/images/penfight.jpg",

        overview:
            "A nostalgic physics-based school pen fighting game inspired by classroom memories. Challenge friends or battle against an AI opponent named Ink in intense pen flipping battles.",

        features: [
            "Physics-Based Gameplay",
            "AI Opponent (Ink)",
            "Touch Controls",
            "Score System",
            "School Nostalgia Theme",
            "Mobile Optimized"
        ],

        technologies: [
            "Unity",
            "C#",
            "Physics Engine",
            "Mobile Development"
        ],

        challenges:
            "Creating realistic pen movement while keeping gameplay fun and responsive. Balancing force calculations and collision responses required extensive testing.",

        role:
            "Designed and developed the complete game including gameplay mechanics, physics tuning, UI implementation and Android deployment.",

        playstore:
            "https://play.google.com/store/apps/details?id=YOUR_APP_ID"
    },

    {
        id: 2,

        title: "Save The Bird",

        image: "/images/savebird.jpg",

        overview:
            "A Flappy Bird-inspired mobile game that replaces traditional pipes with mobile towers to spread awareness about bird safety and environmental conservation.",

        features: [
            "Endless Runner",
            "Increasing Difficulty",
            "Score Tracking",
            "Mobile Controls",
            "Environmental Awareness",
            "Leaderboard Ready"
        ],

        technologies: [
            "Unity",
            "C#",
            "2D Physics",
            "UI System"
        ],

        challenges:
            "Creating a smooth difficulty curve while maintaining enjoyable gameplay and optimizing performance for low-end Android devices.",

        role:
            "Designed gameplay mechanics, obstacle spawning system, score management and mobile optimization.",


    },

    {
        id: 3,

        title: "Tower Defense",

        image: "/images/towerdefense.jpg",

        overview:
            "A 2D strategy tower defense game where players strategically place different turret types to stop waves of approaching enemies.",

        features: [
            "2 Turret Types",
            "2 Enemy Types",
            "Wave System",
            "Strategic Gameplay",
            "Enemy AI",
            "Progressive Difficulty"
        ],

        technologies: [
            "Unity",
            "C#",
            "AI Systems",
            "Pathfinding"
        ],

        challenges:
            "Balancing enemy waves, turret damage and progression to create a rewarding strategic experience.",

        role:
            "Developed enemy behavior systems, turret mechanics, wave management and game balancing.",


    },

    {
        id: 4,

        title: "Escape The Rooms",

        image: "/images/escaperoom.jpg",

        overview:
            "A 2D platformer where players navigate through obstacle-filled rooms and face increasingly difficult challenges before escaping.",

        features: [
            "Multiple Rooms",
            "Obstacle Challenges",
            "Platforming Mechanics",
            "Enemy Encounters",
            "Boss Battles",
            "Progressive Difficulty"
        ],

        technologies: [
            "Unity",
            "C#",
            "Platformer Systems",
            "Animation"
        ],

        challenges:
            "Designing unique room progression and maintaining player engagement through increasingly difficult challenges.",

        role:
            "Developed player controls, room systems, obstacle mechanics, enemy encounters and boss fights.",


    },

    {
        id: 5,

        title: "Zombie Toy",

        image: "/images/zombietoy.jpg",

        overview:
            "A room full of toys has been transformed into zombies. Players use magical elemental wands and an AI ally to survive the invasion.",

        features: [
            "Electric Wand",
            "Freeze Wand",
            "Poison Wand",
            "Stun Wand",
            "AI Companion",
            "Wave-Based Combat"
        ],

        technologies: [
            "Unity",
            "C#",
            "Combat Systems",
            "Enemy AI"
        ],

        challenges:
            "Developing unique elemental abilities while ensuring each wand felt distinct and useful in combat situations.",

        role:
            "Implemented combat mechanics, enemy AI, elemental effects and ally behavior systems.",


    }
];

export default gamesData;