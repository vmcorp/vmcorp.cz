export const cs = {
  lang: 'cs' as const,
  nav: {
    home: 'Domů',
    services: 'Služby',
    servicesAi: 'AI systémy a automatizace',
    servicesArch: 'Architektura a vývoj',
    servicesHucz: 'HU-CZ Business Bridge',
    about: 'O nás',
    contact: 'Kontakt',
    letsChat: 'Pojďme si promluvit',
  },
  urls: {
    home: '/',
    services: '/sluzby/',
    servicesAi: '/sluzby/ai-systemy/',
    servicesArch: '/sluzby/architektura/',
    servicesHucz: '/sluzby/hu-cz/',
    about: '/o-nas/',
    contact: '/kontakt/',
  },
  altLang: { code: 'en', label: 'EN', url: '/en/' },

  home: {
    meta: {
      title: 'VMCorp — Od nápadu k fungujícímu produktu. Rychle.',
      description: 'Pomáháme rostoucím firmám a enterprise divizím dodávat produkční AI systémy a škálovatelnou architekturu. 20+ let zkušeností v regulovaných odvětvích.',
    },
    hero: {
      headline: 'Od nápadu k fungujícímu produktu.',
      headlineAccent: 'Rychle.',
      subheadline: 'Pomáháme rostoucím firmám a enterprise divizím dodávat produkční AI systémy — od agentní architektury po nasazení. S 20+ lety zkušeností v regulovaných odvětvích.',
      ctaPrimary: 'Pojďme si promluvit',
      ctaSecondary: 'Jak pracujeme',
    },
    socialProof: [
      'Silicon Valley programy',
      '20+ let v technologiích',
      'Vlastní startupové zkušenosti',
      'Enterprise architektura',
      'Open source a přednášky',
    ],
    pillars: [
      {
        title: 'AI systémy a automatizace',
        description: 'Navrhujeme a stavíme agentní AI systémy, které automatizují reálné byznys procesy. Ne chatboty — inteligentní multi-agentní systémy, které pracují autonomně a přinášejí měřitelné výsledky.',
        icon: 'brain',
      },
      {
        title: 'Architektura a vývoj',
        description: 'Od návrhu API po Kubernetes v cloudu. Škálovatelné systémy s enterprise kvalitou kódu, prověřenými CI/CD pipeline a hlubokou observabilitou.',
        icon: 'blocks',
      },
      {
        title: 'HU-CZ Business Bridge',
        description: 'Propojujeme maďarský a český trh. Vstup na trh, strategická partnerství a technologická spolupráce — s podporou sítě CED s 20+ regionálními kancelářemi.',
        icon: 'globe',
      },
    ],
    why: {
      label: 'Proč VMCorp',
      title: 'Prošli jsme si tím sami.',
      text: 'Nejsme agentura. Neprodáváme hodiny — dodáváme hodnotu. Zakládali jsme vlastní startupy. Prošli jsme akcelerátory v Silicon Valley — US MAC Go Global, Google Startup Accelerator, Google Launchpad — kde nás naučili validovat nápady, hledat product-market fit a budovat s krátkými feedback cykly.',
      text2: 'Píšeme kód. Stavíme infrastrukturu. Škálujeme týmy. Dodali jsme enterprise řešení pod finanční regulací v Evropě, USA i na Blízkém východě. Všechny tyto zkušenosti přinášíme do každého projektu.',
      kpi: 'Naše KPI: Spokojenost zákazníka. Maximální hodnota v co nejkratším čase.',
    },
    differentiators: {
      label: 'Co nás odlišuje',
      title: 'Proč právě VMCorp',
      cards: [
        {
          title: 'Agentní architektura',
          description: 'Nestavíme jednorázové PoC. Navrhujeme produkční multi-agentní systémy s orchestrací, evaluací a observabilitou — postavené na open-source stacku, nasazené ve vašem cloudu.',
          icon: 'layers',
        },
        {
          title: 'Enterprise AI Solution Design',
          description: 'Propojujeme AI strategii s byznys realitou. Od discovery a impact matice přes architekturu až po nasazení — s důrazem na ROI, governance a škálovatelnost.',
          icon: 'target',
        },
        {
          title: 'Tech-to-Value Framework',
          description: 'Znovupoužitelná referenční architektura + krátké PoV cykly = rychlost bez kompromisů na kvalitě. Každý projekt staví na ověřených vzorech, ne od nuly.',
          icon: 'zap',
        },
      ],
    },
    process: {
      label: 'Delivery model',
      title: 'Od nápadu k produkci za týdny, ne měsíce',
      subtitle: 'Rychlost dosahujeme díky znovupoužitelné referenční architektuře a krátkým Proof-of-Value cyklům — ne zkratkami. Open-source stack, váš cloud, žádný vendor lock-in.',
      steps: [
        {
          number: '01',
          title: 'Discovery',
          description: 'Zmapujeme operace, identifikujeme automatizační příležitosti a sestavíme impact-vs-complexity matici. 1–2 týdny.',
        },
        {
          number: '02',
          title: 'Architecture Blueprint',
          description: 'Vybereme referenční stack, navrhneme agentní architekturu a definujeme technická KPI. Stavíme na ověřených vzorech. 1 týden.',
        },
        {
          number: '03',
          title: 'Proof-of-Value Agent',
          description: 'Fungující agent nasazený ve vašem cloudu, splňující dohodnutá KPI. Reálné výsledky, ne prezentace. 2–4 týdny.',
        },
        {
          number: '04',
          title: 'Produkční nasazení',
          description: 'Škálování, monitoring, optimalizace. Od jednoho agenta k multi-agentní orchestraci s průběžným vyhodnocováním.',
        },
      ],
    },
    proof: {
      label: 'Výsledky',
      title: 'Měřitelný dopad v praxi',
      items: [
        { metric: '70%', description: 'redukce manuální práce', industry: 'Finanční služby' },
        { metric: '55%', description: 'zkrácení doby řešení', industry: 'Telekomunikace' },
        { metric: '30%', description: 'snížení neplánovaných odstávek', industry: 'Energetika' },
      ],
    },
    techStack: {
      label: 'Technologie',
      subtitle: 'Technologie, které milujeme a se kterými máme roky zkušeností. Ale tím to nekončí.',
      categories: [
        { name: 'Agentní AI', items: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'LangFuse', 'MCP', 'A2A', 'OpenAI', 'Anthropic'] },
        { name: 'Frontend', items: ['React', 'Vue.js', 'Astro', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Python', 'Node.js', 'PHP', 'Symfony', 'TypeScript', 'FastAPI', 'Next.js'] },
        { name: 'Data & Messaging', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis', 'RabbitMQ', 'REST', 'GraphQL', 'WebSockets', 'Mercure'] },
        { name: 'Vector DB', items: ['Pinecone', 'Weaviate', 'Qdrant', 'Milvus'] },
        { name: 'Observabilita', items: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Alertmanager', 'Sentry', 'Datadog'] },
        { name: 'DevOps & Infra', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'N8N', 'Nginx', 'Traefik', 'ArgoCD', 'Harbor', 'Vault', 'MinIO'] },
        { name: 'CI/CD & Cloud', items: ['GitHub Actions', 'GitLab CI', 'AWS', 'GCP', 'Azure', 'Cloudflare', 'Vercel', 'Supabase'] },
        { name: 'Nástroje', items: ['Git', 'Linux', 'Stripe', 'Puppeteer', 'Selenium', 'Playwright'] },
      ],
    },
    cta: {
      title: 'Máte nápad nebo problém, který potřebuje technologické řešení?',
      text: 'Pomáháme firmám využít technologie k dodání jejich hodnoty — rychle, spolehlivě a ve velkém měřítku.',
      button: 'Domluvme si schůzku',
    },
  },

  services: {
    meta: {
      title: 'Služby — VMCorp',
      description: 'Tech-to-value architektura, agentní AI systémy, architektura řešení, open source integrace, backend a DevOps, technologický evangelismus.',
    },
    hero: {
      headline: 'Co děláme',
      subheadline: 'Pomáháme firmám využít technologie k dodání jejich hodnoty. Šest oblastí expertízy, jeden cíl — měřitelné výsledky, rychle.',
    },
    cards: [
      {
        title: 'Tech-to-Value architektura',
        description: 'Strategický technologický consulting, který se přímo promítá do měřitelných obchodních výsledků.',
        icon: 'target',
        bullets: ['AI strategie zaměřená na ROI', 'Technologický roadmapping', 'Optimalizace hodnotového řetězce', 'Digitální transformace'],
      },
      {
        title: 'Architektura řešení',
        description: 'Škálovatelný systémový design a architektonický consulting na míru středním firmám.',
        icon: 'blocks',
        bullets: ['Architektura mikroslužeb', 'Návrh systémové integrace', 'Plánování škálovatelnosti', 'Technické vedení'],
      },
      {
        title: 'Architektura agentních systémů',
        description: 'Návrh a nasazení inteligentních multi-agentních systémů pro automatizaci byznys procesů.',
        icon: 'brain',
        bullets: ['Multi-agentní orchestrace', 'Automatizace workflow', 'Nasazení AI agentů', 'Systémová integrace'],
      },
      {
        title: 'Open source integrace',
        description: 'Strategická implementace open-source AI frameworků a systémová integrace.',
        icon: 'heart',
        bullets: ['Implementace LangChain/LangGraph', 'Multi-agentní systémy s CrewAI', 'Integrace LangFuse/LangFlow', 'Vývoj vlastních frameworků'],
      },
      {
        title: 'Backend architektura a DevOps',
        description: 'Seniorní backend vývoj a efektivní implementace DevOps procesů.',
        icon: 'server',
        bullets: ['REST, WebSockets, Mercure', 'CI/CD, Ansible, N8N', 'Observabilita (OpenTelemetry, Grafana)', 'RabbitMQ a event-driven architektura'],
      },
      {
        title: 'Technologický evangelismus a vzdělávání',
        description: 'Přednášky, workshopy a vzdělávací iniciativy pro adopci technologií.',
        icon: 'mic',
        bullets: ['Konferenční přednášky', 'Technické workshopy', 'Change management', 'Školicí programy pro týmy'],
      },
    ],
  },

  ai: {
    meta: {
      title: 'AI systémy a automatizace — VMCorp',
      description: 'Navrhujeme, stavíme a nasazujeme inteligentní multi-agentní systémy, které automatizují reálné byznys procesy.',
    },
    hero: {
      headline: 'Agentní AI systémy, které pracují za vás',
      subheadline: 'Navrhujeme, stavíme a nasazujeme inteligentní multi-agentní systémy, které automatizují reálné byznys procesy — ne dema, ne prototypy, produkční řešení.',
    },
    what: {
      title: 'Co stavíme',
      text: 'Specializujeme se na proměnu pokročilých AI konceptů v operativní zisk. Naše agentní systémy zvládají komplexní vícekrokové byznys procesy autonomně — od průzkumu a analytiky po akci a reporting.',
      points: [
        { title: 'Open-source first', text: 'Žádný vendor lock-in. Vše patří vám.' },
        { title: 'Váš cloud, vaše data', text: 'Nasazeno ve vaší infrastruktuře, ne v naší.' },
        { title: 'Měřitelné výsledky', text: 'Každý agent má KPI: přesnost, latence, cena za spuštění.' },
        { title: 'Dodávka s ohledem na rizika', text: 'Governance tam, kde chrání hodnotu, ne tam, kde zpomaluje.' },
      ],
    },
    process: {
      title: 'Náš proces',
      steps: [
        { title: 'Discovery', text: 'Zmapujeme vaše operace, identifikujeme opakující se nízkohodnotnou práci a sestavíme matici dopadu a komplexity nastavenou na vaše obchodní cíle.' },
        { title: 'Architektura', text: 'Referenční stacky na míru vaší cloudové strategii — Databricks/Mosaic AI, Azure OpenAI, Vertex AI, LangChain, LangGraph. Volíme to, co sedí, ne to, co je v módě.' },
        { title: 'Proof-of-Value', text: 'Fungující agent nasazený ve vašem cloudu, splňující všechna dohodnutá technická KPI. Reálné výsledky, ne prezentace.' },
        { title: 'Škálování a optimalizace', text: 'Od jednoho agenta k multi-agentní orchestraci. Průběžné vyhodnocování, monitoring přes LangFuse a iterativní zlepšování.' },
      ],
    },
    architecture: {
      label: 'Moderní AI architektura',
      title: 'Referenční stack pro produkční AI',
      subtitle: 'Vícevrstvá architektura pokrývající celý životní cyklus agentního AI systému — od orchestrace po observabilitu.',
      layers: [
        {
          name: 'AI agenti',
          description: 'Autonomní agenti řešící konkrétní byznys úlohy',
          tools: ['Custom Agents', 'RAG Pipelines', 'Tool-use Agents', 'Multi-agent Workflows', 'Python', 'TypeScript', 'FastAPI'],
        },
        {
          name: 'Orchestrace',
          description: 'Řízení, routování a koordinace agentů',
          tools: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'MCP', 'A2A'],
        },
        {
          name: 'Evaluace & Observabilita',
          description: 'Měření kvality, ladění a monitoring v produkci',
          tools: ['LangFuse', 'LangSmith', 'OpenTelemetry', 'Grafana', 'Prometheus'],
        },
        {
          name: 'Infrastruktura',
          description: 'Cloud, compute, storage a deployment',
          tools: ['Azure', 'AWS', 'GCP', 'Databricks', 'Kubernetes', 'Docker'],
        },
      ],
    },
    safety: {
      label: 'Bezpečnost AI systémů',
      title: 'Bezpečné AI systémy od základu',
      subtitle: 'Enterprise AI potřebuje víc než přesnost — potřebuje bezpečnost, auditovatelnost a řízení rizik od prvního dne.',
      principles: [
        {
          title: 'Bezpečná oprávnění agentů',
          description: 'Agenti operují s minimálními oprávněními. Každá akce je autorizována, každý přístup k datům řízený.',
          icon: 'shield',
        },
        {
          title: 'Observabilita & Monitoring',
          description: 'Plná transparentnost rozhodování agentů. Traces, logy a metriky pro každý krok — víte přesně, co agent udělal a proč.',
          icon: 'eye',
        },
        {
          title: 'Data Governance',
          description: 'Data zůstávají ve vašem cloudu. Řízení přístupu, šifrování, audit trail. Soulad s GDPR a regulatorními požadavky.',
          icon: 'database',
        },
        {
          title: 'Risk-Aware nasazení',
          description: 'Postupný rollout, human-in-the-loop kde je třeba, automatické fallbacky. Governance chrání hodnotu, nezpomaluje.',
          icon: 'alert-triangle',
        },
      ],
    },
    cases: {
      label: 'Reference',
      title: 'Vybrané architektonické zakázky',
      subtitle: 'Ukázky reálného dopadu — od návrhu architektury po produkční nasazení.',
      items: [
        {
          industry: 'Finanční služby',
          problem: 'Regulovaná finanční instituce potřebovala automatizovat manuální compliance procesy zpracovávající tisíce dokumentů měsíčně.',
          architecture: 'Multi-agentní systém s RAG pipeline, secure document processing a audit trail. Nasazeno v privátním cloudu s plnou observabilitou.',
          outcome: '70% redukce manuální práce, plný audit trail pro regulátora, nasazení za 6 týdnů.',
        },
        {
          industry: 'Telekomunikace',
          problem: 'Telco operátor hledal způsob, jak zefektivnit zákaznický support a snížit eskalace na L2/L3 týmy.',
          architecture: 'Orchestrovaný agentní systém s přístupem k interním systémům přes MCP, evaluace přes LangFuse, real-time monitoring.',
          outcome: '40% snížení eskalací, průměrná doba řešení zkrácena o 55%, ROI za 3 měsíce.',
        },
        {
          industry: 'Energetika',
          problem: 'Energetická společnost potřebovala konsolidovat data z 12+ legacy systémů pro prediktivní údržbu.',
          architecture: 'Data integration pipeline s agentní vrstvou pro anomaly detection, Kubernetes orchestrace, Grafana dashboardy.',
          outcome: 'Jednotný datový pohled, 30% redukce neplánovaných odstávek, škálovatelná architektura.',
        },
      ],
    },
    audience: {
      title: 'Pro koho je to',
      text: 'Rostoucí firmy a enterprise divize, které chtějí automatizovat opakující se procesy, ale potřebují řešení na míru — ne krabicový SaaS. Organizace ve financích, telekomunikacích, energetice a veřejném sektoru, které potřebují enterprise AI s řádným governance.',
    },
    cta: {
      title: 'Chcete vidět, co agentní AI může udělat pro váš byznys?',
      button: 'Pojďme si promluvit',
    },
  },

  arch: {
    meta: {
      title: 'Architektura a vývoj — VMCorp',
      description: '20+ let řešení náročných inženýrských problémů. Škálovatelná architektura, DevOps, observabilita a modernizace legacy systémů.',
    },
    hero: {
      headline: 'Škálovatelná architektura od lidí, kteří ji stavěli v praxi',
      subheadline: '20+ let řešení náročných inženýrských problémů. Od modernizace legacy systémů po cloud-native projekty na zelené louce.',
    },
    intro: {
      text: 'Navrhujeme a stavíme backend systémy, API a cloudovou infrastrukturu, které škálují. Náš CTO má přes 20 let praktických zkušeností s vysokozátěžovými aplikacemi, komplexními integracemi a enterprise observabilitou.',
      text2: 'Nejen navrhujeme — stavíme. A víme, co se stane, když systémy narazí na reálný provoz, regulatorní požadavky a chaos produkce.',
    },
    sections: [
      {
        title: 'Backend a vývoj API',
        items: [
          'PHP (20+ let, aktivní člen české komunity), Python, TypeScript, Node.js, Next.js, FastAPI',
          'REST API, GraphQL, gRPC — navržená pro dlouhověkost, verzovaná, dokumentovaná',
          'WebSockets, Mercure — real-time komunikace a event-driven architektura',
          'PostgreSQL, MongoDB, Redis, RabbitMQ — volíme podle zátěže, ne podle trendu',
        ],
      },
      {
        title: 'DevOps a cloudová infrastruktura',
        items: [
          'Docker, Kubernetes — produkční orchestrace',
          'Terraform, Ansible — opakovatelné, auditovatelné nasazení',
          'N8N — workflow automatizace a integrace služeb',
          'GitHub Actions, Jenkins — automatizované pipeline s quality gates',
          'AWS, GCP, Azure — multi-cloud zkušenosti, vendor-agnostický přístup',
        ],
      },
      {
        title: 'Observabilita a monitoring',
        intro: 'Toto je naše klíčová doména. Stavíme plnou observabilitu postavenu na OpenTelemetry a open-source stacku — přesně vidíte, co se děje na každé vrstvě, v reálném čase.',
        items: [
          'OpenTelemetry — jednotný standard pro metriky, traces a logy',
          'Grafana, Prometheus — monitoring výkonu a vlastní dashboardy',
          'Loki — agregace logů, rychlé vyhledávání a analýza',
          'Alertmanager — inteligentní alerting a sledování SLO',
          'Distribuovaný tracing napříč mikroslužbami',
        ],
      },
    ],
    legacy: {
      title: 'Legacy systémy a technický dluh',
      text: 'Jsme experti na rozplétání legacy kódu a splácení technického dluhu — ve velkém měřítku. Ať jde o monolit, který potřebuje rozložit, nebo desetiletý systém, který potřebuje modernizovat — viděli jsme to a vyřešili.',
    },
    oss: {
      title: 'Open source a komunita',
      text: 'Jsme aktivní členové české PHP komunity a pravidelní přednášející na meetupech a konferencích. Věříme, že open source posouvá celý obor vpřed, a přispíváme zpět, kdykoli můžeme.',
    },
    cta: {
      title: 'Potřebujete někoho, kdo už váš typ problému řešil?',
      button: 'Ozvěte se nám',
    },
  },

  hucz: {
    meta: {
      title: 'HU-CZ Business Bridge — VMCorp',
      description: 'Přeshraniční obchodní služby mezi Maďarskem a Českou republikou. Vstup na trh, partnerství a technologická spolupráce.',
    },
    hero: {
      headline: 'Most mezi Maďarskem a Českem',
      subheadline: 'Přeshraniční obchodní služby s hlubokými lokálními znalostmi na obou stranách.',
    },
    why: {
      title: 'Proč HU-CZ',
      text: 'Ekonomické vazby mezi Maďarskem a Českou republikou rostou, ale trh zůstává nedostatečně obsloužený. Jazykové bariéry, kulturní rozdíly a roztříštěné sítě kontaktů dělají přeshraniční obchod těžší, než by musel být.',
      text2: 'My tento prostor překlenujeme — s lidmi, kteří znají oba trhy zevnitř.',
    },
    offers: [
      {
        title: 'Vstup na trh',
        text: 'Ať jste maďarská firma vstupující na český trh, nebo česká firma expandující do Maďarska — poskytneme vám lokální znalosti, kontakty a porozumění regulaci, abyste uspěli.',
      },
      {
        title: 'Strategická partnerství',
        text: 'Propojujeme firmy přes hranice — identifikujeme partnery, zprostředkováváme úvodní jednání a podporujeme dlouhodobou spolupráci.',
      },
      {
        title: 'Technologická spolupráce',
        text: 'Společné vývojové projekty, sdílený R&D a technologický transfer mezi maďarskými a českými týmy. My se postaráme o koordinaci, vy se soustřeďte na budování.',
      },
    ],
    ced: {
      title: 'Partnerství s CED',
      text: 'Spolupracujeme s Central European Economic Development Network (CED) — sítí 20+ regionálních kanceláří po celém Maďarsku. To nám dává jedinečný dosah do maďarského podnikatelského ekosystému, od Budapešti po regionální centra.',
    },
    team: {
      title: 'V čele',
      text: 'Tuto službu vede Arpád Velvéthy, seniorní člen našeho týmu s hlubokou expertízou v maďarském podnikatelském prostředí, regulatorním rámci a rozsáhlou sítí kontaktů prostřednictvím CED. V kombinaci s naší českou tech sítí a znalostí startupového ekosystému nabízíme kompletní most mezi oběma trhy.',
    },
    cta: {
      title: 'Chcete expandovat přes HU-CZ koridor?',
      button: 'Pojďme to probrat',
    },
  },

  about: {
    meta: {
      title: 'O nás — VMCorp',
      description: 'Technologie s duší podnikatelů. Náš příběh, tým a hodnoty.',
    },
    hero: {
      headline: 'Technologie s duší podnikatelů',
      subheadline: 'Stavěli jsme startupy, škálovali enterprise systémy a trénovali s nejlepšími. Teď pomáháme ostatním udělat totéž.',
    },
    story: {
      label: 'Náš příběh',
      p1: 'VMCorp založili David Velvéthy a Jan Mikeš v roce 2009. Od té doby jsme postavili a prodali vlastní startupy, dodali enterprise projekty pod přísnou finanční regulací a prošli akcelerátory v Silicon Valley i po celé Evropě.',
      p2: 'Absolvovali jsme program US MAC "Go Global" — čtyři týdny v San Francisku se zkušenými mentory z firem jako Salesforce a Oracle, kteří nás naučili, jak stavět, validovat a škálovat. Prošli jsme programy Google Startup Accelerator, Google Launchpad a řadou dalších tréninkových programů.',
      p3: 'Dnes pomáháme firmám využít technologie k dodání jejich hodnoty — rychle, pragmaticky a s měřitelným dopadem.',
      p4: 'Nestavíme dalšího jednorožce. Pomáháme vám postavit něco, co funguje.',
    },
    team: {
      label: 'Tým',
      david: {
        name: 'David Velvéthy',
        role: 'CEO & Tech-to-Value Architect',
        initials: 'DV',
        email: 'david@vmcorp.cz',
        bio: 'David se specializuje na proměnu pokročilých AI konceptů v operativní zisk. Jako Tech-to-Value Architect propojuje vizi vedení s inženýrskou realitou — identifikuje nízkohodnotnou práci, navrhuje AI/GenAI produkty a řídí dodávku tak, aby riziko a ROI zůstaly v rovnováze.',
        bio2: 'S více než 13 lety zkušeností ve vedoucích pozicích a šesti lety pod evropskou finanční regulací přináší David hluboké porozumění byznys operacím, regulatorní shodě a ziskové technologické strategii. Vedl projekty kryptoměnových custodianů, tokenizační iniciativy pod nadnárodními regulatorními rámci a operace s digitálními aktivy ve střední a východní Evropě.',
        bio3: 'Aktuálně řídí AI architekturu řešení napříč USA, Evropou a Blízkým východem, kde pomohl rozšířit AI praxi z 6 na 60 profesionálů realizujících 20+ souběžných projektů ve financích, telekomunikacích, energetice a veřejném sektoru.',
      },
      jan: {
        name: 'Jan Mikeš',
        role: 'CTO & Architecture Specialist',
        initials: 'JM',
        email: 'jan@vmcorp.cz',
        bio: 'Jan je praktický technolog s více než 20 lety zkušeností se stavbou, škálováním a opravou softwarových systémů. Významný člen české PHP komunity, open source přispěvatel a pravidelný konferenční přednášející — přináší hlubokou expertízu v backend architektuře, DevOps, CI/CD a infrastruktuře.',
        bio2: 'Jeho specialitou je řešení obtížných architektonických problémů — modernizace legacy systémů, technický dluh ve velkém měřítku a stavba vysoce škálovatelných aplikací, které přežijí reálnou zátěž. S hlubokými znalostmi PHP, TypeScript, Python, Next.js a odborností v observabilitě a monitoringu zajišťuje, že vše, co VMCorp staví, je připravené na produkci a udržovatelné.',
        bio3: 'Založil několik startupů a přináší podnikatelské myšlení do každého projektu — pohyb vpřed, dodávka fungujícího softwaru, iterace na základě reálné zpětné vazby.',
      },
      arpad: {
        name: 'Arpád Velvéthy',
        role: 'Senior Partner — HU-CZ Business Services',
        bio: 'Arpád vede přeshraniční obchodní služby VMCorpu mezi Maďarskem a Českou republikou. S hlubokou expertízou v maďarském podnikatelském prostředí, regulatorním rámci a rozsáhlou sítí kontaktů prostřednictvím CED pomáhá firmám zvládnout vstup na trh, budovat strategická partnerství a realizovat technologickou spolupráci přes HU-CZ koridor.',
      },
    },
    values: {
      label: 'Naše hodnoty',
      items: [
        { title: 'Pragmatismus', text: 'Dodáváme fungující software. Teorie je užitečná. Dodávka je to, na čem záleží.' },
        { title: 'Open Source', text: 'Věříme, že otevřené komunity posouvají celý obor vpřed. Přispíváme, přednášíme, sdílíme.' },
        { title: 'Transparentnost', text: 'Žádné skryté agendy, žádná mlha z buzzwordů. Komunikujeme přímo a upřímně.' },
        { title: 'Zákaznický přístup', text: '100% spokojenost zákazníka není slogan — je to naše skutečné KPI. Dodáváme maximální hodnotu v co nejkratším čase.' },
      ],
    },
    community: {
      title: 'Komunita a přednášky',
      text: 'Pravidelně přednášíme na komunitních meetupech a konferencích. Sdílíme know-how, protože věříme, že otevřená komunita posouvá celý obor vpřed. Od PHP architektury po agentní AI systémy přinášíme na každou přednášku praktické zkušenosti.',
      orgs: [
        { name: 'Péhápkaři', url: 'https://pehapkari.cz', description: 'Česká PHP komunita — přednášky, meetupy a sdílení zkušeností.', logo: '/logos/pehapkari.svg' },
        { name: 'AI4DEV', url: 'https://ai4dev.cz', description: 'Komunita zaměřená na AI v praxi pro vývojáře.', logo: '/logos/ai4dev.svg' },
        { name: 'TechMeetup', url: 'https://techmeetup.cz', description: 'Pravidelné technologické meetupy napříč obory.', logo: '/logos/techmeetup.png' },
      ],
    },
    cta: {
      title: 'Chcete vědět víc o tom, kdo jsme?',
      button: 'Ozvěte se nám',
    },
  },

  contact: {
    meta: {
      title: 'Kontakt — VMCorp',
      description: 'Pojďme si promluvit. Ať už máte projekt, nebo jen nápad — rádi si popovídáme.',
    },
    hero: {
      headline: 'Pojďme si promluvit',
      subheadline: 'Ať už máte konkrétní projekt, nebo jen nápad — rádi si popovídáme.',
    },
    form: {
      name: 'Jméno',
      email: 'E-mail',
      company: 'Firma',
      message: 'S čím vám můžeme pomoci?',
      submit: 'Odeslat zprávu',
      sending: 'Odesílám...',
      success: 'Zpráva odeslána!',
      successText: 'Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.',
      error: 'Něco se pokazilo',
      errorText: 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo nás kontaktujte přímo.',
    },
    company: {
      name: 'Velvethy & Mikes Corporation s.r.o.',
      address: 'Francouzská 299/98',
      city: 'Vršovice, 101 00 Praha 10',
      country: 'Česká republika',
      ic: '28994124',
      dic: 'CZ28994124',
    },
    alt: {
      title: 'Preferujete hovor?',
      text: 'Domluvte si schůzku přímo.',
    },
  },

  footer: {
    tagline: 'Pomáháme firmám dodávat hodnotu pomocí technologií.',
    services: 'Služby',
    company: 'Firma',
    companyName: 'Velvethy & Mikes Corporation s.r.o.',
    ic: '28994124',
    dic: 'CZ28994124',
    address: 'Francouzská 299/98, Praha 10',
  },
};
