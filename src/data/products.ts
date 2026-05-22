export interface Product {
  number: string;
  slug: string;
  name: string;
  category: string;
  status: string;
  artifact: string;
  url: string | null;
  urlLabel?: string;
  product: string;
  problem: string;
  solution: string;
  outcome: string;
  sortOrder: number;
}

export const products: Product[] = [
  {
    number: '01',
    slug: 'daylipa-paygo',
    name: 'PayGo Solutions',
    category: 'Fintech · Clean Energy · IoT',
    status: 'Live · Since 2023',
    artifact: 'M-PESA repayment layer · Remote device controls · Davis & Shirtliff branch rollout',
    url: 'https://preo.org/news/project-news/digital-innovation-meets-clean-energy/',
    product:
      "A digital Pay-As-You-Go financing platform that enables Kenyan smallholder farmers to access solar water pumps through M-PESA micro-payments. Built in partnership with Davis & Shirtliff, one of East Africa's largest energy and water solutions suppliers, and funded by PREO.",
    problem:
      'Smallholder farmers in Kenya depend on rainfall or expensive diesel pumps for irrigation. Solar pumps are cleaner and cheaper long-term, but the upfront cost is prohibitive. Formal finance providers will not extend credit to smallholders, locking thousands of farmers out of climate-smart irrigation.',
    solution:
      'Designed the PAYGO reconciliation platform integrating M-PESA payments with remote device monitoring and control. Customers pay a small deposit and repay through flexible micro-payments. The platform handles credit assessment, payment tracking, customer account management, and remote equipment locking on default, connecting farmers, distributors, and finance through a single digital layer.',
    outcome:
      "DayLipa Finance launched in April 2023 across Davis & Shirtliff's network of 50+ branches and 700+ stockists. The platform is targeting 112,000 sales by 2029 with expansion planned across Kenya, Uganda, Tanzania, and Zambia.",
    sortOrder: 1,
  },
  {
    number: '02',
    slug: 'duka-plus',
    name: 'Duka+',
    category: 'B2B · FMCG · Credit',
    status: 'Completed pilot',
    artifact: 'Retailer onboarding · Credit line workflows · Automated funder reporting',
    url: 'https://www.transform.global/enterprise-projects/duka-by-4r-digital.html',
    product:
      'A digital ordering and credit platform for small informal shops, known as dukas, that form the backbone of last-mile retail across sub-Saharan Africa. Funded by TRANSFORM (Unilever/FCDO/EY). Connects micro-retailers directly to FMCG distributors with a flexible line of credit and same-day green delivery.',
    problem:
      'Duka owners operate entirely in cash, order stock by physically visiting wholesalers, and have no access to formal credit. This limits their inventory, increases stockouts, and keeps them trapped in inefficient supply chains. The majority of these shops are women-owned or women-operated.',
    solution:
      'Managed the delivery and pilot testing of the Duka+ platform across Kambu and Nairobi. Built automated tracking systems that replaced manual pilot management processes. Implemented advanced data analytics to facilitate reporting to funders and management, and supported the transition from pilot workflows into scalable automated systems.',
    outcome:
      '15% sales uplift for pilot participants. 51 shop owners onboarded in the alpha pilot. Automated reporting replaced manual tracking, enabling scale-up planning. The pilot demonstrated the viability of digitising last-mile FMCG distribution with embedded credit.',
    sortOrder: 2,
  },
  {
    number: '03',
    slug: 'wealthtrack',
    name: 'WealthTrack',
    category: 'Fintech · PWA · AI',
    status: 'Live beta',
    artifact: 'M-PESA parser · Net worth dashboard · Offline-first PWA architecture',
    url: 'https://wealthtracker-beta.bizframer.com/',
    product:
      'A personal finance Progressive Web App that gives East African users visibility into their money across M-PESA, bank accounts, and cash, with AI-powered transaction categorization built for how money actually moves in mobile-money economies.',
    problem:
      'Over 70% of financial transactions in East Africa flow through M-PESA, but personal finance tools are designed for Western banking systems. Users have no visibility into spending patterns, savings progress, or net worth across mobile money and bank accounts.',
    solution:
      'Built an M-PESA statement parser with a 14-category AI taxonomy designed from 500+ real transaction descriptions, including categories like agent withdrawal fees and person-to-person transfers that Western tools do not recognise. Chose a Net Worth Dashboard as the anchor feature over budgeting tools after research showed users were more motivated by seeing wealth grow than by restricting spending. Offline-first PWA architecture supports 3G environments with zero-plaintext encryption.',
    outcome:
      '94% transaction categorization accuracy. Zero-plaintext encryption spec adopted as the platform security standard. Successfully migrated from Lovable Cloud to Supabase + Vercel without service disruption. Architecture modularity validated through an extracted OfflineFirst Finance concept at the Andela hackathon.',
    sortOrder: 3,
  },
  {
    number: '04',
    slug: 'sank-election-platform',
    name: 'SANK e-Election Platform',
    category: 'Civic Tech · Security',
    status: 'Completed specification',
    artifact: 'Voter import model · Ballot flow · Security architecture handoff',
    url: 'https://sank-election.bizframer.com/',
    product:
      'A secure digital voting platform for the Sweden Alumni Network Kenya, approximately 200 members. Handles candidate nominations, voter eligibility verification, ballot casting, and result tabulation in a single integrated system, designed so that trust is the architecture, not a feature bolted on afterward.',
    problem:
      'SANK needed to elect a new board, but members are geographically dispersed across Kenya and internationally. Previous digital voting attempts failed because members questioned ballot integrity and voter eligibility. Any perception of manipulation would delegitimize the elected board before it even started.',
    solution:
      'Delivered a complete specification suite: PRD, user flows, security specifications, technical architecture, and Material Design 3 design system. Made the defining architectural decision to replace self-registration with admin-controlled CSV voter import after security analysis revealed eligibility verification gaps. Built on Next.js + Fastify + PostgreSQL with Redis for session management, selected for auditability over development speed.',
    outcome:
      'Security model passed election committee review. The CSV voter import architecture eliminated all eligibility disputes in committee assessment. Full documentation package delivered and structured for development handoff, either volunteer or contracted implementation. Designed for approximately 200 members with extensibility for other alumni networks.',
    sortOrder: 4,
  },
  {
    number: '05',
    slug: 'bds-mentorship-platform',
    name: 'BDS Mentorship Platform',
    category: 'EdTech · B2B · HCD',
    status: 'In development',
    artifact: 'Group sessions · Mentorship tracking · 107-test-case UAT runbook',
    url: null,
    urlLabel: 'Platform in development, not yet public',
    product:
      'A Business Development Services mentorship platform for the Institute of Certified SIYB Trainers Kenya (ICST). Connects certified trainers with aspiring entrepreneurs through structured mentorship programs, group sessions, and progress tracking, digitising a process that has always been informal and undocumented.',
    problem:
      'SIYB-certified trainers in Kenya had no digital infrastructure to manage mentorship relationships, track trainee progress, or deliver group sessions at scale. Mentorship was ad hoc, unrecorded, and completely disconnected from the formal SIYB training cycle. There was no way to measure whether mentorship was working.',
    solution:
      "Led an extended multi-session design and specification build spanning 18+ collaborative sessions. Produced HCD/UXD documentation referencing 14 global standards including ISO 9241-210, WCAG 2.1 AA, and Nielsen's 10 heuristics. Delivered a Group Session feature specification and a 107-test-case UAT runbook with Playwright automation guidance.",
    outcome:
      "Complete specification suite delivered for development. HCD-compliant design system established as the platform's foundation. 107-test-case UAT runbook ready for quality assurance. Platform architecture designed specifically for the Kenyan business development services ecosystem.",
    sortOrder: 5,
  },
  {
    number: '06',
    slug: 'bizframer',
    name: 'BizFramer',
    category: 'SaaS · EdTech · AI',
    status: 'In development',
    artifact: 'GYBI module · Trainer progress metrics · AI-guided business plan flow',
    url: 'https://bizframer.com/',
    product:
      "An AI-guided business plan builder that transforms the ILO Start and Improve Your Business (SIYB) methodology, the world's most widely used entrepreneurship training program active in 100+ countries, into a scalable digital experience. Built under Civanta.io.",
    problem:
      'The ILO SIYB program trains entrepreneurs globally but runs entirely on paper workbooks and in-person facilitation. Trainers cannot scale beyond the room they are standing in. Trainees lose momentum between sessions, and there is zero data on whether the business plans being produced are actually viable.',
    solution:
      'Designed the product strategy and partnership framework with the Institute of Certified SIYB Trainers Kenya. Scoped the MVP to the Generate Your Business Idea module, the highest-attrition point in the training cycle, based on discovery interviews with 8 trainers. Built business plan progression metrics that give trainers their first quantitative view of trainee development in the methodology history.',
    outcome:
      'Exploring partnership with ICST Kenya. Selected as lead product narrative for CMU-Africa Business Incubation Program evaluation. Discovery research fundamentally reshaped the MVP from full SIYB cycle to a focused single-module intervention.',
    sortOrder: 6,
  },
  {
    number: '07',
    slug: 'yodaai',
    name: 'YodaAI',
    category: 'AI · Agile · Developer Tools',
    status: 'Live beta',
    artifact: '4Ls retrospective flow · AI prompts · Action-item follow-up loop',
    url: 'https://yoda-ai.onrender.com/',
    product:
      'An AI-powered co-facilitator for agile retrospectives. Guides teams through structured 4Ls retrospectives, Liked, Learned, Lacked, Longed For, with intelligent prompts, pattern recognition across sprints, and automated follow-up. Grounded in PMI Disciplined Agile best practices.',
    problem:
      'Retrospectives are the most valuable agile ceremony and the most frequently skipped. Teams suffer from dominant voices, shallow insights, and action items that never get followed up. Existing tools collect sticky notes and run votes but do not help facilitators see patterns, surface what is not being said, or track whether the team is actually improving.',
    solution:
      'Co-developed with Richard Magu. Designed the AI as a co-facilitator: it suggests discussion prompts based on previous retro data, synthesizes themes from team input in real time, identifies recurring patterns across retrospectives, and automates post-retro summaries and action item tracking. The human facilitator always controls the flow. Validated the concept through a presentation-first approach at PMI Kenya Chapter before committing to backend engineering.',
    outcome:
      'Live platform at yoda-ai.onrender.com. Presented at PMI Kenya Chapter with live Mentimeter polling that validated the co-facilitation concept with real practitioners. Beta testing active with feedback informing iteration priorities. Pre-retro prep automation, post-retro summaries within 1 hour, and weekly action item check-ins implemented.',
    sortOrder: 7,
  },
].sort((a, b) => a.sortOrder - b.sortOrder);
