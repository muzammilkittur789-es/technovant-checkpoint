export interface InternshipRole {
  id: string;
  title: string;
  department: "engineering" | "sales" | "marketing";
  departmentLabel: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-Site";
  duration: string;
  stipend: string;
  positionsAvailable: number;
  batch: string;
  deadline: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  learningOutcomes: string[];
  mentorsAssigned: string;
}

export const INTERNSHIP_PERKS = [
  {
    title: "High Pre-Placement Offer (PPO) Rate",
    description: "85%+ of our top-performing interns receive full-time junior engineer, SDR, or marketing associate offers upon completion.",
    icon: "Award",
  },
  {
    title: "Ship Production-Grade Work",
    description: "No busywork or toy projects. You will push code to live SaaS products or pitch enterprise clients under senior supervision.",
    icon: "Rocket",
  },
  {
    title: "1-on-1 Senior Staff Mentorship",
    description: "Get paired directly with Principal Engineers, VP of Sales, and CMO-level leaders for weekly code reviews and career coaching.",
    icon: "Users",
  },
  {
    title: "Competitive Stipend & Tech Perks",
    description: "Generous monthly stipend, remote home-office setup allowance, and fully paid access to industry software & AI tools.",
    icon: "DollarSign",
  },
  {
    title: "Accredited Certification & Letters",
    description: "Receive verified completion credentials, personalized executive recommendation letters, and LinkedIn endorsements.",
    icon: "FileCheck2",
  },
  {
    title: "Flexible Hybrid or Remote",
    description: "Collaborate from our vibrant hub offices (San Francisco or Bengaluru) or work synchronously from home with flexible hours.",
    icon: "Globe",
  },
];

export const INTERNSHIP_ROLES: InternshipRole[] = [
  {
    id: "swe-fullstack",
    title: "Full-Stack Software Engineering Intern",
    department: "engineering",
    departmentLabel: "Software Engineering",
    location: "San Francisco, CA / Bengaluru (or Remote)",
    workMode: "Remote",
    duration: "6 Months",
    stipend: "$2,200 - $3,000 / month (or ₹45,000 - ₹60,000 / mo IN)",
    positionsAvailable: 6,
    batch: "Summer / Fall Cohort",
    deadline: "Applications Reviewed Rolling",
    overview: "Join our core engineering pods building real-time microservices and modern React/Next.js interfaces for our CloudPulse and FlowDesk SaaS products.",
    responsibilities: [
      "Collaborate with senior engineers to implement scalable frontend and backend features using TypeScript and Next.js.",
      "Write clean, modular code backed by comprehensive unit and integration tests (Jest / Playwright).",
      "Participate in daily agile standups, bi-weekly sprint planning, and asynchronous GitHub pull request reviews.",
      "Optimize API queries and database schema migrations across PostgreSQL and Redis.",
    ],
    requirements: [
      "Pursuing or recently completed BS/MS in Computer Science, Software Engineering, or equivalent practical coding experience.",
      "Proficiency in JavaScript/TypeScript, React or Next.js, and foundational backend knowledge (Node.js or Python).",
      "Familiarity with Git version control, REST APIs, and basic SQL.",
      "A passion for clean design patterns, high performance, and rapid learning.",
    ],
    learningOutcomes: [
      "Master production-grade Next.js 15+ App Router, Server Actions, and distributed caching.",
      "Experience deploying live microservices to AWS & Dockerized Kubernetes environments.",
      "Build a portfolio-defining feature shipped to over 100,000 enterprise users.",
    ],
    mentorsAssigned: "Lead Full-Stack Architect (ex-Stripe) & Senior Frontend Lead",
  },
  {
    id: "swe-cloud-devops",
    title: "Cloud Infrastructure & DevOps Intern",
    department: "engineering",
    departmentLabel: "Software Engineering",
    location: "Bengaluru, India / Remote",
    workMode: "Hybrid",
    duration: "6 Months",
    stipend: "$2,000 - $2,800 / month (or ₹40,000 - ₹55,000 / mo IN)",
    positionsAvailable: 4,
    batch: "Upcoming Cohort",
    deadline: "Open until filled",
    overview: "Work side-by-side with our SRE and DevOps consultants managing multi-cloud estates, building Terraform modules, and configuring automated CI/CD pipelines.",
    responsibilities: [
      "Assist in architecting automated Terraform and Pulumi blueprints for multi-tenant cloud deployments.",
      "Help build and harden continuous integration pipelines using GitHub Actions and ArgoCD.",
      "Set up Prometheus and Grafana observability monitors for critical customer applications.",
      "Conduct security auditing on Docker base images and Kubernetes manifests.",
    ],
    requirements: [
      "Strong foundation in Linux systems administration, bash scripting, and networking fundamentals (DNS, TCP/IP, VPC).",
      "Hands-on experience with Docker, Git, and at least one public cloud provider (AWS, GCP, or Azure).",
      "Interest in Infrastructure as Code (Terraform) and container orchestration (Kubernetes).",
    ],
    learningOutcomes: [
      "Get real-world production experience with EKS/GKE Kubernetes management.",
      "Hands-on sponsorship for AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator).",
      "Deep understanding of enterprise FinOps, high-availability clusters, and zero-trust networking.",
    ],
    mentorsAssigned: "Principal Cloud Architect (AWS & GCP Certified)",
  },
  {
    id: "swe-ai-ml",
    title: "AI & LLM Application Engineering Intern",
    department: "engineering",
    departmentLabel: "Software Engineering",
    location: "San Francisco, CA / Remote",
    workMode: "Remote",
    duration: "4 - 6 Months",
    stipend: "$2,500 - $3,500 / month (or ₹50,000 - ₹70,000 / mo IN)",
    positionsAvailable: 4,
    batch: "Summer / Fall Cohort",
    deadline: "Priority Deadline Soon",
    overview: "Build state-of-the-art enterprise Retrieval-Augmented Generation (RAG) pipelines, evaluation harnesses, and autonomous agents powering FlowDesk Ops.",
    responsibilities: [
      "Develop and benchmark vector retrieval pipelines using Pinecone, Qdrant, and hybrid semantic search.",
      "Design prompt engineering evaluations and guardrails to mitigate hallucinations and ensure security.",
      "Fine-tune lightweight open-source models (Llama 3, Mistral) for domain-specific IT triage tasks.",
      "Build real-time streaming interfaces using WebSockets and Next.js.",
    ],
    requirements: [
      "Solid programming fluency in Python; familiarity with TypeScript is a plus.",
      "Theoretical and practical understanding of Transformers, embeddings, vector indexing, and RAG architectures.",
      "Familiarity with frameworks like LangChain, LlamaIndex, or raw Hugging Face libraries.",
      "Comfort with mathematics, linear algebra, and data evaluation metrics.",
    ],
    learningOutcomes: [
      "Ship autonomous AI agents into high-volume enterprise customer support workflows.",
      "Master modern LLM evaluation methodologies, cost latency optimization, and semantic caching.",
    ],
    mentorsAssigned: "Head of AI Research & Senior Data Engineer",
  },
  {
    id: "sales-b2b-sdr",
    title: "B2B Tech Sales & SDR Apprentice",
    department: "sales",
    departmentLabel: "B2B Tech Sales",
    location: "San Francisco, CA / Remote",
    workMode: "Remote",
    duration: "3 - 6 Months",
    stipend: "$1,800 - $2,500 / month + Uncapped Bonus Commissions",
    positionsAvailable: 5,
    batch: "Rolling Admission",
    deadline: "Immediate Start Available",
    overview: "Master the art and science of consultative enterprise B2B SaaS sales. Learn how to prospect high-value CTOs, VPs of Engineering, and IT Directors for our SaaS tools and IT services.",
    responsibilities: [
      "Conduct in-depth account research using Apollo, LinkedIn Sales Navigator, and ZoomInfo to identify target enterprise accounts.",
      "Craft tailored, high-converting cold email sequences, personalized video touchpoints, and multi-channel outreach.",
      "Qualify inbound leads and schedule discovery meetings for Senior Account Executives and Solutions Architects.",
      "Maintain rigorous CRM hygiene in HubSpot and Salesforce, tracking pipeline stages and customer objections.",
    ],
    requirements: [
      "Outstanding verbal and written English communication skills; persuasive and empathetic demeanor.",
      "Curiosity about tech, cloud infrastructure, and software products (you don't need to code, but you must understand tech concepts).",
      "Resilient mindset, competitive drive, and strong organizational skills.",
      "Background or interest in Business, Communications, Economics, or Tech.",
    ],
    learningOutcomes: [
      "Master the MEDDPICC and Command of the Message enterprise sales methodologies.",
      "Direct commission opportunities with potential for fast-track promotion to Full Account Executive (AE) upon graduation.",
      "Develop executive-level conversational confidence pitching Fortune 1000 technical leaders.",
    ],
    mentorsAssigned: "VP of Enterprise Sales (ex-Salesforce, Snowflake)",
  },
  {
    id: "sales-presales-solutions",
    title: "Technical Pre-Sales & Solutions Consulting Intern",
    department: "sales",
    departmentLabel: "B2B Tech Sales",
    location: "Bengaluru, India / Hybrid",
    workMode: "Hybrid",
    duration: "6 Months",
    stipend: "$2,000 - $2,600 / month (or ₹40,000 - ₹55,000 / mo IN)",
    positionsAvailable: 3,
    batch: "Upcoming Cohort",
    deadline: "Open until filled",
    overview: "Bridge the gap between business value and technical implementation. Prepare interactive product demos, respond to client RFPs, and assist during technical deep-dive calls.",
    responsibilities: [
      "Configure custom sandbox demo environments tailored to prospective client business requirements.",
      "Collaborate with Solutions Architects to draft technical proposals and architecture diagrams for prospective clients.",
      "Participate in live client demo sessions to answer questions about security, APIs, and integrations.",
      "Analyze prospect objections and feed insights back to the Product and Engineering teams.",
    ],
    requirements: [
      "Hybrid skill set: technical literacy combined with strong interpersonal and presentation skills.",
      "Ability to quickly grasp software architecture concepts and communicate them in simple business terms.",
      "Background in Computer Science, Information Systems, or Business & Tech.",
    ],
    learningOutcomes: [
      "Learn how six-figure enterprise software contracts are evaluated and won.",
      "Direct pathway to high-paying Solutions Architect and Sales Engineering careers.",
    ],
    mentorsAssigned: "Director of Solutions Engineering",
  },
  {
    id: "marketing-growth-product",
    title: "Product Marketing & Technical Content Intern",
    department: "marketing",
    departmentLabel: "Growth & Marketing",
    location: "San Francisco, CA / Remote",
    workMode: "Remote",
    duration: "3 - 6 Months",
    stipend: "$1,800 - $2,400 / month",
    positionsAvailable: 4,
    batch: "Summer / Fall Cohort",
    deadline: "Rolling Admission",
    overview: "Help tell the story of Technovant's SaaS products and IT capabilities. Write compelling technical blog posts, product release notes, case studies, and social media campaigns.",
    responsibilities: [
      "Author engaging technical articles, developer tutorials, and industry whitepapers on cloud cost optimization and AI.",
      "Create high-converting landing page copy and assist with product hunt launches.",
      "Collaborate with design teams to produce product screenshots, infographics, and short-form video explainers.",
      "Manage social media presence across LinkedIn, X (Twitter), and developer forums (Reddit, Hacker News).",
    ],
    requirements: [
      "Excellent storytelling and written communication skills with the ability to explain complex tech concepts engagingly.",
      "Active interest in the tech ecosystem, SaaS trends, and developer culture.",
      "Basic understanding of SEO best practices, keyword research, and social engagement mechanics.",
      "Portfolio of writing samples, personal blog, or university publications.",
    ],
    learningOutcomes: [
      "Build a published portfolio of high-traffic technical and product marketing pieces seen by thousands of IT leaders.",
      "Master product positioning, competitive intelligence matrices, and go-to-market (GTM) execution.",
    ],
    mentorsAssigned: "Director of Product Marketing (ex-Twilio)",
  },
  {
    id: "marketing-performance-growth",
    title: "Performance & Growth Marketing Intern",
    department: "marketing",
    departmentLabel: "Growth & Marketing",
    location: "Bengaluru / Remote",
    workMode: "Remote",
    duration: "6 Months",
    stipend: "$1,800 - $2,400 / month (or ₹35,000 - ₹50,000 / mo IN)",
    positionsAvailable: 3,
    batch: "Upcoming Cohort",
    deadline: "Open until filled",
    overview: "Drive measurable user acquisition and lead generation. Execute paid search campaigns, analyze conversion funnels, and optimize customer journeys across our web presence.",
    responsibilities: [
      "Assist in running and optimizing Google Search, LinkedIn Ads, and Meta retargeting campaigns.",
      "Analyze user behavior metrics using Google Analytics 4, Mixpanel, and Hotjar to identify drop-off points.",
      "Execute A/B tests on landing page headlines, CTA buttons, and pricing page layouts.",
      "Manage email nurturing sequences for prospective leads and internship applicants.",
    ],
    requirements: [
      "Analytical mindset with strong grasp of data analysis (Excel/Sheets, SQL or Python is a plus).",
      "Familiarity with digital marketing channels (Google Ads, LinkedIn Ads, SEO, Email Marketing).",
      "Creativity paired with data-driven decision making.",
    ],
    learningOutcomes: [
      "Manage real five-figure ad budgets with direct revenue attribution.",
      "Master modern growth marketing stacks: GA4, PostHog, HubSpot, and Webflow/Next.js analytics.",
    ],
    mentorsAssigned: "Head of Growth & Acquisition",
  },
];

export const INTERNSHIP_FAQS = [
  {
    question: "Are these internships paid?",
    answer: "Yes, 100% of our internships are paid with competitive monthly stipends based on role and location. In addition, sales roles offer uncapped commission bonuses on qualified enterprise meetings booked.",
  },
  {
    question: "Can I receive a full-time job offer (PPO) after my internship?",
    answer: "Absolutely. Over 85% of interns who meet performance milestones receive Pre-Placement Offers (PPOs) for full-time Associate Software Engineer, SDR, or Growth Marketing Associate positions.",
  },
  {
    question: "Can college students apply if they have classes?",
    answer: "Yes. We offer both full-time (40 hrs/week) and flexible part-time (20-25 hrs/week) arrangements tailored to your academic schedules and semester exams.",
  },
  {
    question: "What does the interview process look like?",
    answer: "Our process is streamlined: (1) Application Review & Resume Screening, (2) 30-min Technical or Culture Chat, (3) Practical Take-Home Challenge (e.g. mini coding challenge for developers, mock outreach pitch for sales, or short content brief for marketing), and (4) Final Conversation with the Department Lead. We aim to complete the entire cycle within 7-10 business days.",
  },
  {
    question: "Do you provide equipment or work allowances?",
    answer: "For remote interns, we provide software subscriptions, cloud credits, and a technology stipend. For in-person/hybrid interns in San Francisco or Bengaluru, high-spec workstations and catered lunches are provided.",
  },
];
