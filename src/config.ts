export const siteConfig = {
  name: "Jimmy Campos",
  title: "Solutions Architect | AI Enthusiast | Speaker",
  description: "Personal website for Jimmy Campos",
  accentColor: "#1d4ed8",
  social: {
    email: "jimmy.campos.b@gmail.com",
    linkedin: "https://linkedin.com/in/jimmycamposblanco",
    github: "https://github.com/jimacampos",
    twitter: ''
  },
  aboutMe:
    "I'm a Solutions Architect with 15+ years in the industry, currently at Microsoft (M365 Core), specializing in Azure cloud architecture, AI implementation, and translating business needs into technical strategy. Beyond building scalable solutions, I'm passionate about growing our industry through mentorship—having trained 200+ professionals and served on NGO boards since 2015 to increase STEAM representation, impacting 500+ women in tech. I speak on cloud architecture, AI, technical leadership, and building inclusive tech teams.",
  skills: ["Cloud Architecture", "Azure Certified", "Azure AI Certified", "GitHub Copilot Certified", ".NET", "Speaker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    }
  ],
  resources: [
    {
      topic: "Azure Architecture",
      title: "Essential Azure Resources for Solutions Architects",
      description: "Comprehensive collection of Azure documentation, best practices, and architectural patterns for building scalable cloud solutions.",
      urls: [
        {
          title: "Azure Architecture Center",
          url: "https://docs.microsoft.com/en-us/azure/architecture/"
        },
        {
          title: "Well-Architected Framework",
          url: "https://docs.microsoft.com/en-us/azure/architecture/framework/"
        },
        {
          title: "Azure Reference Architectures",
          url: "https://docs.microsoft.com/en-us/azure/architecture/browse/"
        },
        {
          title: "AZ-900: Azure Fundamentals Certification (Learning Path)",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification"
        }
      ]
    },
    {
      topic: "Artificial Intelligence",
      title: "AI Learning Resources",
      description: "Curated resources for technical professionals looking to learn about AI development, implementation, and best practices.",
      urls: [
        {
          title: "AI:900 Azure AI Fundamentals Certification (Learning Path)",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/?practice-assessment-type=certification"
        },
        {
          title: "GitHub Copilot Certification (Learning Path)",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/?practice-assessment-type=certification"
        },
        {
          title: "Demo: Creating an AI Workflow (Youtube Video)",
          url: "https://youtu.be/yqq_U2fxd2U?si=GQo6Bj-yJ1BLIhEN"
        }
      ]
    }
  ],
  experience: [
    {
      company: "Microsoft",
      title: "Software Engineer 2",
      dateRange: "Mar 2023 - Present",
      bullets: [
        "Deliver enterprise-scale Azure solutions for Microsoft Teams across public and sovereign cloud environments",
        "Reduced infrastructure costs through automated deployment workflows and multi-cloud optimization",
        "Enhanced security posture by leading migration from hardcoded secrets to Managed Identity",
        "Accelerated incident response with custom monitoring solutions and automated health dashboards",
        "Speaker on Azure, GitHub Copilot, and Microservices while leading initiatives connecting 200+ women in tech"
      ],
    },
    {
      company: "Active Sports Inc",
      title: "Technical Lead",
      dateRange: "Dec 2016 - Mar 2023",
      bullets: [
        "Led technical modernization of high-traffic e-commerce platform as primary liaison between business and engineering",
        "Modernized legacy Perl platform to .NET Core with AWS migration—zero major incidents during peak season",
        "Rebuilt critical shipping engine using BDD/TDD methodology, enabling faster and error-free updates",
        "Integrated third-party payment platforms (PayPal, Affirm) and expanded dropshipping fulfillment capabilities",
        "Managed hybrid development teams and served as technical advisor translating concepts into business value"
      ],
    },
    {
      company: "Early Career Foundation",
      title: "Senior Software Engineer | Prodigious Latam, TradeStation, Exceltec",
      dateRange: "Dec 2011 - Dec 2016",
      bullets: [
        "Collaborated directly with customers to resolve technical issues and deliver innovative solutions",
        "Developed award-winning marketing software (Most Innovative 2015 @ Prodigious)",
        "Trained 100+ employees in web and management technologies across multiple organizations",
        "Led cross-functional integration between front-end, back-end, architecture, QA, and client teams"
      ],
    },
  ],
  education: [
    {
      school: "Universidad de Costa Rica",
      degree: "Bachelor in Business Computing",
      dateRange: "2008 - 2012"
    },
    {
      school: "ULACIT",
      degree: "Bachelor in Psychology",
      dateRange: "2018-TBD"
    },
    {
      school: "Microsoft",
      degree: "AZ-104: Microsoft Azure Administrator Associate",
      dateRange: "2025"
    },
    {
      school: "Microsoft",
      degree: "AZ-900: Microsoft Azure Fundamentals",
      dateRange: "2025"
    },
    {
      school: "Microsoft",
      degree: "AI-900: Microsoft Azure AI Fundamentals",
      dateRange: "2025"
    },
    {
      school: "GitHub",
      degree: "Github Copilot Certified",
      dateRange: "2025"
    },
  ],
  events: [
    {
      name: "He for SWE (Society of Women Engineers)",
      topic: "¿Podemos los hombres ser parte de SWE?",
      date: "2025-08-28",
      time: "6:30 PM - 7:30 PM CST",
      registerUrl: "https://www.eventbrite.com/e/he-for-swe-podemos-los-hombres-ser-parte-de-swe-tickets-1531527643409",
      hashtags: ["Diversity", "Inclusion", "Women In Engineering"]
    }
    
  ],
};
