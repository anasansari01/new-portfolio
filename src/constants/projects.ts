import { StaticImageData } from "next/image";

import memories from "@/../public/projects/memories.png";
import nextLib from "@/../public/projects/nextLib.png";
import bookStore from "@/../public/projects/bookStore.png";
import eShop from "@/../public/projects/eshop.png";
import fitnessTracker from "@/../public/projects/fitnessTracker.png";
import chessGame from "@/../public/projects/chessGame.png";
import geminiClone from "@/../public/projects/geminiClone.png";
import issueTracker from "@/../public/projects/issueTracker.png";
import oneMinuteAI from "@/../public/projects/oneMinute.png";

export interface ProjectInterface {
    title: string;
    img: StaticImageData;
    description: string;
    longDescription?: string;
    deployedLink?: string;
    github?: string;
    technologies: string[];
    status?: string;
}

export const PROJECTS: ProjectInterface[] = [
    {
        title: "oneMinute-AI",
        img: oneMinuteAI,
        description: "An AI-powered documentation assistant built with a Retrieval-Augmented Generation (RAG) architecture to deliver fast, context-aware, and empathetic answers from custom knowledge bases.",
        longDescription: "oneMinute-AI is a full-stack AI assistant built with a Retrieval-Augmented Generation (RAG) pipeline to deliver accurate, context-aware responses from user documentation. It ingests documents, converts them into vector embeddings, performs semantic similarity search, and generates grounded responses using an LLM.\n\nBuilt with Next.js, TypeScript, and Drizzle ORM, the project features a modular architecture, chat-based UI, and scalable backend design, demonstrating practical implementation of RAG, vector search, and production-ready LLM integration.",
        deployedLink: "",
        github: "https://github.com/anasansari01/oneMinute-AI",
        // status: "Active Development",
        technologies: [
            "Next.js", "TypeScript", "Node.js", "Drizzle ORM", "RAG", "OpenAI API", "PostgreSQL",
        ],
    },
    {
        title: "eShop",
        img: eShop,
        description: "A scalable full-stack e-commerce platform with an Nx monorepo architecture, featuring robust authentication, reusable modules, and high-performance backend services.",
        longDescription: "Architected an enterprise-ready, scalable full-stack e-commerce platform using Nx monorepo with shared TypeScript libraries. Engineered RESTful APIs with Express and Prisma while leveraging PostgreSQL for structured relational data management. Implemented secure JWT authentication with refresh tokens, product variations, and checkout workflows for a seamless experience. Containerized services with Docker and introduced CI/CD pipelines for automated builds, testing, and deployment. Designed a modern and responsive frontend to ensure polished UX with dynamic routing, real-time state sync, and accessibility considerations.",
        deployedLink: "",
        github: "https://github.com/anasansari01/eshop",
        // status: "In Development",
        technologies: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "TypeScript", "Docker",]
    },
    {
        title: "NextLib",
        img: nextLib,
        description: "A modern digital library management system with secure role-based access, server-rendered Next.js architecture, and scalable modular components.",
        longDescription: "Built a performant, server-rendered digital library system using Next.js. Integrated secure authentication using NextAuth and schema validation with Zod for predictable data integrity. Leveraged Drizzle ORM for structured database operations and implemented database migrations. Applied middleware-based route protection, caching strategies for high-performance data fetching, and request throttling for API safety. Seeded mock data, developed reusable React UI components, and polished the UX with intuitive navigation and admin dashboards. This project focuses heavily on maintainability, security, and scalable architecture.",
        deployedLink: "",
        github: "https://github.com/anasansari01/next-lib",
        // status: "Website",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "NextAuth"]
    },
    {
        title: "Memories",
        img: memories,
        description: "A social media platform where users can securely create, edit, and share memory posts with images and interactive UI.",
        longDescription: "Built a complete social media style application enabling users to upload text and image-based posts, interact with memory entries, and securely authenticate using Google OAuth. Implemented Redux Toolkit for reliable state management. Built secure RESTful APIs using Express and integrated MongoDB with indexing for fast search and filter operations. The app supports full CRUD operations, media uploads, protected routes, and role-based content permissions. The UI is built with a responsive Material-UI design system for clean visuals and engaging usability. Deployed backend on Render and frontend on Netlify to enable production accessibility.",
        deployedLink: "https://shivalik-memories.netlify.app/posts",
        github: "https://github.com/anasansari01/Memories",
        // status: "Website",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Material-UI"]
    },
    {
        title: "Fitness Tracker",
        img: fitnessTracker,
        description: "A health and fitness tracking platform similar to MyFitnessPal, featuring nutrition tracking, analytics, workout logs, and behavior insights.",
        longDescription: "Built a comprehensive full-stack fitness and nutrition tracking application inspired by MyFitnessPal. Users can log workouts, meals, macros, calories, hydration levels, and progress metrics over time. Implemented user authentication, dynamic goal-setting, and personalized progress tracking. The app includes interactive features such as reminders, habit streaks, and a clean responsive UI built with Tailwind and Material UI components. Designed backend APIs following REST principles with secure JWT authentication and encrypted sensitive data.",
        deployedLink: "",
        github: "https://github.com/anasansari01/fitness-tracker",
        // status: "Website",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "JWT Authentication"]
    },
    {
        title: "Gemini Clone",
        img: geminiClone,
        description: "A React + Vite-based web app intended to replicate the core chat interface and interaction experience of the Google Gemini AI platform.",
        longDescription: "Built with React and Vite, this project sets up a frontend that mimics the conversational layout and responsive UI of Gemini. It includes a structured component architecture with basic chat functionality, modern JavaScript workflows, and a starter template for integrating API-driven responses. While it doesn’t yet include an official backend or live Gemini API integration, it provides the scaffold for building a conversational UI and experimenting with AI integrations. Designed for learning and extension using current frontend tooling.",
        deployedLink: "",
        github: "https://github.com/anasansari01/gemini-clone",
        technologies: ["React", "Vite", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "Issue Tracker",
        img: issueTracker,
        description: "A full-stack issue tracking web application built with Next.js and Prisma to manage, create, and visualize issues and tickets.",
        longDescription: "Developed a modern issue tracking system using Next.js for server-side rendering and React-based frontend views. Structured the backend with Prisma ORM and database schemas to support efficient issue creation, updates, and relational data handling. Designed the UI with responsive layouts and intuitive navigation for users to easily log and monitor issues, featuring type safety with TypeScript and Tailwind CSS for styling. Built as a scalable foundation for collaborative project management workflows and extensible issue lifecycle features.",
        deployedLink: "https://issue-tracker-help.vercel.app/",
        github: "https://github.com/anasansari01/issue-tracker",
        technologies: ["Next.js", "React", "TypeScript", "Prisma", "Tailwind CSS", "Vercel"]
    },
    {
        title: "Book Store",
        img: bookStore,
        description: "A responsive full-featured bookstore application built using the MERN stack with real-time CRUD operations, secure authentication, and smooth user experience.",
        longDescription: "Developed a complete bookstore web application using the MERN architecture with real-time CRUD functionality and smooth UI interaction. Implemented JWT authentication, protected backend routes, request validation middleware, and secure CORS policies. The UI was crafted using TailwindCSS and enhanced using Notistack, form validation, reusable components, and responsive layout patterns. Ensured production-ready deployments for both frontend and backend with environment-based configuration for scalability.",
        deployedLink: "",
        github: "https://github.com/anasansari01/book-store",
        // status: "Website",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"]
    },
    {
        title: "Chess Game",
        img: chessGame,
        description: "A fully interactive browser-based chess game built from scratch with move validation, turn logic, and optional AI opponent.",
        longDescription: "Developed a fully functional chess application playable directly in the browser with move rules, validation logic, and visual representation of available moves. Implemented a turn-based engine with piece-specific logic including castling, en passant, and promotion. Designed an intuitive UI with animated movements, sound effects, and game replay history. Focused on accessibility, responsiveness, and polished gameplay experience through modern JavaScript and modular architecture.",
        deployedLink: "",
        github: "https://github.com/anasansari01/chess-game",
        // status: "Website",
        technologies: ["JavaScript", "HTML", "CSS"]
    }
];