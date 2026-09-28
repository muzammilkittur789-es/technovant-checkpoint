export interface Testimonial {
  id: string;
  type: "client" | "intern";
  name: string;
  role: string;
  companyOrTrack: string;
  quote: string;
  rating: number;
  highlight: string;
  avatarInitials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    type: "client",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    companyOrTrack: "Apex Financial Logistics",
    quote: "Technovant modernized our entire cloud infrastructure in record time. Their DevOps engineers reduced our monthly cloud bill by 38% while improving our API latency across all regions.",
    rating: 5,
    highlight: "38% AWS Cost Cut",
    avatarInitials: "MV",
  },
  {
    id: "t2",
    type: "client",
    name: "Elena Rostova",
    role: "VP of Product",
    companyOrTrack: "HealthSync Cloud",
    quote: "We deployed CloudPulse AI alongside our Kubernetes workloads. Within 48 hours, it flagged idle multi-region database clusters that saved us $140,000 annually. It's a no-brainer SaaS.",
    rating: 5,
    highlight: "$140k Annual Savings",
    avatarInitials: "ER",
  },
  {
    id: "t3",
    type: "client",
    name: "David K. Chen",
    role: "Head of Infrastructure",
    companyOrTrack: "Stratosphere Media Corp",
    quote: "FlowDesk Ops turned our internal IT chaos into smooth automation. Over 60% of our employee tickets are resolved instantaneously without waking up on-call engineers.",
    rating: 5,
    highlight: "60% Autonomous Triage",
    avatarInitials: "DC",
  },
  {
    id: "t4",
    type: "intern",
    name: "Aarav Sharma",
    role: "Full-Stack Engineer (Ex-Intern -> PPO)",
    companyOrTrack: "Software Engineering Track",
    quote: "I joined Technovant as an engineering intern during my final year of college. Within 3 weeks, I was writing production microservices handling live client traffic. The mentorship here is unmatched, and I'm now a full-time SWE here!",
    rating: 5,
    highlight: "PPO to Full-Time SWE",
    avatarInitials: "AS",
  },
  {
    id: "t5",
    type: "intern",
    name: "Jessica Miller",
    role: "Senior Enterprise SDR (Ex-Intern -> Promoted)",
    companyOrTrack: "B2B Tech Sales Track",
    quote: "The B2B Tech Sales internship transformed my trajectory. Technovant taught me how to speak with CTOs and VPs with authority. I closed my first pilot deal in month two and earned substantial commissions.",
    rating: 5,
    highlight: "Booked $280k Pipeline",
    avatarInitials: "JM",
  },
  {
    id: "t6",
    type: "intern",
    name: "Tanmay Deshmukh",
    role: "Product Marketing Associate (Ex-Intern)",
    companyOrTrack: "Growth & Marketing Track",
    quote: "I didn't want a generic social media internship. At Technovant, I led the technical product launch for CloudPulse AI, creating teardowns and articles that drove over 15,000 organic visits.",
    rating: 5,
    highlight: "Led SaaS Product Launch",
    avatarInitials: "TD",
  },
];
