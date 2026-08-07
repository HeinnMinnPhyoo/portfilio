export type ProjectItem = {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  demo?: string;
  featured?: boolean;
  gradient: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "Omniverse Ticketing Platform",
    role: "Solution Architect / Lead Developer",
    description:
      "Independently designed and developed a complete online ticketing ecosystem with Admin, Organizer, and Customer portals. Leveraged AI-assisted workflows to deliver production-level code as sole developer.",
    technologies: ["Spring Boot", "React", "Next.js", "PostgreSQL", "Microservices"],
    demo: "https://omnitix-fe.lomtech.net/en",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    title: "Line Pilates Academy",
    role: "Backend Lead / AI-Assisted Developer",
    description:
      "Malaysian Learning Management System with course management, membership programs, instructor systems, and Malaysian payment gateway integration for HELPERSON GLOBAL SDN.BHD.",
    technologies: ["Spring Boot", "Next.js", "PostgreSQL", "Payment Gateway"],
    demo: "https://lp-fe.lomtech.net/en",
    featured: true,
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "Daiwa Online Trade",
    role: "Software Engineer",
    description:
      "Digital trading platform for Daiwa Securities Group offering stocks, bonds, ETFs, and mutual funds with real-time market data, advanced charting, and secure transactions.",
    technologies: ["Java", "Spring", "Oracle", "Bash Shell", "HULFT"],
    featured: true,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Burger King Delivery Tracking",
    role: "Backend Developer / Development Lead",
    description:
      "Real-time driver location tracking and delivery monitoring system with scalable microservice-based backend supporting high-volume delivery operations.",
    technologies: ["Spring Boot", "MySQL", "Microservices", "REST API"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Learning Management System",
    role: "Senior Backend Developer",
    description:
      "Enterprise e-learning platform with course management, user enrollment, progress tracking, and scalable backend architecture for online education.",
    technologies: ["Spring Boot", "PostgreSQL", "React", "REST API"],
    gradient: "from-sky-600 to-blue-500",
  },
  {
    title: "PhoenixDart Online Platform",
    role: "Backend Developer",
    description:
      "Online game machine shop platform with secure backend services, payment processing, and scalable web architecture built with Agile methodology.",
    technologies: ["Spring Boot", "PostgreSQL", "REST API"],
    gradient: "from-purple-600 to-pink-500",
  },
];
