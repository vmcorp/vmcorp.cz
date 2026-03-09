export const en = {
  lang: 'en' as const,
  nav: {
    home: 'Home',
    services: 'Services',
    servicesAi: 'AI Systems & Automation',
    servicesArch: 'Architecture & Development',
    servicesHucz: 'HU-CZ Business Bridge',
    about: 'About',
    contact: 'Contact',
    letsChat: "Let's Talk",
  },
  urls: {
    home: '/en/',
    services: '/en/services/',
    servicesAi: '/en/services/ai-systems/',
    servicesArch: '/en/services/architecture/',
    servicesHucz: '/en/services/hu-cz/',
    about: '/en/about/',
    contact: '/en/contact/',
  },
  altLang: { code: 'cs', label: 'CZ', url: '/' },

  home: {
    meta: {
      title: 'VMCorp — From Idea to Working Product. Fast.',
      description: 'We help scaling companies and enterprise divisions deliver production AI systems and scalable architecture. 20+ years of experience in regulated industries.',
    },
    hero: {
      headline: 'From Idea to Working Product.',
      headlineAccent: 'Fast.',
      subheadline: 'We help scaling companies and enterprise divisions deliver production AI systems — from agentic architecture to deployment. Backed by 20+ years of experience in regulated industries.',
      ctaPrimary: "Let's Talk",
      ctaSecondary: 'How We Work',
    },
    socialProof: [
      'Silicon Valley Trained',
      '20+ Years in Technology',
      'Own Startup Experience',
      'Enterprise Architecture',
      'Open Source & Speakers',
    ],
    pillars: [
      {
        title: 'AI Systems & Automation',
        description: 'We design and build agentic AI systems that automate real business processes. Not chatbots — intelligent multi-agent systems that work autonomously and deliver measurable outcomes.',
        icon: 'brain',
      },
      {
        title: 'Architecture & Development',
        description: 'From API design to Kubernetes in the cloud. Scalable systems built with enterprise-level code quality, battle-tested CI/CD pipelines, and deep observability.',
        icon: 'blocks',
      },
      {
        title: 'HU-CZ Business Bridge',
        description: 'Connecting Hungarian and Czech markets. Market entry support, strategic partnerships, and technology collaboration — backed by the CED network with 20+ regional offices.',
        icon: 'globe',
      },
    ],
    why: {
      label: 'Why VMCorp',
      title: "We've been through it ourselves.",
      text: "We're not an agency. We don't sell hours — we deliver value. We founded our own startups. We went through accelerator programs in Silicon Valley — US MAC Go Global, Google Startup Accelerator, Google Launchpad — where we learned to validate ideas, find product-market fit, and build with tight feedback loops.",
      text2: "We write code. We build infrastructure. We scale teams. We've delivered enterprise solutions under financial regulation across Europe, the US, and the Middle East. And we bring all of that experience to every engagement.",
      kpi: 'Our KPI: Customer satisfaction. Maximum value in the shortest time possible.',
    },
    differentiators: {
      label: 'What Sets Us Apart',
      title: 'Why VMCorp',
      cards: [
        {
          title: 'Agentic Architecture',
          description: "We don't build throwaway PoCs. We design production multi-agent systems with orchestration, evaluation, and observability — built on open-source stacks, deployed in your cloud.",
          icon: 'layers',
        },
        {
          title: 'Enterprise AI Solution Design',
          description: 'We bridge AI strategy with business reality. From discovery and impact matrix through architecture to deployment — with focus on ROI, governance, and scalability.',
          icon: 'target',
        },
        {
          title: 'Tech-to-Value Framework',
          description: 'Reusable reference architecture + short PoV cycles = speed without quality compromise. Every project builds on proven patterns, not from scratch.',
          icon: 'zap',
        },
      ],
    },
    process: {
      label: 'Delivery Model',
      title: 'From Idea to Production in Weeks, Not Months',
      subtitle: 'We achieve speed through reusable reference architecture and short Proof-of-Value cycles — not shortcuts. Open-source stack, your cloud, zero vendor lock-in.',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          description: 'Map operations, identify automation opportunities, build an impact-vs-complexity matrix. 1–2 weeks.',
        },
        {
          number: '02',
          title: 'Architecture Blueprint',
          description: 'Select reference stack, design agent architecture, define technical KPIs. Built on proven patterns. 1 week.',
        },
        {
          number: '03',
          title: 'Proof-of-Value Agent',
          description: 'Working agent deployed in your cloud, meeting agreed KPIs. Real results, not a PowerPoint. 2–4 weeks.',
        },
        {
          number: '04',
          title: 'Production Deployment',
          description: 'Scale, monitor, optimise. From one agent to multi-agent orchestration with continuous evaluation.',
        },
      ],
    },
    proof: {
      label: 'Results',
      title: 'Measurable Impact in Practice',
      items: [
        { metric: '70%', description: 'reduction in manual work', industry: 'Financial Services' },
        { metric: '55%', description: 'faster resolution time', industry: 'Telecommunications' },
        { metric: '30%', description: 'less unplanned downtime', industry: 'Energy' },
      ],
    },
    techStack: {
      label: 'Tech Stack',
      subtitle: 'Technologies we love and have years of experience with. But we\'re never limited to just these.',
      categories: [
        { name: 'Agentic AI', items: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'LangFuse', 'MCP', 'A2A', 'OpenAI', 'Anthropic'] },
        { name: 'Frontend', items: ['React', 'Vue.js', 'Astro', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Python', 'Node.js', 'PHP', 'Symfony', 'TypeScript', 'FastAPI', 'Next.js'] },
        { name: 'Data & Messaging', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis', 'RabbitMQ', 'REST', 'GraphQL', 'WebSockets', 'Mercure'] },
        { name: 'Vector DB', items: ['Pinecone', 'Weaviate', 'Qdrant', 'Milvus'] },
        { name: 'Observability', items: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Alertmanager', 'Sentry', 'Datadog'] },
        { name: 'DevOps & Infra', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'N8N', 'Nginx', 'Traefik', 'ArgoCD', 'Harbor', 'Vault', 'MinIO'] },
        { name: 'CI/CD & Cloud', items: ['GitHub Actions', 'GitLab CI', 'AWS', 'GCP', 'Azure', 'Cloudflare', 'Vercel', 'Supabase'] },
        { name: 'Tools', items: ['Git', 'Linux', 'Stripe', 'Puppeteer', 'Selenium', 'Playwright'] },
      ],
    },
    cta: {
      title: 'Have an idea or a problem that needs a technology solution?',
      text: 'We help businesses use technology to deliver their value — quickly, reliably, and at scale.',
      button: 'Schedule a Meeting',
    },
  },

  services: {
    meta: {
      title: 'Services — VMCorp',
      description: 'Tech-to-value architecture, agentic AI systems, solution architecture, open source integration, backend & DevOps, and technology evangelism.',
    },
    hero: {
      headline: 'What We Do',
      subheadline: 'We help businesses use technology to deliver their value. Six areas of expertise, one goal — measurable results, fast.',
    },
    cards: [
      {
        title: 'Tech-to-Value Architecture',
        description: 'Strategic technology consulting that directly translates to measurable business outcomes.',
        icon: 'target',
        bullets: ['ROI-focused AI Strategy', 'Technology Roadmapping', 'Value Stream Optimisation', 'Digital Transformation'],
      },
      {
        title: 'Solution Architecture',
        description: 'Scalable system design and architectural consulting tailored for mid-size organisations.',
        icon: 'blocks',
        bullets: ['Microservices Architecture', 'System Integration Design', 'Scalability Planning', 'Technical Leadership'],
      },
      {
        title: 'Agentic System Architecture',
        description: 'Design and deployment of intelligent multi-agent systems for business automation.',
        icon: 'brain',
        bullets: ['Multi-Agent Orchestration', 'Workflow Automation', 'AI Agent Deployment', 'System Integration'],
      },
      {
        title: 'Open Source Integration',
        description: 'Strategic implementation of open-source AI frameworks and system integration.',
        icon: 'heart',
        bullets: ['LangChain/LangGraph Implementation', 'CrewAI Multi-Agent Systems', 'LangFuse/LangFlow Integration', 'Custom Framework Development'],
      },
      {
        title: 'Backend Architecture & DevOps',
        description: 'Senior-level backend development and streamlined DevOps implementation.',
        icon: 'server',
        bullets: ['REST, WebSockets, Mercure', 'CI/CD, Ansible, N8N', 'Observability (OpenTelemetry, Grafana)', 'RabbitMQ & Event-Driven Architecture'],
      },
      {
        title: 'Technology Evangelism & Education',
        description: 'Public speaking, workshops, and educational initiatives for technology adoption.',
        icon: 'mic',
        bullets: ['Conference Speaking', 'Technical Workshops', 'Change Management', 'Team Training Programs'],
      },
    ],
  },

  ai: {
    meta: {
      title: 'AI Systems & Automation — VMCorp',
      description: 'We design, build, and deploy intelligent multi-agent systems that automate real business processes. Production-ready agentic AI solutions.',
    },
    hero: {
      headline: 'Agentic AI Systems That Work For You',
      subheadline: 'We design, build, and deploy intelligent multi-agent systems that automate real business processes — not demos, not prototypes, production-ready solutions.',
    },
    what: {
      title: 'What We Build',
      text: 'We specialise in turning advanced AI concepts into operational profit. Our agentic systems handle complex, multi-step business processes autonomously — from research and reasoning to action and reporting.',
      points: [
        { title: 'Open-source first', text: 'No vendor lock-in. You own everything.' },
        { title: 'Your cloud, your data', text: 'Deployed in your infrastructure, not ours.' },
        { title: 'Measurable outcomes', text: 'Every agent has KPIs: accuracy, latency, cost-per-run.' },
        { title: 'Risk-aware delivery', text: 'Governance embedded where it protects value, not where it slows you down.' },
      ],
    },
    process: {
      title: 'Our Process',
      steps: [
        { title: 'Use-Case Discovery', text: 'We map your operations, identify low-value repetitive work, and build an impact-vs-complexity matrix aligned to your revenue goals.' },
        { title: 'Architecture Design', text: 'Reference stacks tailored to your cloud strategy — Databricks/Mosaic AI, Azure OpenAI, Vertex AI, LangChain, LangGraph. We choose what fits, not what\'s trendy.' },
        { title: 'Proof-of-Value', text: 'A working agent deployed in your cloud, meeting all agreed technical KPIs. Real results, not a PowerPoint.' },
        { title: 'Scale & Optimise', text: 'From one agent to a multi-agent orchestration system. Continuous evaluation, monitoring via LangFuse, and iterative improvement.' },
      ],
    },
    architecture: {
      label: 'Modern AI Architecture',
      title: 'Reference Stack for Production AI',
      subtitle: 'Multi-layered architecture covering the full lifecycle of an agentic AI system — from orchestration to observability.',
      layers: [
        {
          name: 'AI Agents',
          description: 'Autonomous agents solving specific business tasks',
          tools: ['Custom Agents', 'RAG Pipelines', 'Tool-use Agents', 'Multi-agent Workflows', 'Python', 'TypeScript', 'FastAPI'],
        },
        {
          name: 'Orchestration',
          description: 'Routing, coordination, and management of agents',
          tools: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'MCP', 'A2A'],
        },
        {
          name: 'Evaluation & Observability',
          description: 'Quality measurement, tuning, and production monitoring',
          tools: ['LangFuse', 'LangSmith', 'OpenTelemetry', 'Grafana', 'Prometheus'],
        },
        {
          name: 'Infrastructure',
          description: 'Cloud, compute, storage, and deployment',
          tools: ['Azure', 'AWS', 'GCP', 'Databricks', 'Kubernetes', 'Docker'],
        },
      ],
    },
    safety: {
      label: 'AI System Safety',
      title: 'Safe AI Systems by Design',
      subtitle: 'Enterprise AI needs more than accuracy — it needs security, auditability, and risk management from day one.',
      principles: [
        {
          title: 'Secure Agent Permissions',
          description: 'Agents operate with minimum privileges. Every action is authorised, every data access is controlled.',
          icon: 'shield',
        },
        {
          title: 'Observability & Monitoring',
          description: 'Full transparency into agent decision-making. Traces, logs, and metrics for every step — you know exactly what the agent did and why.',
          icon: 'eye',
        },
        {
          title: 'Data Governance',
          description: 'Data stays in your cloud. Access control, encryption, audit trail. GDPR and regulatory compliance built in.',
          icon: 'database',
        },
        {
          title: 'Risk-Aware Deployment',
          description: 'Gradual rollout, human-in-the-loop where needed, automatic fallbacks. Governance protects value, not slows you down.',
          icon: 'alert-triangle',
        },
      ],
    },
    cases: {
      label: 'Proof',
      title: 'Selected Architecture Engagements',
      subtitle: 'Real-world impact — from architecture design to production deployment.',
      items: [
        {
          industry: 'Financial Services',
          problem: 'A regulated financial institution needed to automate manual compliance processes handling thousands of documents monthly.',
          architecture: 'Multi-agent system with RAG pipeline, secure document processing, and audit trail. Deployed in private cloud with full observability.',
          outcome: '70% reduction in manual work, full audit trail for the regulator, deployed in 6 weeks.',
        },
        {
          industry: 'Telecommunications',
          problem: 'A telco operator needed to streamline customer support and reduce escalations to L2/L3 teams.',
          architecture: 'Orchestrated agent system with access to internal systems via MCP, evaluation via LangFuse, real-time monitoring.',
          outcome: '40% fewer escalations, average resolution time cut by 55%, ROI achieved in 3 months.',
        },
        {
          industry: 'Energy',
          problem: 'An energy company needed to consolidate data from 12+ legacy systems for predictive maintenance.',
          architecture: 'Data integration pipeline with agent layer for anomaly detection, Kubernetes orchestration, Grafana dashboards.',
          outcome: 'Unified data view, 30% reduction in unplanned downtime, scalable architecture for further use-cases.',
        },
      ],
    },
    audience: {
      title: 'Who Is This For',
      text: 'Scaling companies and enterprise divisions that want to automate repetitive processes but need tailored solutions — not one-size-fits-all SaaS. Organisations in finance, telco, energy, and public sector that need enterprise-grade AI with proper governance.',
    },
    cta: {
      title: 'Ready to see what agentic AI can do for your business?',
      button: "Let's Talk",
    },
  },

  arch: {
    meta: {
      title: 'Architecture & Development — VMCorp',
      description: '20+ years of solving hard engineering problems. Scalable architecture, DevOps, observability, and legacy system modernisation.',
    },
    hero: {
      headline: "Scalable Architecture Built by People Who've Done It",
      subheadline: '20+ years of solving hard engineering problems. From legacy system modernisation to cloud-native greenfield projects.',
    },
    intro: {
      text: 'We design and build backend systems, APIs, and cloud infrastructure that scale. Our CTO has over 20 years of hands-on experience with high-traffic applications, complex integrations, and enterprise-level observability.',
      text2: "We don't just architect — we build. And we know what happens when systems hit real-world load, regulatory requirements, and the chaos of production.",
    },
    sections: [
      {
        title: 'Backend & API Development',
        items: [
          'PHP (20+ years, deep community involvement), Python, TypeScript, Node.js, Next.js, FastAPI',
          'REST APIs, GraphQL, gRPC — designed for longevity, versioned, documented',
          'WebSockets, Mercure — real-time communication and event-driven architecture',
          'PostgreSQL, MongoDB, Redis, RabbitMQ — chosen for the workload, not the hype',
        ],
      },
      {
        title: 'DevOps & Cloud Infrastructure',
        items: [
          'Docker, Kubernetes — production-grade orchestration',
          'Terraform, Ansible — repeatable, auditable deployments',
          'N8N — workflow automation and service integration',
          'GitHub Actions, Jenkins — automated pipelines with quality gates',
          'AWS, GCP, Azure — multi-cloud experience, vendor-agnostic approach',
        ],
      },
      {
        title: 'Observability & Monitoring',
        intro: 'This is our core domain. We build full observability powered by OpenTelemetry and an open-source stack — you see exactly what\'s happening at every layer, in real time.',
        items: [
          'OpenTelemetry — unified standard for metrics, traces, and logs',
          'Grafana, Prometheus — performance monitoring and custom dashboards',
          'Loki — log aggregation, fast search, and analysis',
          'Alertmanager — intelligent alerting and SLO tracking',
          'Distributed tracing across microservices',
        ],
      },
    ],
    legacy: {
      title: 'Legacy Systems & Technical Debt',
      text: "We are experts at untangling legacy codebases and paying down technical debt — at scale. Whether it's a monolith that needs decomposing or a decade-old system that needs modernising, we've seen it and solved it.",
    },
    oss: {
      title: 'Open Source & Community',
      text: 'We are active members of the Czech PHP community and regular speakers at meetups and conferences. We believe open source makes everyone better, and we contribute back whenever we can.',
    },
    cta: {
      title: "Need someone who's solved your kind of problem before?",
      button: 'Get in Touch',
    },
  },

  hucz: {
    meta: {
      title: 'HU-CZ Business Bridge — VMCorp',
      description: 'Cross-border business services between Hungary and the Czech Republic. Market entry, partnerships, and technology collaboration.',
    },
    hero: {
      headline: 'Bridging Hungary and the Czech Republic',
      subheadline: 'Cross-border business services with deep local expertise on both sides.',
    },
    why: {
      title: 'Why HU-CZ',
      text: "The economic ties between Hungary and the Czech Republic are growing, but the market remains underserved. Language barriers, cultural differences, and fragmented networks make cross-border business harder than it needs to be.",
      text2: 'We bridge that gap — with people who know both markets from the inside.',
    },
    offers: [
      {
        title: 'Market Entry Support',
        text: "Whether you're a Hungarian company entering the Czech market or a Czech company expanding to Hungary, we provide the local knowledge, contacts, and regulatory understanding to make it happen.",
      },
      {
        title: 'Strategic Partnerships',
        text: 'We connect businesses across borders — identifying partners, facilitating introductions, and supporting long-term collaboration.',
      },
      {
        title: 'Technology Collaboration',
        text: 'Joint development projects, shared R&D, and technology transfer between Hungarian and Czech teams. We handle the coordination, you focus on building.',
      },
    ],
    ced: {
      title: 'CED Partnership',
      text: 'We partner with the Central European Economic Development Network (CED) — a network of 20+ regional offices across Hungary. This gives us unmatched reach into the Hungarian business ecosystem, from Budapest to regional centres.',
    },
    team: {
      title: 'Led By',
      text: 'This service is led by Arpád Velvéthy, a senior member of our team with deep expertise in Hungarian business, regulatory environment, and cross-border operations. Combined with our Czech tech network and startup ecosystem knowledge, we offer a complete bridge between both markets.',
    },
    cta: {
      title: 'Looking to expand across the HU-CZ corridor?',
      button: "Let's Discuss",
    },
  },

  about: {
    meta: {
      title: 'About — VMCorp',
      description: 'Technology with an entrepreneurial soul. Our story, team, and values.',
    },
    hero: {
      headline: 'Technology With an Entrepreneurial Soul',
      subheadline: "We've built startups, scaled enterprise systems, and trained with the best. Now we help others do the same.",
    },
    story: {
      label: 'Our Story',
      p1: 'VMCorp was founded in 2009 by David Velvéthy and Jan Mikes. Since then, we\'ve built and sold our own startups, delivered enterprise projects under strict financial regulation, and gone through accelerator programs in Silicon Valley and across Europe.',
      p2: 'We went through the US MAC "Go Global" program — four weeks in San Francisco with experienced mentors from companies like Salesforce and Oracle who taught us how to build, validate, and scale. We\'ve participated in Google Startup Accelerator programs, Google Launchpad, and numerous other training programs.',
      p3: "Today, we help businesses use technology to deliver their value — fast, pragmatically, and with measurable impact.",
      p4: "We're not building the next unicorn. We're helping you build something that works.",
    },
    team: {
      label: 'Core Team',
      david: {
        name: 'David Velvéthy',
        role: 'CEO & Tech-to-Value Architect',
        initials: 'DV',
        email: 'david@vmcorp.cz',
        bio: 'David specialises in turning advanced AI concepts into operational profit. As a Tech-to-Value Architect, he bridges executive vision with engineering reality — identifying low-value work, designing AI/GenAI products, and governing delivery so risk and ROI stay aligned.',
        bio2: 'With over 13 years of executive experience and six years under European financial regulation, David brings deep understanding of business operations, regulatory compliance, and profitable technology strategy. He has led crypto custodian projects, tokenisation initiatives under cross-nation regulatory frameworks, and digital assets operations across CEE.',
        bio3: 'Currently guiding AI solution architecture across the US, Europe, and the Middle East, David has helped scale an AI practice from 6 to 60 professionals executing 20+ concurrent projects in finance, telco, energy, and public sector.',
      },
      jan: {
        name: 'Jan Mikes',
        role: 'CTO & Architecture Specialist',
        initials: 'JM',
        email: 'jan@vmcorp.cz',
        bio: 'Jan is a hands-on technologist with over 20 years of experience building, scaling, and fixing software systems. A notable member of the Czech PHP community, open source contributor, and regular conference speaker, he brings deep expertise in backend architecture, DevOps, CI/CD, and infrastructure.',
        bio2: 'His speciality is solving hard architecture problems — legacy system modernisation, technical debt at scale, and building highly scalable applications that survive real-world load. With strong skills in PHP, TypeScript, Python, Next.js, and deep domain knowledge in observability and monitoring, Jan ensures that everything VMCorp builds is production-ready and maintainable.',
        bio3: 'He has founded multiple startups and brings that entrepreneurial mindset to every project — move fast, ship working software, iterate based on real feedback.',
      },
      arpad: {
        name: 'Arpád Velvéthy',
        role: 'Senior Partner — HU-CZ Business Services',
        bio: 'Arpád leads VMCorp\'s cross-border business services between Hungary and the Czech Republic. With deep expertise in the Hungarian business environment, regulatory landscape, and extensive network through the CED, he helps companies navigate market entry, build strategic partnerships, and enable technology collaboration across the HU-CZ corridor.',
      },
    },
    values: {
      label: 'Our Values',
      items: [
        { title: 'Pragmatism', text: 'We ship working software. Theory is useful. Delivery is what matters.' },
        { title: 'Open Source', text: 'We believe open communities make everyone better. We contribute, we speak, we share.' },
        { title: 'Transparency', text: 'No hidden agendas, no buzzword fog. We communicate directly and honestly.' },
        { title: 'Customer Obsession', text: "100% customer satisfaction isn't a slogan — it's our actual KPI. We deliver high value in the shortest time possible." },
      ],
    },
    community: {
      title: 'Community & Speaking',
      text: 'We regularly speak at community meetups and conferences. We share our knowledge because we believe an open community pushes the entire industry forward. From PHP architecture to agentic AI systems, we bring practical experience to every talk.',
      orgs: [
        { name: 'Péhápkaři', url: 'https://pehapkari.cz', description: 'Czech PHP community — talks, meetups, and knowledge sharing.', logo: '/logos/pehapkari.svg' },
        { name: 'AI4DEV', url: 'https://ai4dev.cz', description: 'Community focused on practical AI for developers.', logo: '/logos/ai4dev.svg' },
        { name: 'TechMeetup', url: 'https://techmeetup.cz', description: 'Regular tech meetups across disciplines.', logo: '/logos/techmeetup.png' },
      ],
    },
    cta: {
      title: 'Want to know more about who we are?',
      button: 'Get in Touch',
    },
  },

  contact: {
    meta: {
      title: 'Contact — VMCorp',
      description: "Let's talk. Whether you have a project or just an idea — we'd love to hear about it.",
    },
    hero: {
      headline: "Let's Talk",
      subheadline: "Whether you have a specific project or just an idea — we'd love to hear about it.",
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'What can we help you with?',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent!',
      successText: 'Thank you for reaching out. We\'ll get back to you as soon as possible.',
      error: 'Something went wrong',
      errorText: 'We couldn\'t send your message. Please try again, or contact us directly.',
    },
    company: {
      name: 'Velvethy & Mikes Corporation s.r.o.',
      address: 'Francouzska 299/98',
      city: 'Vrsovice, 101 00 Prague 10',
      country: 'Czech Republic',
      ic: '28994124',
      dic: 'CZ28994124',
    },
    alt: {
      title: 'Prefer a call?',
      text: 'Schedule a meeting directly.',
    },
  },

  footer: {
    tagline: 'We help businesses deliver value through technology.',
    services: 'Services',
    company: 'Company',
    companyName: 'Velvethy & Mikes Corporation s.r.o.',
    ic: '28994124',
    dic: 'CZ28994124',
    address: 'Francouzska 299/98, Prague 10',
  },
};
