const BASE = import.meta.env.BASE_URL;

const gamesData = [
    {
        id: 1,

        title: "Pen Fight",

        image: `${BASE}/images/penfight.jpg`,

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

        apk: `${BASE}apks/pen-fight.apk`
    },

    {
        id: 2,

        title: "Save The Bird",

        image: `${BASE}/images/savebird.jpg`,

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

        apk: `${BASE}apks/save-the-bird.apk`
    },

    {
        id: 3,

        title: "Tower Defense",

        image: `${BASE}/images/towerdefense.jpg`,

        overview:
            "A 2D strategy tower defense game where players strategically place different turret types to stop waves of approaching enemies.",

        features: [
            "2 Turret Types",
            "2 Enemy Types",
            "Strategic Gameplay",
            "Wave System",
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
        apk: `${BASE}apks/tower-defense.apk`

    },

    {
        id: 4,

        title: "Escape The Rooms",

        image: `${BASE}/images/escaperoom.jpg`,

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
        apk: `${BASE}apks/escape-the-rooms.apk`

    },

    {
        id: 5,

        title: "Zombie Toy",

        image: `${BASE}/images/zombietoy.jpg`,

        overview:
            "A room full of toys has been transformed into zombies. Players use magical elemental wands and an AI ally to survive the invasion.",

        features: [
            "Electric Wand",
            "Freeze Wand",
            "Wave-Based Combat",
            "Poison Wand",
            "Stun Wand",
            "AI Companion"
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

        apk: `${BASE}apks/zombie-toy.apk`
    }
];

export default gamesData;