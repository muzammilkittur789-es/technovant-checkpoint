export interface CompanyConfig {
  name: string;
  tagline: string;
  headline: string;
  supportingMessage: string;
  mission: string;
  vision: string;
  philosophy: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    careersEmail: string;
    linkedIn: string;
    github: string;
    twitter: string;
  };
  values: {
    title: string;
    description: string;
  }[];
  pillars: {
    title: string;
    description: string;
    badge: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  workProcess: {
    step: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
}

export const COMPANY_INFO: CompanyConfig = {
  name: "Technovant",
  tagline: "Technology That Moves Your Business Forward",
  headline: "Technology That Moves Your Business Forward",
  supportingMessage: "Building practical digital solutions for businesses — from IT services and custom software to the next generation of SaaS products.",
  mission: "Our mission is to make useful technology accessible to businesses while creating opportunities for emerging technology professionals to build real-world expertise.",
  vision: "To build a technology company that serves businesses through IT services while creating scalable software products of its own.",
  philosophy: "We believe talented young professionals become strong technology builders when given real projects, structured learning, mentorship, responsibility, and continuous feedback. We build reliable software through modern engineering discipline, thorough testing, and radical accountability.",
  contact: {
    email: "contact@technovant.io", // [Email]
    phone: "+1 (555) 234-8900",       // [Phone]
    address: "Technology Park, Outer Ring Road, Bengaluru & San Francisco, CA", // [Location]
    careersEmail: "careers@technovant.io",
    linkedIn: "https://linkedin.com/company/technovant", // [LinkedIn]
    github: "https://github.com/technovant",             // [GitHub]
    twitter: "https://twitter.com/technovant",           // [Twitter]
  },
  values: [
    {
      title: "Learn continuously",
      description: "Technology evolves rapidly. We maintain constant curiosity, studying modern patterns, frameworks, and tools to solve problems faster.",
    },
    {
      title: "Build practically",
      description: "We avoid unnecessary complexity. We choose the right tools for the business problem rather than adopting technology for hype.",
    },
    {
      title: "Take ownership",
      description: "From requirements gathering to post-deployment monitoring, every team member takes full personal responsibility for system quality.",
    },
    {
      title: "Communicate clearly",
      description: "We communicate with absolute transparency — clear roadmaps, proactive status updates, documented APIs, and honest delivery expectations.",
    },
    {
      title: "Improve constantly",
      description: "Through automated tests, rigorous code reviews, and post-mortems, every release is cleaner, faster, and more resilient than the last.",
    },
    {
      title: "Create useful technology",
      description: "Software is only valuable if it genuinely solves problems, streamlines business workflows, or unlocks new capability for users.",
    },
  ],
  pillars: [
    {
      title: "Practical Technology",
      description: "Pragmatic architectures designed specifically around your operational goals, avoiding bloated stacks or unnecessary overhead.",
      badge: "Core Architecture",
    },
    {
      title: "Flexible Engagement",
      description: "Agile, adaptable collaboration models — from dedicated sprint teams to milestone-based project deliverables.",
      badge: "Adaptability",
    },
    {
      title: "Cost-Efficient Delivery",
      description: "Disciplined resource allocation that maximizes product velocity and code quality without enterprise markups.",
      badge: "Cost Conscious",
    },
    {
      title: "Fast Adaptation",
      description: "A nimble, enthusiastic engineering team capable of rapid prototyping, continuous feedback loops, and swift iteration.",
      badge: "Agile Speed",
    },
  ],
  whyChooseUs: [
    {
      title: "Business-focused solutions",
      description: "We start with your operational objectives, user needs, and commercial outcomes before writing a single line of code.",
    },
    {
      title: "Modern technology stack",
      description: "We leverage reliable modern technologies — TypeScript, Next.js, Python, Go, Node.js, and managed cloud platforms.",
    },
    {
      title: "Flexible development approach",
      description: "We adapt smoothly to changing priorities, new business feedback, and phased roadmap rollouts without rigid friction.",
    },
    {
      title: "Transparent communication",
      description: "Direct access to engineering leads, bi-weekly demo sprints, shared repositories, and clearly documented milestones.",
    },
    {
      title: "Cost-conscious execution",
      description: "Smart infrastructure choices and efficient team composition deliver high-quality digital solutions at sensible costs.",
    },
    {
      title: "Long-term support & partnership",
      description: "We stand firmly behind our code with proactive maintenance, security patches, performance tuning, and technical guidance.",
    },
  ],
  workProcess: [
    {
      step: "01",
      title: "Understand",
      description: "We dive deep into your business domain, existing workflows, user pain points, and target objectives.",
      deliverables: ["Requirements Specification", "Scope Definition", "Architecture Blueprint"],
    },
    {
      step: "02",
      title: "Plan",
      description: "We establish a pragmatic solution blueprint, define the optimal tech stack, and schedule sprint milestones.",
      deliverables: ["Sprint Roadmap", "Data Model / API Schema", "UI/UX Wireframes"],
    },
    {
      step: "03",
      title: "Build",
      description: "Our team designs, codes, tests, and iteratively refines your application with continuous client review.",
      deliverables: ["Clean Documented Code", "Automated Test Suites", "Staging Environments"],
    },
    {
      step: "04",
      title: "Support",
      description: "We deploy to secure production cloud environments, monitor health metrics, and continuously maintain the software.",
      deliverables: ["Cloud Deployment", "Monitoring & SLA", "Ongoing Iteration"],
    },
  ],
};
