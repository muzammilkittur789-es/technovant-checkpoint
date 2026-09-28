export interface ProductConcept {
  id: string;
  name: string;
  conceptBadge: string;
  shortDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  targetUsers: string;
  developmentStage: string;
  estimatedPhase: string;
}

export const PRODUCTS_CONFIG = {
  hero: {
    headline: "Software Products We're Building",
    supportingText: "Alongside our client IT services, we are actively developing SaaS products designed to simplify recurring business problems and make practical technology accessible to growing businesses.",
    badge: "Product Vision & Roadmap",
  },
  visionStatement: {
    title: "From Building Solutions to Building Products",
    body: "We don't just build technology for businesses. We are also building technology products of our own. Our long-term vision is to turn recurring business challenges into simple, scalable SaaS solutions. Every product we design originates from real operational bottlenecks we encounter in the field.",
  },
  productsInDevelopment: [
    {
      id: "workflow-automation",
      name: "OpsFlow (In Development)",
      conceptBadge: "Operations SaaS",
      shortDescription: "A streamlined workflow and task automation tool tailored for growing service businesses without enterprise complexity.",
      problemSolved: "Growing teams struggle with fragmented approval chains, forgotten follow-ups, and tedious manual status updates across email threads and spreadsheets.",
      keyFeatures: [
        "Lightweight visual workflow and approval pipeline builder",
        "Automated client intake forms with real-time status tracking",
        "Direct webhook and email notifications for pending approvals",
        "Audit log tracking every step from task creation to completion",
      ],
      targetUsers: "Operations managers, professional service agencies, and growing SMB teams.",
      developmentStage: "Architecture & Prototype",
      estimatedPhase: "Early Access Beta in Preparation",
    },
    {
      id: "knowledge-assistant",
      name: "DocuSense (In Development)",
      conceptBadge: "AI & Knowledge Retrieval",
      shortDescription: "A private, secure document search and query assistant that answers questions directly from your company's SOPs and records.",
      problemSolved: "Valuable operational knowledge is buried across hundreds of PDFs, policy manuals, and past tickets, causing staff to spend hours searching for basic information.",
      keyFeatures: [
        "Private document indexing with strict zero-training data privacy",
        "Natural language search with precise page and paragraph citations",
        "Granular permission levels ensuring staff only view authorized docs",
        "Fast conversational interface with exportable summary notes",
      ],
      targetUsers: "Internal support teams, compliance officers, and knowledge-intensive businesses.",
      developmentStage: "Core Engine Research",
      estimatedPhase: "Internal Testing",
    },
    {
      id: "cloud-monitor",
      name: "CloudScope (In Development)",
      conceptBadge: "Cloud & FinOps",
      shortDescription: "A lightweight cloud resource and spending monitor that flags idle servers and unexpected cost spikes before the monthly bill arrives.",
      problemSolved: "Businesses migrating to the cloud often suffer 'bill shock' from forgotten test instances, unattached storage disks, and unmonitored autoscaling groups.",
      keyFeatures: [
        "Automated discovery of idle and orphaned cloud infrastructure",
        "Weekly cost anomaly alerts sent directly via email or Slack",
        "Actionable, plain-English rightsizing recommendations",
        "Unified multi-environment spending breakdown",
      ],
      targetUsers: "Technical founders, engineering leads, and DevOps engineers managing cloud budgets.",
      developmentStage: "Design & Scoping",
      estimatedPhase: "Concept Validation",
    },
  ] as ProductConcept[],
};
