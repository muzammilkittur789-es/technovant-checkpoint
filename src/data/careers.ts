export interface CareerTrack {
  id: string;
  role: string;
  category: "Engineering" | "Design" | "Cloud / DevOps" | "Quality Assurance";
  type: "Full-Time" | "Internship / Graduate Program";
  location: "Bengaluru, India (Hybrid) / Remote";
  summary: string;
  whatYouWillLearn: string[];
  prerequisites: string[];
}

export const CAREERS_CONFIG = {
  hero: {
    headline: "Start Your Technology Career by Building Real Things",
    supportingText: "We give emerging technology professionals the opportunity to learn through real projects, contribute to client work and grow through practical experience.",
    badge: "Emerging Tech Talent & Careers",
  },
  whyJoinUs: [
    {
      title: "Real project exposure",
      description: "You won't be relegated to toy tutorials or coffee runs. You will write code, design interfaces, and deploy features on actual business systems.",
    },
    {
      title: "Learning-focused environment",
      description: "We pair you with senior technical mentorship, structured code reviews, and weekly architecture deep-dives to accelerate your growth.",
    },
    {
      title: "Hands-on modern technology",
      description: "Work directly with production modern stacks: TypeScript, Next.js, Node.js, Python, PostgreSQL, Docker, AWS, and modern AI toolchains.",
    },
    {
      title: "Responsibility from an early stage",
      description: "We trust you with real ownership of modules, features, and technical documentation, giving you genuine accountability.",
    },
    {
      title: "Collaborative team culture",
      description: "A supportive, ego-free environment where questions are welcomed, knowledge is freely shared, and everyone succeeds together.",
    },
    {
      title: "Continuous skill development",
      description: "Master testing best practices, CI/CD automation, API architecture, clean code standards, and agile collaboration methodologies.",
    },
  ],
  whoWeLookFor: [
    {
      title: "Fresh Graduates & Final-Year Students",
      description: "Degrees in CS, IT, or related fields with solid foundational concepts and a passion for building real software.",
    },
    {
      title: "Self-Taught Developers",
      description: "Curious, disciplined builders who taught themselves through personal projects, open-source work, or bootcamps.",
    },
    {
      title: "UI/UX Designers",
      description: "Creative problem-solvers who care about usability, user research, wireframing, and building clean interfaces in Figma.",
    },
    {
      title: "AI / ML Enthusiasts",
      description: "Developers interested in applying LLMs, vector search, Python scripting, and practical automation to business workflows.",
    },
    {
      title: "Cloud & DevOps Enthusiasts",
      description: "Learners eager to master Linux, Docker, CI/CD pipelines, cloud infrastructure, and server automation.",
    },
    {
      title: "QA & Test Engineers",
      description: "Detail-oriented individuals passionate about automated testing, edge-case analysis, and ensuring bulletproof software stability.",
    },
  ],
  hiringProcess: [
    {
      step: "01",
      name: "Apply",
      description: "Submit your resume, GitHub profile, design portfolio, or recent projects through our general or specific application form.",
    },
    {
      step: "02",
      name: "Screening",
      description: "A brief conversational call to discuss your background, interests, learning goals, and mutual cultural alignment.",
    },
    {
      step: "03",
      name: "Technical Assessment",
      description: "A practical, real-world coding exercise or design task (no trick algorithmic puzzles; just practical problem solving).",
    },
    {
      step: "04",
      name: "Interview",
      description: "A technical walkthrough where you present your approach, discuss trade-offs, and meet the engineering leads.",
    },
    {
      step: "05",
      name: "Onboarding",
      description: "Welcome to the team! Receive your workstation setup, paired mentor, learning roadmap, and initial project assignment.",
    },
  ],
  openPositions: [
    {
      id: "assoc-fullstack-dev",
      role: "Associate Full-Stack Developer (Graduate / Fresher)",
      category: "Engineering",
      type: "Full-Time",
      location: "Bengaluru, India (Hybrid) / Remote",
      summary: "Collaborate on modern web applications, REST/GraphQL APIs, and customer-facing interfaces using React, Next.js, TypeScript, and Node.js.",
      whatYouWillLearn: [
        "Production TypeScript and Next.js full-stack development",
        "Relational database design and query optimization with PostgreSQL",
        "Writing robust unit and integration tests with Jest/Playwright",
        "Git collaboration workflows and automated CI/CD pipelines",
      ],
      prerequisites: [
        "Familiarity with JavaScript/TypeScript and web development basics",
        "Basic understanding of SQL, Git, and REST APIs",
        "Demonstrated personal project, college capstone, or GitHub portfolio",
      ],
    },
    {
      id: "assoc-cloud-devops",
      role: "Junior Cloud & DevOps Engineer",
      category: "Cloud / DevOps",
      type: "Full-Time",
      location: "Bengaluru, India (Hybrid) / Remote",
      summary: "Assist in provisioning cloud infrastructure, maintaining Docker containers, setting up CI/CD workflows, and monitoring server health.",
      whatYouWillLearn: [
        "Hands-on AWS and Google Cloud infrastructure management",
        "Containerization with Docker and multi-service orchestration",
        "Automated deployment pipelines with GitHub Actions",
        "Infrastructure monitoring, logging, and security best practices",
      ],
      prerequisites: [
        "Basic knowledge of Linux commands and networking fundamentals",
        "Familiarity with Docker concepts and shell scripting",
        "Eagerness to learn cloud systems and infrastructure-as-code",
      ],
    },
    {
      id: "assoc-ui-designer",
      role: "Associate UI/UX Designer",
      category: "Design",
      type: "Full-Time",
      location: "Bengaluru, India (Hybrid) / Remote",
      summary: "Transform business requirements into clean wireframes, interactive user flows, and polished design systems using Figma.",
      whatYouWillLearn: [
        "Design systems creation and component variant architecture in Figma",
        "B2B software usability patterns and dashboard design",
        "Collaborative handoff with frontend engineers",
        "Conducting user testing sessions and usability audits",
      ],
      prerequisites: [
        "Proficiency in Figma and digital interface layout principles",
        "Strong eye for typography, spacing, and visual hierarchy",
        "Portfolio showcasing 1-2 web or mobile interface case studies",
      ],
    },
  ] as CareerTrack[],
};
