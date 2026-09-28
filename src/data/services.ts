export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  whatItIs: string;
  businessProblem: string;
  whatWeCanBuild: string[];
  typicalUseCases: string[];
  technologies: string[];
  ctaText: string;
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Fast, modern web applications built for speed, reliability, and growth.",
    whatItIs: "Full-cycle web application engineering — from responsive corporate portals to high-performance customer dashboards and web platforms.",
    businessProblem: "Outdated, sluggish, or rigid websites create poor customer impressions, drop conversion rates, and limit your ability to scale modern online services.",
    whatWeCanBuild: [
      "Modern corporate websites & conversion landing pages",
      "Customer self-service portals & dashboards",
      "E-commerce & transactional web platforms",
      "Content management systems & headless web architectures",
    ],
    typicalUseCases: [
      "Replacing a legacy slow WordPress site with a modern, lightning-fast Next.js platform.",
      "Building a dedicated client portal where customers can view projects, documents, and invoices.",
      "Creating high-converting marketing pages with built-in analytics and lead collection.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    ctaText: "Discuss Your Web Project",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    tagline: "Intuitive iOS and Android apps tailored for real customer engagement.",
    whatItIs: "Cross-platform and native mobile applications that deliver consistent, responsive user experiences across smartphones and tablets.",
    businessProblem: "Customers and field teams expect instant mobile access. Without a dedicated mobile app, businesses lose engagement, convenience, and direct communication channels.",
    whatWeCanBuild: [
      "Cross-platform iOS and Android applications",
      "Internal workforce and field operations mobile tools",
      "Customer loyalty, ordering, and service booking apps",
      "Offline-first mobile utilities with secure cloud sync",
    ],
    typicalUseCases: [
      "A service business providing an on-demand booking and appointment tracking app for clients.",
      "An inspection or field-service mobile app allowing technicians to capture photos and notes offline.",
      "A B2B order-management application enabling wholesale clients to place rapid reorders.",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Firebase", "REST & GraphQL APIs"],
    ctaText: "Plan Your Mobile Application",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    tagline: "Purpose-built business systems engineered around your exact workflows.",
    whatItIs: "Tailor-made software applications engineered from the ground up to solve operational bottlenecks that off-the-shelf software cannot address.",
    businessProblem: "Generic commercial software often forces your team to bend their workflows around rigid limitations, leading to fragmented spreadsheets, manual double-entry, and inefficiencies.",
    whatWeCanBuild: [
      "Tailored ERP & internal operations management systems",
      "B2B workflow automation & processing engines",
      "Secure database systems & internal management tools",
      "API integrations connecting legacy tools with modern platforms",
    ],
    typicalUseCases: [
      "Consolidating multiple disconnected spreadsheets into a single secure, role-based web database.",
      "Building a specialized quotation and proposal generation engine for commercial sales teams.",
      "Automating cross-departmental approval chains and compliance tracking.",
    ],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker"],
    ctaText: "Design Custom Software",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Clear, user-centered digital interfaces that turn complex tasks into simple steps.",
    whatItIs: "User research, wireframing, interactive prototyping, and polished design systems that balance visual clarity with business usability.",
    businessProblem: "Confusing software interfaces frustrate users, inflate customer support tickets, increase training overhead, and lead to abandoned workflows.",
    whatWeCanBuild: [
      "User journey maps, information architecture & wireframes",
      "Interactive high-fidelity prototypes in Figma",
      "Design systems, reusable UI component libraries & style guides",
      "Product UX audits with actionable usability recommendations",
    ],
    typicalUseCases: [
      "Redesigning a clunky enterprise software dashboard to make daily tasks faster and reduce errors.",
      "Creating a unified design system that ensures visual consistency across multiple digital tools.",
      "Transforming early rough product wireframes into a clean, ready-to-code prototype.",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Accessibility (WCAG)", "User Testing"],
    ctaText: "Elevate Your Product UX",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Dependable cloud hosting, automated deployment pipelines, and proactive infrastructure.",
    whatItIs: "Cloud setup, containerization, CI/CD automated deployment pipelines, and infrastructure management that keep your software fast, secure, and always online.",
    businessProblem: "Unreliable server setups, manual deployment errors, downtime, and unmonitored cloud spending create operational stress and slow down release cycles.",
    whatWeCanBuild: [
      "Cloud architecture on AWS, Google Cloud, or Azure",
      "Automated CI/CD build, test, and release pipelines",
      "Containerized environments with Docker & Kubernetes",
      "Automated server backups, SSL certificates & zero-downtime deploys",
    ],
    typicalUseCases: [
      "Migrating an on-premise application to an automated, scalable cloud environment.",
      "Setting up a continuous deployment pipeline so code updates deploy smoothly with automated testing.",
      "Rightsizing cloud servers and databases to eliminate unnecessary monthly cloud hosting bills.",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    ctaText: "Modernize Your Cloud Stack",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    tagline: "Practical intelligent automation that saves time and reduces repetitive manual work.",
    whatItIs: "Implementation of smart automations, document parsers, conversational assistants, and workflow integrations to streamline daily business operations.",
    businessProblem: "Teams spend hours every week copy-pasting data, answering repetitive customer questions, and manually extracting details from PDFs and emails.",
    whatWeCanBuild: [
      "AI-powered internal knowledge search and document summarization",
      "Automated data extraction from invoices, forms, and emails",
      "Intelligent customer support triage and smart chatbots",
      "Multi-system workflow automations connecting CRM, ERP, and communication channels",
    ],
    typicalUseCases: [
      "An automated assistant that lets employees search company documentation, policies, and manuals in plain English.",
      "Extracting invoice details automatically and pushing structured data directly into accounting software.",
      "Triaging incoming customer tickets and routing them to the right team with suggested responses.",
    ],
    technologies: ["Python", "OpenAI / Claude APIs", "LangChain", "Vector Databases", "Make / Zapier / n8n"],
    ctaText: "Explore Automation Possibilities",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    tagline: "Clear technical advice to help you make sound, future-proof technology decisions.",
    whatItIs: "Strategic technology advisory — evaluating existing software, selecting the right tools, planning digital upgrades, and avoiding costly technical missteps.",
    businessProblem: "Non-technical leaders often struggle to evaluate competing technology options, vendors, and architectures, risking expensive dead-ends.",
    whatWeCanBuild: [
      "Technical audits & legacy code evaluations",
      "Technology stack selection & vendor evaluation",
      "Software architecture reviews & scalability assessments",
      "Digital transformation roadmaps tailored to your budget",
    ],
    typicalUseCases: [
      "Auditing an existing codebase built by a previous agency to evaluate security, cleanliness, and maintainability.",
      "Helping a growing business select and integrate the best CRM and inventory software for their industry.",
      "Drafting a multi-phase technical roadmap for modernizing legacy business operations.",
    ],
    technologies: ["Architecture Audits", "Security Reviews", "Tech Roadmap Planning", "Vendor Evaluation"],
    ctaText: "Schedule a Consulting Call",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    tagline: "Continuous monitoring, security updates, bug fixes, and performance tuning.",
    whatItIs: "Ongoing technical care to ensure your digital applications remain secure, updated, bug-free, and operational day in and day out.",
    businessProblem: "Software degrades over time without maintenance — third-party dependencies break, security vulnerabilities arise, and performance drops as data grows.",
    whatWeCanBuild: [
      "Scheduled security patch updates & dependency upgrades",
      "Proactive uptime monitoring and performance tuning",
      "Rapid bug resolution and minor feature enhancements",
      "Automated database backups & disaster recovery readiness",
    ],
    typicalUseCases: [
      "Providing monthly maintenance for a mission-critical web application with guaranteed response times.",
      "Updating outdated libraries and frameworks to protect against known security vulnerabilities.",
      "Performing periodic database query optimization to keep page load times fast as user volume grows.",
    ],
    technologies: ["Uptime Monitoring", "Log Analysis", "Security Patching", "Database Optimization", "SLA Guarantees"],
    ctaText: "Secure Support for Your App",
  },
];
