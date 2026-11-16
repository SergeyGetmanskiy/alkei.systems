import type { SiteContent } from './types';

export const en: SiteContent = {
  lang: 'en',
  locale: 'en_US',
  languageLabel: 'English',

  common: {
    siteName: 'Alkei.Systems',
    descriptor: 'DIGITAL BUSINESS & PRODUCT DEVELOPMENT',
    languageSwitcher: {
      label: 'Site language',
      current: 'English',
    },
    nav: {
      ariaLabel: 'Main navigation',
      home: { label: 'Home', path: '' },
      mentor: { label: 'MENTOR', path: 'mentor' },
      startup: { label: 'STARTUP', path: 'startup' },
      product: { label: 'PRODUCT', path: 'product' },
      experience: { label: 'Experience & projects', path: 'experience' },
      partners: { label: 'For partners', path: 'partners' },
      about: { label: 'About the company', path: 'about' },
    },
    menu: {
      open: 'Open menu',
      close: 'Close menu',
      title: 'Navigation',
    },
    coreCta: 'Discuss a project',
    skipToContent: 'Skip to content',
    readMore: 'Learn more',
    contact: {
      title: 'Contacts',
      lead: 'Let us discuss your task. Choose a convenient channel — we will reply in a messenger or by email.',
      dialogTitle: 'Discuss a project',
      dialogText:
        'Choose a convenient channel. The messenger or email client will open with a prepared message.',
      proposedMessage: 'Prepared message',
      copy: 'Copy text',
      copied: 'Copied',
      open: 'Open',
      close: 'Close',
      channels: {
        telegram: {
          label: 'Telegram',
          value: '@alkeiamanzholov',
          hint: 'The fastest way to start a conversation',
        },
        whatsapp: {
          label: 'WhatsApp',
          value: '+7 702 836 37 77',
          hint: 'The message will open in WhatsApp',
        },
        email: {
          label: 'Email',
          value: 'Alkey8705@gmail.com',
          hint: 'For detailed requests and documents',
        },
      },
    },
    footer: {
      tagline:
        'Growing business through management decisions, a product approach and technology.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      contactsTitle: 'Contacts',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
      legal:
        'The website does not collect enquiries through its own forms or database. All contact happens directly via Telegram, WhatsApp or email.',
    },
    ctaMessages: {
      default: 'Hello! I would like to discuss a task with Alkei.Systems.',
      mentor: 'Hello! I would like to discuss mentoring.',
      startup: 'Hello! I would like to discuss product work for a startup.',
      product: 'Hello! I would like to discuss software development or evolution.',
      partners: 'Hello! I would like to discuss partnership with Alkei.Systems.',
    },
    homeLink: 'Back to home',
  },

  home: {
    meta: {
      title: 'Alkei.Systems — business solutions, not technology for its own sake',
      description:
        'Alkei.Systems solves business tasks by combining management experience, a product approach and technical delivery. Three independent tracks: MENTOR, STARTUP and PRODUCT.',
    },
    hero: {
      eyebrow: 'DIGITAL BUSINESS & PRODUCT DEVELOPMENT',
      struckPhrase: 'We build any software you ask for',
      finalPhrase:
        'We solve business tasks by combining technology, a product approach and management experience',
      subtitle: 'From management decisions to building and growing digital products',
      cta: 'Discuss a task',
    },
    intro: {
      title: 'Not technology for its own sake. Solutions for business.',
      paragraphs: [
        'Alkei.Systems helps owners and companies solve business growth challenges. We combine management expertise, a product approach and technical delivery.',
        'We start with understanding the task, not with selling a particular tool. If the problem is better solved by changing a process or a management approach, we will say so directly.',
      ],
    },
    directions: {
      title: 'Three tracks of work',
      lead: 'The tracks are independent and can reinforce each other depending on the task.',
      items: [
        {
          id: 'mentor',
          tag: 'MENTOR',
          lead: 'Owner mindset. Clarity of decisions. Deliberate forward movement.',
          text: 'Supporting owners and managers in exploring the business, personal goals and management decisions.',
          link: 'More about MENTOR',
        },
        {
          id: 'product',
          tag: 'PRODUCT',
          lead: 'Business tasks. Digital solutions. Technical delivery.',
          text: 'Designing, building and evolving software for business.',
          link: 'More about PRODUCT',
        },
        {
          id: 'startup',
          tag: 'STARTUP',
          lead: 'Product strategy. Management. Launch and growth.',
          text: 'An external CPO / Product Owner function for startups at different stages.',
          link: 'More about STARTUP',
        },
      ],
    },
    method: {
      title: 'Understand the task → Find a solution → Bring it to life',
      lead: 'Three consecutive stages that structure the work.',
      steps: [
        {
          title: 'Understand the task',
          text: 'Explore the context, goals, processes, constraints and initial assumptions.',
        },
        {
          title: 'Find a solution',
          text: 'Define the approach, priorities, architecture or strategy.',
        },
        {
          title: 'Bring it to life',
          text: 'Organise delivery, verify the result and adjust the direction if needed.',
        },
      ],
    },
    founder: {
      title: 'Alkei Amanzholov',
      subtitle: 'Founder of Alkei.Systems.',
      photoAlt: 'Alkei Amanzholov, founder of Alkei.Systems',
      paragraphs: [
        '11 years in IT and more than 20 projects — from development and product management to founding my own startups and businesses.',
        'I have worked with digital products from many sides: as a contributor, a manager, a product specialist and an entrepreneur.',
        'Today I bring that experience together in Alkei.Systems — the company through which we help businesses find solutions and bring them to life.',
      ],
      link: 'More about the experience',
    },
    projects: {
      title: 'Experience & projects',
      lead: 'Individual project pages describing the context, the task and the role.',
      items: [
        {
          id: 'instroy',
          name: 'InStroy',
          summary:
            'Project page. The public description of the product, the role and the results is being agreed with the project team.',
          link: 'Open the project page',
        },
        {
          id: 'twelveai',
          name: 'TwelveAI',
          summary:
            'Project page. The public description of the product, the role and the results is being agreed with the project team.',
          link: 'Open the project page',
        },
      ],
    },
    finalCta: {
      title: 'Have a task that needs solving?',
      text: 'Tell us what you want to change in your business or product. We will discuss the situation and define which format of work will be most useful.',
      button: 'Discuss a project',
    },
  },

  mentor: {
    meta: {
      title: 'MENTOR — mentoring for owners and executives | Alkei.Systems',
      description:
        'I support owners and executives in exploring the business, personal goals and management decisions: a map of the situation, navigation rules, movement and adjustment.',
    },
    hero: {
      title: 'When an owner needs clarity and a direction to move in.',
      subtitle:
        'I support owners and executives in exploring the business, personal goals and management decisions. Together we build a coherent picture of the situation and map a path to the desired future.',
      cta: 'Discuss mentoring',
    },
    essence: {
      title: 'A business starts with the person who creates it.',
      paragraphs: [
        'Before building business growth plans, it is important to understand which future the owner wants to build.',
        'What place does the business hold in their life? How far do they want to scale the company? Do they aim for an autonomous business or do they want to stay personally involved in operations? What are their ambitions, values and idea of the desired lifestyle?',
        'The answers to these questions shape not only the strategy, but the very business model that makes sense to build.',
      ],
    },
    approach: {
      title: 'How I work',
      items: [
        {
          title: 'Coaching approach',
          text: 'I help the client explore the situation independently, draw the necessary data from their own experience, notice contradictions and form conclusions.',
        },
        {
          title: 'Expert involvement',
          text: 'When searching for an answer alone becomes unreasonably slow, or the client lacks specific knowledge, I bring in my own experience and propose hypotheses, options and tools.',
        },
        {
          title: 'Joint analytical work',
          text: 'Together we explore the business, the market, resources, constraints and interconnections. We build a shared picture and test the conclusions.',
        },
      ],
      note: 'MENTOR is not psychotherapy. We work with motivation, mindset, values, personal constraints and internal contradictions, but I do not promise therapeutic outcomes.',
    },
    map: {
      title: 'The "Map and Navigation" method',
      lead: 'The central element of the work: from a map of the situation to movement rules and course correction.',
      steps: [
        {
          title: '1. Building the map',
          text: 'We explore the owner, their vision of the future, the current situation, the business, the market, resources, constraints and key interconnections.',
        },
        {
          title: '2. Navigation rules',
          text: 'We define reference points, priorities, decision criteria, goals, a roadmap and checkpoints.',
        },
        {
          title: '3. Movement and adjustment',
          text: 'We execute the plan, analyse feedback and deviations, test hypotheses and adjust the course when needed.',
        },
      ],
    },
    topics: {
      title: 'What we work on',
      items: [
        'Strategy and direction of business growth.',
        'The owner\u2019s personal ambitions and desired future.',
        'Business autonomy and the owner\u2019s role.',
        'Difficult management decisions.',
        'Contradictions between goals, resources and actions.',
        'Priorities, constraints and risks.',
        'Moving from reflection to a consistent plan.',
        'Changes in the leader\u2019s role as the company grows.',
      ],
    },
    outcomes: {
      title: 'What changes as a result',
      items: [
        'A more coherent understanding of your own business.',
        'A stronger ability to see interconnections.',
        'Improved systemic, analytical and critical thinking.',
        'Clearer grounds for management decisions.',
        'Alignment between business goals and your personal vision of the future.',
        'An action map and reference points for further movement.',
      ],
      statement:
        'I do not promise that you will become a great business thinker or strategist. But if we work well together, your ability to see the business as a system, analyse the situation and make meaningful decisions will develop. Even a small change in that ability matters when it comes to a business owner.',
    },
    formats: {
      title: 'Formats of work',
      lead: 'Two formats of mentoring.',
      items: [
        {
          name: 'BASE',
          price: '250 000 ₸ / month',
          description: 'Mentoring for owners and executives.',
        },
        {
          name: 'PLUS',
          price: '400 000 – 450 000 ₸ / month',
          description: 'Mentoring in an extended format.',
        },
      ],
      note: 'The exact scope and differences between the formats are agreed individually before we start.',
    },
    boundaries: {
      title: 'Boundaries of responsibility',
      items: [
        'I do not make decisions on the owner\u2019s behalf and I do not take on automatic operational management of the company.',
        'The client takes part in exploring the situation, makes the decisions and is responsible for executing them.',
        'MENTOR does not replace a CEO, COO, lawyer, accountant, financial consultant or psychologist.',
      ],
    },
    combination: {
      title: 'Combining with other services',
      text: 'If during the mentoring work it becomes clear that implementing the decisions requires a separate product function or software development, I can bring in STARTUP or the PRODUCT team. These are independent tracks with separately agreed terms and responsibility.',
    },
    finalCta: {
      title: 'Let us discuss mentoring',
      text: 'Tell us about the situation in your business and the clarity you want to gain. We will define whether the mentoring format fits you.',
      button: 'Discuss mentoring',
    },
  },

  startup: {
    meta: {
      title: 'STARTUP — an external product function for startups | Alkei.Systems',
      description:
        'An external CPO / Product Owner function for startups: market research, product strategy, launch organisation, product development management and work with the team.',
    },
    hero: {
      title: 'From idea to launch and product growth.',
      subtitle:
        'I take on the agreed product and management function of a startup: market research, product strategy, launch organisation, product development management and work with the team.',
      cta: 'Discuss a startup',
    },
    essence: {
      title: 'You do not have to run product work on your own.',
      paragraphs: [
        'I join the startup as an external CPO / Product Owner and lead an agreed scope of work towards defined goals.',
        'This can be a project at the idea stage, a product preparing for launch, or an existing startup that needs systematic product management.',
        'I immerse myself in the context, research the market and the product, help define priorities, organise the work and take part in decision-making.',
      ],
    },
    directions: {
      title: 'Main areas of work',
      lead: 'Five blocks that make up an agreed scope of work.',
      items: [
        {
          title: 'Market Research',
          text: 'Researching the market, segments, target audience, competitors, existing offerings, needs and market opportunities. The scope of research depends on the startup stage and tasks. A full market research effort can involve substantial independent work and is agreed separately.',
        },
        {
          title: 'Product Strategy',
          text: 'Shaping the product vision, strategy, business model, priorities and development roadmap.',
        },
        {
          title: 'Product Management',
          text: 'Working with user feedback, product analytics, user scenarios, requirements and product evolution.',
        },
        {
          title: 'Launch Strategy & Project Management',
          text: 'Preparing and organising the launch, planning the work, managing dependencies, coordinating the team, tracking tasks and agreed outcomes.',
        },
        {
          title: 'Team & Delivery Management',
          text: 'Working with the client\u2019s team, our own Alkei.Systems team or a mixed group of specialists. Organising the movement of the product from decision to delivery.',
        },
      ],
      salesNote: 'Marketing and sales can be connected separately upon agreement.',
    },
    stages: {
      title: 'At which stages I join',
      lead: 'Two scenarios: building a product from scratch and growing an existing product.',
      items: [
        {
          title: 'From idea to launch',
          items: [
            'Exploring the idea and the market opportunity.',
            'Market research.',
            'Shaping the product vision.',
            'Working out the business model.',
            'Product design.',
            'Defining the MVP and priorities.',
            'Organising development.',
            'Preparing and managing the launch.',
          ],
        },
        {
          title: 'Growing an existing product',
          items: [
            'Analysing the current state of the product.',
            'Studying feedback and product data.',
            'Revisiting strategy and priorities.',
            'Evolving the functionality.',
            'Organising product and project work.',
            'Coordinating the team.',
            'Managing further development.',
          ],
        },
      ],
    },
    teamFormats: {
      title: 'Team formats',
      items: [
        {
          title: 'I work with your team',
          text: 'I join as an external CPO / Product Owner or as an autonomous lead of an agreed area. I work with your existing developers, designers and other specialists.',
        },
        {
          title: 'I build a team for the project',
          text: 'I select and organise specialists from Alkei.Systems and engaged contractors. If development by Alkei.Systems is required, it is arranged as a separate PRODUCT scope.',
        },
      ],
      note: 'A mixed option is also possible: Alkei.Systems specialists, your team and engaged contractors.',
    },
    principles: {
      title: 'Principles of cooperation',
      items: [
        {
          title: 'Radical honesty and openness',
          text: 'I do not hide problems, risks, mistakes or doubts. We must be able to discuss the real state of affairs.',
        },
        {
          title: 'I run the project as my own',
          text: 'I immerse myself in the context, think about the consequences of decisions, notice problems myself and propose options. This is a principle of involvement, not a transfer of entrepreneurial ownership or full responsibility for the business to me.',
        },
        {
          title: 'Clear authority',
          text: 'We define the boundaries of competence, areas of responsibility and the degree of my autonomy. We agree which decisions I make on my own, which I discuss, and which require the founder\u2019s approval.',
        },
        {
          title: 'Focus on goals',
          text: 'I do not sell hours of presence. I lead an agreed scope of work towards agreed goals.',
        },
        {
          title: 'Shared principles',
          text: 'Before we start, we discuss and fix the principles of the startup and of working together, the priorities and the decision-making logic.',
        },
      ],
    },
    model: {
      title: 'Model of interaction',
      paragraphs: [
        'An external CPO included in the management team, or an autonomous head of the product area.',
        'The format depends on the maturity of the startup, the composition of the team, the needs of the project and the agreements with the founder.',
        'The founder keeps responsibility for the business and the final key entrepreneurial decisions.',
      ],
    },
    boundaries: {
      title: 'Boundaries of responsibility',
      lead: 'I do not take on managing the startup outside the agreed scope of work.',
      items: [
        'Company finances and the disposal of funds remain with the founder.',
        'Legal obligations and signing contracts remain with the authorised persons of the company.',
        'Marketing and sales are connected separately.',
        'Technical delivery depends on who performs the development.',
        'Authority and responsibility are fixed before the work starts.',
      ],
    },
    combination: {
      title: 'Combining with other services',
      text: 'If the startup needs software development, I can bring in the PRODUCT team. If the founder needs to work separately on their own management decisions and strategic vision, combining with MENTOR is possible. These are independent services, not a mandatory part of STARTUP.',
    },
    terms: {
      title: 'Format and terms',
      text: 'Cost, scope, workload, authority, team composition and remuneration are defined individually.',
      note: 'No fixed tariff is published: terms depend on the project stage, the tasks and the format of involvement.',
    },
    finalCta: {
      title: 'Let us discuss the startup',
      text: 'Tell us about the product, the stage and the task. We will define how much product work makes sense to take on and in which format.',
      button: 'Discuss a startup',
    },
  },

  product: {
    meta: {
      title: 'PRODUCT — software design and development | Alkei.Systems',
      description:
        'We design and build software for business: from process analysis and architecture design to delivery, launch and ongoing system evolution.',
    },
    hero: {
      title: 'When a digital solution needs to be created or evolved.',
      subtitle:
        'Software design and development for business — from process analysis and architecture design to implementation and the evolution of the system.',
      cta: 'Discuss a project',
    },
    position: {
      title: 'We do not start with development. We start with understanding what the business actually needs.',
      paragraphs: [
        'Before writing code we understand the task, study the process, identify constraints and test the initial assumptions.',
        'We do not automate chaos. First we define what is truly necessary, what can be simplified and which processes are worth automating.',
        'If the initial idea is not the optimal solution, we propose alternatives. If the task can be solved without software, we will say so directly.',
      ],
    },
    solutionTypes: {
      title: 'Types of solutions',
      lead: 'We design and evolve different classes of systems — from commercial products to internal company tools.',
      items: [
        'CRM and ERP',
        'Web platforms',
        'Customer portals',
        'Mobile applications',
        'Integrations',
        'Business process automation',
        'Analytics and BI systems',
        'Evolution of existing software',
      ],
    },
    process: {
      title: 'How we work',
      lead: 'Eight stages — from immersion in the task to support and evolution.',
      steps: [
        'Immersion in the business task and the process.',
        'Collecting information and requirements.',
        'Defining the boundaries of the solution and the expected effect.',
        'Designing the logic and the architecture.',
        'Validating user scenarios and the structure.',
        'Development.',
        'Testing and launch.',
        'Support and further evolution.',
      ],
    },
    methodologies: {
      title: 'Design and development methodologies',
      subtitle:
        'In our work we use proprietary methodologies by Alkei Amanzholov. Each one is designed for its own type of task.',
      items: [
        {
          id: 'sdf',
          name: 'SDF',
          fullName: 'Startup Development Framework',
          purpose:
            'A methodology for designing commercial products and startups. It helps move consistently from the product vision to a well-developed concept and prototype.',
          details: [
            'Product Vision',
            'Mission',
            'Business Canvas',
            'Customer portrait: social, user, situational and emotional sides',
            'CJM — Customer Journey Map',
            'Service Blueprint',
            'User Stories',
            'User Flow',
            'Sketch',
            'Mockup',
            'Wireframe',
            'Prototype',
            'SDF does not include full market research. It covers the customer portrait, CJM and Service Blueprint, but these tools do not replace a full Market Research effort.',
          ],
        },
        {
          id: 'dpe',
          name: 'DPE',
          fullName: 'Digital Process Engineering',
          purpose:
            'A methodology for designing and optimising digital processes and internal company products.',
          details: [
            'Used to research internal processes, define the logic of how they work and design digital solutions.',
            'Helps make processes clearer, more manageable and more efficient.',
          ],
        },
        {
          id: 'odf',
          name: 'ODF',
          fullName: 'Operational Data Flow',
          purpose:
            'A methodology for designing data flows and the systems that work with them.',
          details: [
            'Covers the collection, structuring, processing and visualisation of data.',
            'Creates an information foundation for management decisions.',
          ],
        },
      ],
      disclaimer:
        'SDF, DPE and ODF are applied in different contexts — we do not present any of them as the universal methodology for every project.',
    },
    marketResearch: {
      title: 'Market Research: the boundaries of the service',
      paragraphs: [
        'When creating a commercial product for external users, we rely on the available market data and the information about the target audience and competitors provided by the client.',
        'If an independent full market research effort is required, its scope, stages, timelines and cost are discussed separately.',
        'This is a standalone research workstream that can be connected to PRODUCT or STARTUP depending on the task.',
      ],
    },
    engineering: {
      title: 'Engineering principles',
      lead: 'Four principles that shape how we work with code and architecture.',
      items: [
        {
          title: 'Modern and justified technology',
          text: 'We select a current technology stack for the specific task. We do not use technology for the sake of fashion and we do not make the architecture more complex than necessary.',
        },
        {
          title: 'Maintainable code and documentation',
          text: 'We use consistent development principles, logical layers and documentation of the architecture, modules and integrations. The system must not critically depend on its original authors.',
        },
        {
          title: 'Transparency of technical decisions',
          text: 'We explain to the client why particular technologies, architecture and tools were chosen, which alternatives were considered and what consequences the decisions have.',
        },
        {
          title: 'Designing for evolution',
          text: 'We account for the likely expansion of features and the growth of data, users, processes and integrations. We do not build everything in advance, but we do not create artificial obstacles for future development either.',
        },
      ],
    },
    formats: {
      title: 'Formats of cooperation',
      lead: 'Two formats of working on a product.',
      items: [
        {
          title: 'End-to-End Development',
          text: 'A full development cycle within an agreed scope: analysis, design, UX/UI, development, testing and launch.',
        },
        {
          title: 'Modular Development',
          text: 'Joining specific stages or functional blocks: analysis, design, UX/UI, frontend, backend, QA, DevOps, integrations or support.',
        },
      ],
    },
    commercialModel: {
      title: 'Commercial model',
      items: [
        'The main model is Fixed Price after diagnostics and estimation of an agreed scope.',
        'For each stage we define outcomes, timelines and acceptance criteria.',
        'Any change to the agreed scope is estimated separately.',
        'Support can be provided hourly or on a monthly basis.',
        'If hidden technical problems affecting timelines and scope are discovered, the terms are revised after discussion.',
      ],
    },
    boundaries: {
      title: 'Boundaries of responsibility',
      items: [
        'We are responsible for the agreed technical scope and the quality of delivery.',
        'We do not guarantee specific revenue, payback or commercial success. The actual effect also depends on adoption, product usage, the market and the actions of the business itself.',
        'When joining existing third-party code, a technical audit is required first. The decision about cooperation is made based on its results.',
      ],
    },
    combination: {
      title: 'Combining with other services',
      text: 'If the project needs not only development but ongoing product management, STARTUP can be connected. If the owner needs to work through the business task and strategic decisions, combining with MENTOR is possible.',
    },
    finalCta: {
      title: 'Let us discuss development',
      text: 'Tell us about the task and the current state of the solution. We will define the scope, the approach and the format of work.',
      button: 'Discuss development',
    },
  },

  experience: {
    meta: {
      title: 'Experience & projects | Alkei.Systems',
      description:
        'Practical experience of Alkei Amanzholov: 11 years in IT and involvement in more than 20 projects. Individual pages for the InStroy and TwelveAI projects.',
    },
    hero: {
      title: 'Experience & projects',
      subtitle:
        'Practical experience that can be presented publicly: roles, areas of involvement and individual project pages.',
    },
    founderBrief: {
      title: 'Experience of the founder',
      paragraphs: [
        '11 years in IT and more than 20 projects — from development and product management to founding my own startups and businesses.',
        'I have worked with digital products from many sides: as a contributor, a manager, a product specialist and an entrepreneur.',
        'Today this experience is applied in the work of Alkei.Systems — in mentoring, product work with startups and software development.',
      ],
    },
    projects: {
      title: 'Projects',
      lead: 'Each project has its own page with a consistent case structure.',
      items: [
        {
          id: 'instroy',
          name: 'InStroy',
          summary:
            'Individual project page. The public description of the product, the role and the results is being agreed with the project team.',
          role: 'Role and area of involvement: only confirmed information is published.',
          link: 'Open the project page',
        },
        {
          id: 'twelveai',
          name: 'TwelveAI',
          summary:
            'Individual project page. The public description of the product, the role and the results is being agreed with the project team.',
          role: 'Role and area of involvement: only confirmed information is published.',
          link: 'Open the project page',
        },
      ],
    },
    competence: {
      title: 'Competencies',
      lead: 'Areas where practical experience has been gained.',
      items: [
        'Product strategy and product management.',
        'Organising product launches and market entry.',
        'Software design and development.',
        'Project and team management.',
        'Product analytics and working with data.',
        'Automation and integration of business processes.',
        'Mentoring work with owners and executives.',
        'Entrepreneurial projects and own products.',
      ],
    },
    finalCta: {
      title: 'Need experience for your task?',
      text: 'Tell us what task you are facing. We will define the format of work and the team composition.',
      button: 'Discuss a project',
    },
  },

  cases: {
    instroy: {
      meta: {
        title: 'InStroy — project page | Alkei.Systems',
        description:
          'InStroy: project context, the initial task, the role of the participant and the work performed. The public description is being agreed with the project team.',
      },
      name: 'InStroy',
      kind: 'Individual project page',
      hero: {
        title: 'InStroy',
        subtitle:
          'Project page. The public description of the product, the role and the results is being agreed with the project team.',
        cta: 'Discuss a project',
      },
      status: {
        badge: 'Information being confirmed',
        text: 'The public description of the project, the role and the materials cleared for publication are being agreed. We do not publish unconfirmed information about projects and we do not attribute roles that are not confirmed.',
      },
      sectionsTitle: 'Case structure',
      sections: [
        {
          id: 'context',
          title: 'Project context',
          pending: 'The material is being prepared for publication after agreement with the project team.',
        },
        {
          id: 'task',
          title: 'Initial task',
          pending: 'The material is being prepared for publication after agreement with the project team.',
        },
        {
          id: 'role',
          title: 'Role of Alkei / Alkei.Systems',
          pending: 'The role will be stated in the exact wording confirmed by the project team.',
        },
        {
          id: 'done',
          title: 'What was done',
          pending: 'The material is being prepared for publication after agreement with the project team.',
        },
        {
          id: 'result',
          title: 'Result or current state',
          pending: 'We publish only confirmed results and statements.',
        },
        {
          id: 'competencies',
          title: 'Competencies applied',
          pending: 'Competencies will be listed after the scope of involvement is confirmed.',
        },
      ],
      notice:
        'Once the information is confirmed, the page will be completed with factual content. Unconfirmed details about the project are not published.',
      backLink: 'Back to experience and projects',
      finalCta: {
        title: 'Discuss a project',
        text: 'Tell us about your task — we will discuss which format of work will be most useful.',
        button: 'Discuss a project',
      },
    },
    twelveai: {
      meta: {
        title: 'TwelveAI — project page | Alkei.Systems',
        description:
          'TwelveAI: project context, the initial task, the role of the participant and the work performed. The public description is being agreed with the project team.',
      },
      name: 'TwelveAI',
      kind: 'Individual project page',
      hero: {
        title: 'TwelveAI',
        subtitle:
          'Project page. The public description of the product, the role and the results is being agreed with the project team.',
        cta: 'Discuss a project',
      },
      status: {
        badge: 'Information being confirmed',
        text: 'The public description of the project and the exact wording of the role are being agreed. Ownership or co-founder status is not published without direct confirmation.',
      },
      sectionsTitle: 'Case structure',
      sections: [
        {
          id: 'context',
          title: 'Project context',
          pending: 'The material is being prepared for publication after agreement with the project team.',
        },
        {
          id: 'task',
          title: 'Initial task',
          pending: 'The material is being prepared for publication after agreement with the project team.',
        },
        {
          id: 'role',
          title: 'Role of Alkei / Alkei.Systems',
          pending: 'The role will be stated in the exact wording confirmed by the project team.',
        },
        {
          id: 'done',
          title: 'What was done',
          pending: 'The material is being prepared for publication after agreement with the project team.',
        },
        {
          id: 'result',
          title: 'Result or current state',
          pending: 'We publish only confirmed results and statements.',
        },
        {
          id: 'competencies',
          title: 'Competencies applied',
          pending: 'Competencies will be listed after the scope of involvement is confirmed.',
        },
      ],
      notice:
        'Once the information is confirmed, the page will be completed with factual content. Unconfirmed details about the project and the role are not published.',
      backLink: 'Back to experience and projects',
      finalCta: {
        title: 'Discuss a project',
        text: 'Tell us about your task — we will discuss which format of work will be most useful.',
        button: 'Discuss a project',
      },
    },
  },

  partners: {
    meta: {
      title: 'For partners — cooperation with Alkei.Systems',
      description:
        'Alkei.Systems combines management, product and technical competencies. For specific tasks we build a team of in-house and engaged specialists.',
    },
    hero: {
      title: 'For partners',
      subtitle:
        'A page for potential partners, specialists and companies with whom joint project delivery is possible.',
      cta: 'Discuss partnership',
    },
    idea: {
      title: 'How we work with partners',
      text: 'Alkei.Systems combines management, product and technical competencies. For specific tasks we build a team of our own and engaged specialists.',
    },
    blocks: {
      title: 'Main blocks',
      items: [
        {
          title: 'Who we are open to cooperating with',
          text: 'Companies and specialists with whom joint project delivery is possible in the MENTOR, STARTUP and PRODUCT tracks.',
        },
        {
          title: 'In which formats we interact',
          text: 'Joint project delivery, joining specific stages or functional blocks, engaging specialists for an agreed scope of work.',
        },
        {
          title: 'How the team is formed',
          text: 'The team is assembled from Alkei.Systems specialists, the client\u2019s team and engaged contractors. The composition and roles are determined by the tasks of the project.',
        },
        {
          title: 'Transparency and distribution of responsibility',
          text: 'The scope of work, roles, authority and responsibility are fixed before the work starts. Any change to the agreed scope is discussed separately.',
        },
      ],
    },
    limits: {
      title: 'What this page does not offer',
      text: 'We do not create a job board, a personal account or a partner registration form. Alkei.Systems is a compact expert and management company that is accountable for the result to the client, not a set of contractors.',
    },
    finalCta: {
      title: 'Let us discuss partnership',
      text: 'Tell us about your expertise and your interest in joint projects. We will discuss formats and terms of interaction.',
      button: 'Discuss partnership',
    },
  },

  about: {
    meta: {
      title: 'About Alkei.Systems',
      description:
        'Alkei.Systems is a compact expert and management company: what it is, why it combines MENTOR, PRODUCT and STARTUP, its approach to business tasks, the founder and the working principles.',
    },
    hero: {
      title: 'About the company',
      subtitle:
        'Alkei.Systems — growing business through management decisions, a product approach and technology.',
    },
    what: {
      title: 'What Alkei.Systems is',
      paragraphs: [
        'Alkei.Systems is a compact expert and management company that solves business tasks through management decisions, a product approach and technology.',
        'Depending on the task, the founder, our own team and engaged specialists join the work.',
        'This is not an IT outsourcing company, not a catalogue of developers and not an aggregator of contractors.',
      ],
    },
    whyThree: {
      title: 'Why three tracks',
      lead: 'The tracks answer different types of tasks and speak in different voices.',
      items: [
        {
          title: 'MENTOR',
          text: 'The subject is the owner, their vision, mindset and management decisions. The founder leads the engagement.',
        },
        {
          title: 'STARTUP',
          text: 'The subject is the product function and the growth of the startup. The founder leads the product work.',
        },
        {
          title: 'PRODUCT',
          text: 'The subject is software and technical delivery. Here the Alkei.Systems team speaks.',
        },
      ],
    },
    approach: {
      title: 'Approach to business tasks',
      paragraphs: [
        'We do not propose technology for its own sake. First we understand the business task, then we define the appropriate way to solve it.',
        'Sometimes it is software, sometimes it is a change of process or management approach. We speak with the client in the language of tasks, decisions, responsibility and results.',
      ],
    },
    founder: {
      title: 'Alkei Amanzholov',
      subtitle: 'Founder of Alkei.Systems.',
      photoAlt: 'Alkei Amanzholov, founder of Alkei.Systems',
      paragraphs: [
        '11 years in IT and more than 20 projects — from development and product management to founding my own startups and businesses.',
        'I have worked with digital products from many sides: as a contributor, a manager, a product specialist and an entrepreneur.',
        'Today I bring that experience together in Alkei.Systems — the company through which we help businesses find solutions and bring them to life.',
      ],
      link: 'More about the experience',
    },
    experience: {
      title: 'Experience',
      text: 'The founder\u2019s practical experience underpins all three tracks: from development and product management to founding his own startups and businesses.',
      stats: [
        { value: '11 years', label: 'of experience in IT' },
        { value: '20+', label: 'projects' },
        { value: '3', label: 'tracks of work' },
      ],
    },
    philosophy: {
      title: 'Working philosophy and principles of responsibility',
      lead: 'The principles that shape how we work with clients and partners.',
      items: [
        {
          title: 'Not technology for its own sake',
          text: 'First we understand the business task, then we define the way to solve it. If the task is better solved without software, we will say so.',
        },
        {
          title: 'The language of business and decisions',
          text: 'We talk about tasks, decisions, responsibility and results instead of overloading communication with technical terms.',
        },
        {
          title: 'Honesty and openness',
          text: 'We do not hide problems, risks, mistakes or doubts. We discuss the real state of affairs.',
        },
        {
          title: 'Transparent boundaries of responsibility',
          text: 'Scope, authority and responsibility are fixed before the work starts. We do not promise what does not depend on us.',
        },
        {
          title: 'A compact team instead of hierarchy',
          text: 'We are not a large holding or a group of companies: the structure stays compact and the participants are determined by the task.',
        },
      ],
    },
    finalCta: {
      title: 'Tell us about your task',
      text: 'We will discuss the situation and define which format of work will be most useful — mentoring, product work or development.',
      button: 'Discuss a project',
    },
  },

  privacy: {
    meta: {
      title: 'Privacy Policy | Alkei.Systems',
      description:
        'What data is processed when using the Alkei.Systems website: hosting technical logs, the absence of contact forms and an in-house database, and direct contact via messengers and email.',
    },
    title: 'Privacy Policy',
    updated: 'Revision: November 2026.',
    intro:
      'This Policy describes how Alkei.Systems handles data in the operation of the website. It reflects the actual configuration of the site: no contact forms, no in-house database and no enquiry collection on the site side.',
    sections: [
      {
        title: '1. General provisions',
        paragraphs: [
          'The Privacy Policy describes what information is processed when using the Alkei.Systems website and how it is protected.',
          'The site is an informational resource: it has no registration, no personal account, no contact form and no in-house database of enquiries.',
        ],
      },
      {
        title: '2. What data is processed',
        paragraphs: [
          'Special categories of personal data are not processed by the site. The site does not collect data through its own forms, does not create user profiles and does not store enquiries in its own systems.',
        ],
        items: [
          'Technical information transmitted by the browser: IP address, device and browser type, language, date and time of the request.',
          'Information about the pages requested and the referrer.',
          'Data that you share yourself when contacting us via Telegram, WhatsApp or email.',
        ],
      },
      {
        title: '3. Why the data is processed',
        items: [
          'Ensuring the operability, security and stability of the site.',
          'Generating technical server and hosting logs.',
          'Responding to enquiries you send directly via a messenger or email.',
        ],
        paragraphs: [],
      },
      {
        title: '4. Hosting and technical logs',
        paragraphs: [
          'The site is hosted on a hosting provider that may process technical information, including the IP address, to the extent necessary for the operation of the service and protection against abuse.',
          'We do not claim that the site processes no personal data at all: hosting technical logs may contain IP addresses and other technical information.',
        ],
      },
      {
        title: '5. Cookies, analytics and trackers',
        paragraphs: [
          'The site does not use web analytics systems, advertising or marketing trackers.',
          'If such tools are connected in the future, this Policy will be updated before they go live.',
        ],
      },
      {
        title: '6. Contact via messengers and email',
        paragraphs: [
          'Contact buttons lead directly to Telegram, WhatsApp or an email client. By sending a message you interact with the respective service.',
          'Processing of data within those services is governed by their own terms and privacy policies and is not controlled by Alkei.Systems.',
        ],
      },
      {
        title: '7. Transfer of data to third parties',
        paragraphs: [
          'We do not transfer data to third parties, except in cases provided for by law and to technical contractors ensuring the operation of the hosting — to the extent necessary for the website to function.',
        ],
      },
      {
        title: '8. Retention periods',
        paragraphs: [
          'Technical logs are stored for the period established by the hosting configuration.',
          'Messages received via messengers or email are stored for as long as necessary for correspondence and work on the enquiry.',
        ],
      },
      {
        title: '9. Your rights',
        paragraphs: [
          'You can contact us to exercise your rights regarding the processing of data.',
        ],
        items: [
          'Request information about the processing of your data.',
          'Request clarification, blocking or deletion of data.',
          'Withdraw consent to the processing of data.',
        ],
      },
      {
        title: '10. Changes to the Policy',
        paragraphs: [
          'The Policy may be updated. The current revision is always published on this page.',
        ],
      },
    ],
    contactTitle: 'Contacts regarding data processing',
    contactText:
      'For questions about data processing, write to Alkey8705@gmail.com or via Telegram @alkeiamanzholov.',
  },

  notFound: {
    meta: {
      title: 'Page not found | Alkei.Systems',
      description:
        'The requested page was not found. Go back to the home page or open the section you need: MENTOR, STARTUP, PRODUCT.',
    },
    title: 'Page not found',
    text: 'The page may have been moved or the address may be incorrect. Go back to the home page or open the section you need.',
    backHome: 'Back to home',
  },
};
