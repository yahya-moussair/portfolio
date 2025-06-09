import images from "../constants/images";

console.log("Available images:", images); // Debug log

const projects = [
  {
    en: {
      projectName: "My Portfolio",
      description:
        "This is a personal portfolio website built with React showcasing Yahya Moussair's work as a frontend developer. Features a hero section, about page, and projects gallery with responsive design using Tailwind CSS.",
    },
    fr: {
      projectName: "Mon Portfolio",
      description:
        "Ceci est un site web portfolio personnel construit avec React présentant le travail de Yahya Moussair en tant que développeur frontend. Comprend une section d'accueil, une page à propos et une galerie de projets avec un design responsive utilisant Tailwind CSS.",
    },
    image: images.portfolio,
    demoLink: "https://yahya-moussair.vercel.app/",
    repoLink: "https://github.com/yourusername/portfolio"
  },
  {
    en: {
      projectName: "E-commerce Website",
      description:
        "A modern e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
    },
    fr: {
      projectName: "Site E-commerce",
      description:
        "Une plateforme e-commerce moderne construite avec React et Node.js. Les fonctionnalités incluent l'authentification des utilisateurs, le catalogue de produits, le panier d'achat et le traitement sécurisé des paiements.",
    },
    image: images.ecommerce,
    demoLink: "https://your-ecommerce-demo.com",
    repoLink: "https://github.com/yourusername/ecommerce"
  }
];

console.log("Projects with images:", projects); // Debug log

export default projects;
