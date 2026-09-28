export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  category: string;
  description: string;
  rating: number;
  reviewsCount: number;
  keyStats: { label: string; value: string }[];
  highlightFeatures: { title: string; description: string; icon: string }[];
  pricing: {
    starter: { monthly: number; annual: number; period: string; features: string[] };
    growth: { monthly: number; annual: number; period: string; popular?: boolean; features: string[] };
    enterprise: { monthly: number | string; annual: number | string; period: string; features: string[] };
  };
  demoDetails: {
    videoPlaceholderText: string;
    metrics: { label: string; value: string; change: string }[];
  };
}

export const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: "cloudpulse",
    name: "CloudPulse AI",
    tagline: "Autonomous Multi-Cloud FinOps & Infrastructure Health",
    badge: "Most Popular SaaS",
    category: "Cloud Observability & FinOps",
    description: "CloudPulse AI continuously monitors AWS, Azure, and Google Cloud workloads. It identifies idle resources, provisions reserved instances automatically, and provides predictive cost forecasts with zero manual spreadsheets.",
    rating: 4.9,
    reviewsCount: 380,
    keyStats: [
      { label: "Avg. Cloud Cost Reduction", value: "34%" },
      { label: "Cloud Assets Monitored", value: "14M+" },
      { label: "Payback Period", value: "< 14 Days" },
    ],
    highlightFeatures: [
      {
        title: "Autonomous Waste Elimination",
        description: "Detects unattached EBS volumes, zombie pods, overprovisioned RDS instances, and implements rightsizing with single-click safety guardrails.",
        icon: "TrendingDown",
      },
      {
        title: "Predictive Anomaly Spike Alerts",
        description: "Machine learning algorithms alert your engineering team 2 hours before a runaway Lambda loop triggers an unexpected $10k bill.",
        icon: "BellRing",
      },
      {
        title: "Multi-Cloud Unified Pane",
        description: "View Kubernetes clusters, serverless functions, and database expenditures across AWS, GCP, and Azure in a unified executive dashboard.",
        icon: "Layers",
      },
      {
        title: "FinOps Kubernetes Pod Allocation",
        description: "Map exact cloud costs down to specific teams, namespaces, repositories, and individual engineering features.",
        icon: "PieChart",
      },
    ],
    pricing: {
      starter: {
        monthly: 99,
        annual: 79,
        period: "per month, billed annually",
        features: [
          "Up to $15,000 monthly cloud spend tracked",
          "AWS & Google Cloud integration",
          "Daily cost anomaly detection alerts",
          "Slack & Email notifications",
          "Community & Email support (24h SLA)",
        ],
      },
      growth: {
        monthly: 299,
        annual: 239,
        popular: true,
        period: "per month, billed annually",
        features: [
          "Up to $100,000 monthly cloud spend tracked",
          "Multi-Cloud (AWS, GCP, Azure & Datadog)",
          "Automated Kubernetes cost allocation",
          "1-Click Automated Rightsizing Engine",
          "Priority 2-hour SLA support & Slack channel",
          "Unlimited team members",
        ],
      },
      enterprise: {
        monthly: "Custom",
        annual: "Custom",
        period: "tailored enterprise tier",
        features: [
          "Unlimited cloud spend & custom data pipelines",
          "Custom FinOps automation agents & webhooks",
          "Dedicated FinOps Cloud Architect assigned",
          "Custom SSO, SAML, SOC 2 reports & audit logs",
          "24/7 Phone & Dedicated Emergency Hotline",
        ],
      },
    },
    demoDetails: {
      videoPlaceholderText: "CloudPulse FinOps Live Control Plane",
      metrics: [
        { label: "Current Monthly Burn", value: "$42,850", change: "-28.4% this month" },
        { label: "Actionable Savings Found", value: "$12,400", change: "18 optimizations ready" },
        { label: "Container Efficiency", value: "94.2%", change: "+15% vs last month" },
      ],
    },
  },
  {
    id: "flowdesk",
    name: "FlowDesk Ops",
    tagline: "AI-Powered Service Desk & Autonomous IT Support Triage",
    badge: "AI Powered",
    category: "ITSM & Service Operations",
    description: "FlowDesk Ops revolutionizes internal IT helpdesks and external customer support. Its fine-tuned triage LLMs categorize, route, and resolve 60% of repetitive IT tickets autonomously in under 30 seconds.",
    rating: 4.8,
    reviewsCount: 295,
    keyStats: [
      { label: "Ticket Resolution Speed", value: "6x Faster" },
      { label: "Autonomous AI Resolution", value: "58%" },
      { label: "First Contact CSAT", value: "98.2%" },
    ],
    highlightFeatures: [
      {
        title: "Intelligent Ticket Triage",
        description: "Automatically analyzes ticket sentiment, extracts logs, diagnoses root causes, and assigns to the optimal engineering pod.",
        icon: "Bot",
      },
      {
        title: "Autonomous Self-Healing Actions",
        description: "Executes verified remediation scripts for password resets, software license provisioning, and VPN troubleshooting instantly.",
        icon: "Zap",
      },
      {
        title: "Omnichannel Workspace Sync",
        description: "Employees can submit and interact with tickets seamlessly via Slack, Microsoft Teams, email, or a modern branded portal.",
        icon: "MessageSquare",
      },
      {
        title: "SLA Drift & Escalation Radar",
        description: "Predictive warnings alert team leads before any critical enterprise SLA is breached.",
        icon: "ShieldAlert",
      },
    ],
    pricing: {
      starter: {
        monthly: 79,
        annual: 59,
        period: "per agent/month, billed annually",
        features: [
          "Up to 5 IT agents included",
          "Slack & Teams conversational bots",
          "Standard ITIL incident & service catalog",
          "Knowledge base generation",
          "Business hours support",
        ],
      },
      growth: {
        monthly: 189,
        annual: 149,
        popular: true,
        period: "per agent/month, billed annually",
        features: [
          "Up to 25 IT agents included",
          "Autonomous self-healing runbook automation",
          "Smart multi-language ticket translation",
          "Advanced SLA tracking & custom escalation trees",
          "Custom API connectors to Jira & ServiceNow",
          "Priority 24/5 support",
        ],
      },
      enterprise: {
        monthly: "Custom",
        annual: "Custom",
        period: "tailored enterprise tier",
        features: [
          "Unlimited agents & enterprise-wide self-service",
          "Private on-premise or VPC LLM deployment",
          "Custom workflow orchestration & ERP integrations",
          "Role-based granular access control (RBAC)",
          "Dedicated 24/7 account management & TAM",
        ],
      },
    },
    demoDetails: {
      videoPlaceholderText: "FlowDesk Ops AI Triage Stream",
      metrics: [
        { label: "Avg Resolution Time", value: "1.4 mins", change: "-82% reduction" },
        { label: "Auto-Resolved Today", value: "418 tickets", change: "62% automated" },
        { label: "Customer Satisfaction", value: "4.92 / 5", change: "+0.4 points" },
      ],
    },
  },
  {
    id: "securavault",
    name: "SecuraVault",
    tagline: "Zero-Trust API Secrets & Machine Identity Governance",
    badge: "Security Standard",
    category: "Cybersecurity & Identity",
    description: "Centralize API keys, SSH certs, and database credentials with automated dynamic rotation, ephemeral tokens, and zero-knowledge end-to-end encryption across all cloud environments.",
    rating: 4.95,
    reviewsCount: 210,
    keyStats: [
      { label: "Leaked Credential Incidents", value: "0" },
      { label: "Daily Token Rotations", value: "2.8M+" },
      { label: "Audit Readiness Time", value: "Minutes" },
    ],
    highlightFeatures: [
      {
        title: "Ephemeral Just-in-Time Access",
        description: "Eliminate static database passwords. Developers receive short-lived credentials that expire automatically after tasks complete.",
        icon: "Lock",
      },
      {
        title: "Automated Secret Leak Detection",
        description: "Continuous git scanner prevents accidental commits of API keys and AWS tokens to public or private repositories.",
        icon: "ShieldCheck",
      },
      {
        title: "Zero-Knowledge Hardware Security",
        description: "FIPS 140-3 Level 3 certified HSM backing ensures not even our internal engineers can decrypt your secret data.",
        icon: "Key",
      },
      {
        title: "Instant One-Click Secret Revocation",
        description: "Instantly cycle compromised keys across 100+ services and cloud providers with a single API call.",
        icon: "RefreshCw",
      },
    ],
    pricing: {
      starter: {
        monthly: 129,
        annual: 99,
        period: "per month, billed annually",
        features: [
          "Up to 500 managed secrets",
          "Standard dynamic database credentials",
          "GitHub & GitLab pre-commit hooks",
          "Audit trail log exports (30-day retention)",
          "Email support",
        ],
      },
      growth: {
        monthly: 349,
        annual: 279,
        popular: true,
        period: "per month, billed annually",
        features: [
          "Up to 5,000 managed secrets",
          "Automated cloud provider rotation (AWS, Azure, GCP)",
          "Kubernetes Secret Injector webhook",
          "1-year compliance audit log retention",
          "Granular RBAC with Okta & Azure AD SSO",
          "Priority 24/7 security hotline",
        ],
      },
      enterprise: {
        monthly: "Custom",
        annual: "Custom",
        period: "tailored enterprise tier",
        features: [
          "Unlimited secrets & machine identities",
          "Dedicated Hardware Security Module (HSM)",
          "Air-gapped on-premise installation option",
          "SOC 2, FedRAMP & HIPAA compliance attestation",
          "Custom encryption keys (BYOK/HYOK)",
        ],
      },
    },
    demoDetails: {
      videoPlaceholderText: "SecuraVault Zero-Trust Token Vault",
      metrics: [
        { label: "Active Ephemeral Keys", value: "8,940", change: "100% rotated < 4 hrs" },
        { label: "Threat Events Blocked", value: "31", change: "Zero breaches detected" },
        { label: "Compliance Score", value: "100%", change: "SOC 2 Type II Verified" },
      ],
    },
  },
];
