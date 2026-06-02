const softwareProjectsData = [

    {
        id: 1,

        title: "Applicant Tracking System",

        image: `${import.meta.env.BASE_URL}images/ats.png`,

        overview:
            "Role-based Applicant Tracking System built for hiring teams to manage jobs, candidates and approval workflows.",

        role:
            "Full Stack Developer",

        features: [
            "Role Based Access",
            "Job Approval Workflow",
            "Candidate Management",
            "Notifications"
        ],

        technologies: [
            "React",
            "Vite",
            "Node.js",
            "Express",
            "SQLite"
        ],

        challenges:
            "Designed a scalable role-based architecture supporting Admin, Recruiter, Hiring Manager and Head of Vertical workflows."
    },

    {
        id: 2,

        title: "Agreement Management System",

        image: `${import.meta.env.BASE_URL}images/ams.png`,

        overview:
            "Agreement lifecycle management platform with document versioning, approvals and access control.",

        role:
            "Full Stack Developer",

        features: [
            "Agreement Blocks",
            "Version History",
            "Notifications",
            "Role Management"
        ],

        technologies: [
            "React",
            "Node.js",
            "Express",
            "SQLite"
        ],

        challenges:
            "Implemented version-controlled file management while maintaining secure role-based access."
    },

    {
        id: 3,

        title: "TenderTrack",

        image: `${import.meta.env.BASE_URL}images/tendertrack.png`,

        overview:
            "Internal platform to scrape, track and monitor government tenders from GeM and other procurement portals.",

        role:
            "Developer",

        features: [
            "Tender Scraping",
            "Tracking Dashboard",
            "Search Filters",
            "Automated Monitoring"
        ],

        technologies: [
            "Python",
            "Automation",
            "Web Scraping"
        ],

        challenges:
            "Handled large-scale tender extraction while ensuring reliability and performance."
    }

];

export default softwareProjectsData;