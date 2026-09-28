export interface SolutionCategory {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  businessProblem: string;
  ourApproach: string;
  outcomes: string[];
  sampleDeliverables: string[];
  technologiesUsed: string[];
}

export const SOLUTIONS_LIST: SolutionCategory[] = [
  {
    id: "business-automation",
    title: "Business Automation",
    badge: "Operational Efficiency",
    tagline: "Replace repetitive manual paperwork with seamless, automated digital workflows.",
    businessProblem: "Growing companies often find their skilled team members spending hours copying information between disconnected tools, chasing approval emails, and manually processing forms. This creates avoidable human errors, bottlenecks, and high operational costs.",
    ourApproach: "We map your actual daily business steps, identify repetitive friction points, and engineer automated bridges that pass information instantly and reliably between your systems.",
    outcomes: [
      "Eliminate repetitive manual data entry and cross-system copying",
      "Accelerate cycle times for client approvals and internal requests",
      "Drastically reduce human input mistakes and missing records",
    ],
    sampleDeliverables: [
      "Automated order-to-invoice processing pipelines",
      "Multi-stage digital approval workflows with email/Slack notifications",
      "Automated customer intake and onboarding sequences",
    ],
    technologiesUsed: ["Python", "Node.js", "Webhook Integrations", "Database Triggers", "n8n / API Connectors"],
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    badge: "Client Satisfaction",
    tagline: "Provide clients with effortless self-service portals and responsive digital touchpoints.",
    businessProblem: "When customers have to call or email back-and-forth simply to check the status of a project, download a past invoice, or request an update, they experience friction — and your support staff is overwhelmed by routine inquiries.",
    ourApproach: "We build intuitive, branded customer portals and clear digital interfaces where clients can manage their accounts, review progress, submit tickets, and make requests self-sufficiently 24/7.",
    outcomes: [
      "Provide clients with transparent, instant access to their project details",
      "Reduce customer support volume for routine status checks",
      "Project a modern, tech-forward, professional brand image",
    ],
    sampleDeliverables: [
      "Secure client self-service portals and account dashboards",
      "Interactive booking, service scheduling, and tracking systems",
      "Digital document exchange and review hubs",
    ],
    technologiesUsed: ["React", "Next.js", "Tailwind CSS", "Role-Based Access Control", "REST APIs"],
  },
  {
    id: "internal-business-tools",
    title: "Internal Business Tools",
    badge: "Team Productivity",
    tagline: "Custom admin dashboards and utilities tailored exactly to your team's processes.",
    businessProblem: "As operations expand, spreadsheets become bloated, fragile, and prone to accidental overwrites. Teams lose track of inventory, customer communications, or milestone progress because generic off-the-shelf software doesn't fit their exact requirements.",
    ourApproach: "We design purpose-built internal admin panels, operations dashboards, and database tools that reflect your exact terminology, permissions, and operational steps.",
    outcomes: [
      "Single source of truth for your core operational data",
      "Granular role-based permissions preventing unauthorized changes",
      "Significantly faster daily task completion for your staff",
    ],
    sampleDeliverables: [
      "Custom operations management dashboards and admin panels",
      "Field staff dispatch and job-tracking interfaces",
      "Specialized quotation, inventory, or asset management tools",
    ],
    technologiesUsed: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Express / Fastify"],
  },
  {
    id: "digital-presence",
    title: "Digital Presence",
    badge: "Brand & Credibility",
    tagline: "Establish undeniable credibility and capture qualified inbound business opportunities.",
    businessProblem: "A slow, dated, or confusing website immediately undermines customer confidence. In competitive B2B and commercial markets, first impressions decide whether a prospective client books a consultation or visits a competitor.",
    ourApproach: "We design clean, fast, search-optimized web platforms that articulate your unique value proposition clearly, guide visitors toward action, and display effortlessly across all screens.",
    outcomes: [
      "Establish strong market credibility with a modern, professional appearance",
      "Improve conversion rates from visitor to qualified business inquiry",
      "Achieve near-perfect Google Lighthouse performance and mobile usability",
    ],
    sampleDeliverables: [
      "Modern corporate websites with content management capabilities",
      "High-converting landing pages for marketing campaigns",
      "Mobile-responsive brand showcases and interactive service catalogs",
    ],
    technologiesUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Semantic HTML / SEO", "Headless CMS"],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    badge: "Informed Decision-Making",
    tagline: "Turn fragmented operational numbers into clear, actionable business insights.",
    businessProblem: "Business leaders often have plenty of data scattered across POS systems, CRM tools, spreadsheets, and billing software, but lack a clear, unified view to understand margins, customer trends, or operational bottlenecks.",
    ourApproach: "We consolidate your siloed data into structured analytical repositories and present key performance indicators through clean, easy-to-read executive dashboards.",
    outcomes: [
      "Make confident business decisions backed by real-time facts rather than guesswork",
      "Spot revenue trends, customer churn, and operational delays early",
      "Automate periodic weekly and monthly executive performance reports",
    ],
    sampleDeliverables: [
      "Executive KPI dashboards and visual metric scorecards",
      "Automated data consolidation and synchronization scripts",
      "Exportable operational reports with role-based visibility",
    ],
    technologiesUsed: ["Python", "PostgreSQL", "Metabase / Chart.js", "ETL Pipelines", "SQL"],
  },
  {
    id: "ai-solutions",
    title: "AI & Automation",
    badge: "Intelligent Systems",
    tagline: "Apply modern language models and intelligent processing to practical business challenges.",
    businessProblem: "Organizations accumulate vast amounts of internal documents, policies, customer tickets, and records. Finding answers requires tedious manual searching, and customer support staff repeatedly type answers to the same questions.",
    ourApproach: "We implement practical, secure AI integrations — such as private document search engines and intelligent customer response assistants — without exposing confidential business data.",
    outcomes: [
      "Allow staff to query internal knowledge bases and manuals in natural language",
      "Automate initial support triage and draft responses for review",
      "Extract structured data from unstructured contracts, forms, and receipts",
    ],
    sampleDeliverables: [
      "Private AI knowledge search for company documents and SOPs",
      "Intelligent email and ticket classification systems",
      "Automated document summarization and data extraction engines",
    ],
    technologiesUsed: ["OpenAI / Claude APIs", "LangChain", "Vector Embeddings", "FastAPI", "Python"],
  },
  {
    id: "cloud-transformation",
    title: "Cloud Transformation",
    badge: "Scalable Infrastructure",
    tagline: "Migrate away from legacy servers toward secure, automated, resilient cloud systems.",
    businessProblem: "Relying on physical office servers or unmanaged shared hosting creates high risks of hardware failure, data loss, slow remote access, and expensive manual server maintenance.",
    ourApproach: "We migrate your applications and data to reliable, managed cloud infrastructure with automated daily backups, secure access controls, and auto-scaling to handle growth.",
    outcomes: [
      "Eliminate physical server hardware maintenance and unexpected downtime",
      "Enable secure, fast remote access for your distributed team",
      "Protect critical business records with redundant cloud backups",
    ],
    sampleDeliverables: [
      "Cloud migration planning and phased zero-downtime execution",
      "Automated backup and disaster recovery configurations",
      "Containerized deployment on managed cloud providers",
    ],
    technologiesUsed: ["AWS", "Google Cloud", "Docker", "Terraform", "PostgreSQL Managed DBs"],
  },
];
