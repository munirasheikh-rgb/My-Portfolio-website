// Replace each null githubUrl with the project's actual repository URL.
export const projects = [
  {
    id: "fleetpesa",
    name: "FleetPesa",
    description:
      "A fleet remittance application that helps fleet owners track vehicle collections and driver remittances.",
    image: "/images/projects/fleetpesa.png",
    imageAlt: "Screenshot of the FleetPesa fleet remittance application",
    technologies: ["React", "Flask", "Python", "SQLAlchemy", "JWT"],
    githubUrl: "https://github.com/fredricknyamweya-del/Fleet-Pesa.git",
  },
  {
    id: "productivity-notes",
    name: "Productivity Notes",
    description:
      "A full-stack notes project focused on a Flask backend with JWT authentication and protected note management APIs.",
    image: "/images/projects/productivitynotes.png",
    imageAlt: "Screenshot of the Productivity Notes application",
    technologies: ["Flask", "Python", "SQLAlchemy", "JWT", "REST API"],
    githubUrl: "https://github.com/munirasheikh-rgb/Productivity-notes-app-and-jwt-clients.git",
  },
  {
    id: "coffee-shop",
    name: "Coffee Shop",
    description:
      "A frontend coffee shop application for browsing and managing coffee data, using a simulated JSON database.",
    image: "/images/projects/coffeeshop.png",
    imageAlt: "Screenshot of the Coffee Shop application",
    technologies: ["React", "JavaScript", "CSS", "JSON Server"],
    githubUrl:"https://github.com/munirasheikh-rgb/Coffee-shop-web-App.git",
  },
];
