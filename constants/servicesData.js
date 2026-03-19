// Detailed Services Data for Services Page
export const detailedServices = [
  {
    number: '01',
    title: 'Strategic Advisory',
    description: 'High-level strategic guidance to support leadership decision-making and long-term positioning.',
    details: [
      'Strategic planning and scenario analysis',
      'Market positioning and competitive strategy',
      'Growth strategy and opportunity assessment',
      'Executive decision support and facilitation',
    ],
  },
  {
    number: '02',
    title: 'Governance & Structure',
    description: 'Support in designing governance frameworks that enable accountability and resilience.',
    details: [
      'Board effectiveness and governance design',
      'Risk management frameworks',
      'Policy and compliance architecture',
      'Stakeholder management structures',
    ],
  },
  {
    number: '03',
    title: 'Organisational Alignment',
    description: 'Helping teams align strategy, operations, and culture for effective execution.',
    details: [
      'Strategic alignment workshops and facilitation',
      'Operating model design and optimization',
      'Change management support',
      'Performance framework development',
    ],
  },
];

// Process Steps
export const processSteps = [
  {
    title: 'Discovery & Scoping',
    description: 'We begin by understanding your context, challenges, and what success looks like for you.',
  },
  {
    title: 'Analysis & Framework',
    description: 'We apply analytical rigor and proven frameworks to structure thinking and identify pathways forward.',
  },
  {
    title: 'Recommendations',
    description: 'We deliver clear, actionable recommendations grounded in your reality and constraints.',
  },
  {
    title: 'Implementation Support',
    description: 'We support execution through coaching, facilitation, or ongoing advisory as needed.',
  },
];

// Engagement Models
export const engagementModels = [
  {
    title: 'Project-Based',
    description: 'Defined scope and timeline for specific strategic challenges or governance needs. Clear deliverables with beginning and end points.',
  },
  {
    title: 'Retainer Advisory',
    description: 'Ongoing strategic counsel for leadership teams navigating continuous change and complex decisions over time.',
  },
  {
    title: 'Board Support',
    description: 'Independent perspective for boards of directors on governance, oversight, and strategic direction.',
  },
  {
    title: 'Facilitation & Workshops',
    description: 'Structured sessions to align leadership teams, develop strategy, or work through critical decisions.',
  },
];

// ========== NEW REDESIGNED SERVICES DATA ==========

// Service Snapshots
export const serviceSnapshots = [
  {
    icon: 'TrendingUp',  // Make sure this matches exactly what's in iconMap
    title: 'Financial Clarity & Strategy',
    description: 'Accounting, bookkeeping, reporting, and forecasting',
  },
  {
    icon: 'Target',
    title: 'Business & Decision Coaching',
    description: 'Strategic thinking, leadership support, clarity in direction',
  },
  {
    icon: 'Sprout',
    title: 'Resilience & Well-being',
    description: 'Embodied and movement-based practices for sustainability',
  },
];

// Detailed Services (New Redesigned Version)
export const detailedServicesNew = [
  {
    id: 1,
    badge: 'Service 1',
    title: 'Accounting & Financial Management',
    subtitle: 'The foundation of financial clarity',
    features: [
      'Monthly bookkeeping',
      'Management accounts',
      'Cash flow tracking',
      'Budgeting and forecasting',
      'Clean-ups and system setup',
      'Support for international clients',
    ],
    outcome: 'Clear numbers, less overwhelm, better decisions.',
    imageSrc: '/images/Accountingandfinancialmanagement.jpg',
    imageAlt: 'Accounting and financial management',
    imagePosition: 'right',
  },
  {
    id: 2,
    badge: 'Service 2',
    title: 'Financial Strategy & Advisory',
    subtitle: 'CFO-level thinking for your business',
    features: [
      'Business performance reviews',
      'Growth planning',
      'Pricing and profitability analysis',
      'CFO-style advisory for small businesses',
    ],
    outcome: 'Strategic clarity and financial confidence.',
    imageSrc: '/images/Financialstrategyandadvisory.jpg',
    imageAlt: 'Financial strategy and advisory',
    imagePosition: 'left',
    outcomeBackground: "bg-white" 
  },
];

// Centered Service (Coaching)
export const coachingService = {
  badge: 'Service 3',
  title: 'Coaching & Decision Support',
  subtitle: 'Leadership clarity when you need it most',
  featuresColumns: [
    [
      'One-on-one coaching sessions',
      'Business clarity and prioritisation',
    ],
    [
      'Leadership and confidence support',
      'Navigating transitions and growth phases',
    ],
  ],
  outcome: 'Focused decisions and aligned leadership.',
};

// Dark Service Card (Resilience)
export const resilienceService = {
  badge: 'Service 4 • Optional Add-On',
  title: 'Resilience & Embodied Support',
  subtitle: 'Sustainable energy for sustainable business',
  features: [
    'Nia-based movement sessions',
    'Grounding and stress management',
    'Energy and focus support for business owners',
  ],
  outcome: 'Sustainable energy and resilience while building a business.',
  imageSrc: '/images/Resilienceandembodiedsupport.jpg',
  imageAlt: 'Resilience and embodied support',
};

// ========== ACCOUNTING PACKAGES (NEW) ==========

export const accountingPackages = [
  {
    id: "essentials",
    badge: "Essentials",
    tagline: "Compliance & Financial Organisation",
    bestFor: "Solo or early-stage businesses who need their finances organised and compliant.",
    features: [
      "Monthly bookkeeping & reconciliations",
      "SARS registrations & compliance checks",
      "Provisional tax calculations",
      "Annual financial statements",
      "Annual tax return submission",
      "Email support",
    ],
    result: "Your business finances are organised and compliant, without you having to manage the details.",
    isPopular: false,
  },
  {
    id: "growth",
    badge: "Growth",
    tagline: "Financial Visibility & Planning",
    bestFor: "Small businesses that want to understand their numbers and improve financial decision-making.",
    features: [
      "Everything in Essentials, plus:",
      "Monthly management reports",
      "VAT submissions (if registered)",
      "Cashflow tracking",
      "Quarterly financial review meeting",
    ],
    result: "You gain clear visibility into how your business is performing and can plan ahead with confidence.",
    isPopular: true,
  },
  {
    id: "partner",
    badge: "Partner",
    tagline: "Financial Partner Support",
    bestFor: "Business owners who want ongoing financial input and support making key decisions.",
    features: [
      "Everything in Growth, plus:",
      "Monthly financial review meeting",
      "Profitability discussions",
      "Budget planning",
      "Priority support",
    ],
    result: "You have an accountant who actively helps you make better financial decisions as your business grows.",
    isPopular: false,
  },
];

export const strategicAdvisory = {
  badge: "Strategic Advisory",
  tagline: "Optional — available once your accounting systems are stable.",
  features: [
    "Financial clarity sessions",
    "Decision support",
    "Business planning conversations",
    "Financial strategy discussions",
  ],
};

// Service Packages
export const servicePackages = [
  {
    title: 'For Solo Founders',
    description: 'Start with solid bookkeeping and monthly reporting. Add coaching when you need help prioritizing or making key decisions.',
    path: 'Foundation → Growth',
  },
  {
    title: 'For Scaling Businesses',
    description: 'Combine financial management with strategic advisory and regular coaching to navigate growth with confidence.',
    path: 'Growth → Advisory',
  },
  {
    title: 'For Sustainable Leaders',
    description: 'Add resilience support to any package to build practices that keep you grounded and energized through challenges.',
    path: 'Any package + Resilience',
  },

  {
    title: 'For Established Enterprises',
    description: 'Integrate advanced financial strategies and resilience practices to support long-term sustainability and growth.',
    path: 'Any package + Advanced Strategy',
  },
];