export type SkillCategory = {
  title: string;
  icon: string;
  percentage: number;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "server",
    percentage: 95,
    skills: [
      "Java SE/EE",
      "Spring Boot",
      "Spring Framework",
      "Struts 2",
      "Microservices",
      "REST API",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Frontend & Web",
    icon: "code",
    percentage: 80,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "jQuery",
      "JSP",
    ],
  },
  {
    title: "Database & Storage",
    icon: "database",
    percentage: 90,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "TimeScaleDB",
      "ERD Design",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    percentage: 85,
    skills: [
      "AWS",
      "Docker",
      "Jenkins",
      "GitLab CI/CD",
      "GitHub",
      "SVN",
      "Linux",
    ],
  },
  {
    title: "AI-Assisted Development",
    icon: "sparkles",
    percentage: 92,
    skills: [
      "Cursor AI",
      "GitHub Copilot",
      "AI Agent Workflows",
      "Prompt Engineering",
      "AI Coding Standards",
      "AI-Driven SDLC",
    ],
  },
  {
    title: "Architecture & Design",
    icon: "layers",
    percentage: 88,
    skills: [
      "System Architecture",
      "Microservice Design",
      "Database Design (ERD)",
      "REST API Design",
      "Agile & Waterfall",
    ],
  },
];
