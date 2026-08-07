export type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "LOMTECH GLOBAL",
    position: "Senior Java Backend Developer / AI-Assisted Full Stack Developer",
    period: "2025 — Jun 2026",
    description:
      "Led backend architecture, API design, database modeling, and system implementation for enterprise web applications. Contributed to LMS, food delivery, and online ticketing platforms using AI-assisted development workflows.",
    highlights: [
      "Designed microservice architectures and REST APIs for e-learning, logistics, and ticketing platforms",
      "Built real-time delivery driver tracking for Burger King delivery operations",
      "Integrated Malaysian payment gateways for subscription-based business models",
      "Led AI-assisted development projects with Cursor AI and GitHub Copilot",
      "Designed AI agent workflows, project rules, and development standards",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "PostgreSQL",
      "MySQL",
      "Microservices",
      "Cursor AI",
      "GitHub Copilot",
    ],
  },
  {
    company: "DIR ACE TECHNOLOGY",
    position: "Software Engineer",
    period: "Jan 2022 — 2025",
    description:
      "Developed and maintained features for Daiwa Securities Group's online trading platform, collaborating closely with Japanese stakeholders to deliver customized financial solutions.",
    highlights: [
      "Built full-stack web applications using Spring Framework, Java SE/EE, and Bash/C Shell scripting",
      "Established CI/CD pipelines with GitLab and Jenkins for automated deployments",
      "Integrated HULFT middleware for secure cross-platform data transfers",
      "Conducted unit, integration, performance, and scenario testing",
      "Resolved urgent production issues to minimize downtime",
    ],
    technologies: [
      "Java",
      "Spring",
      "Oracle",
      "Bash Shell",
      "Jenkins",
      "GitLab",
      "HULFT",
      "Angular",
    ],
  },
  {
    company: "DIR ACE TECHNOLOGY",
    position: "Programmer",
    period: "Jan 2020 — Jan 2022",
    description:
      "Collaborated with senior developers to design, develop, and maintain Java-based web applications with a focus on scalability and performance optimization.",
    highlights: [
      "Participated in discussions with Japan-based clients for requirement gathering",
      "Developed clean, efficient, and maintainable code following best practices",
      "Contributed to technical documentation and project architecture transparency",
      "Utilized GitLab for version control and team collaboration",
    ],
    technologies: [
      "Java",
      "Spring",
      "PostgreSQL",
      "Oracle",
      "GitLab",
      "SVN",
    ],
  },
];
