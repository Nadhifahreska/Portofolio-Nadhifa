import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { IoCode } from "react-icons/io5";

export const DATA = {
  name: "Nadhifa",
  initials: "NNAR",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Business Analyst, System Analyst, Data Analyst",
  summary:
    "I am a Business Analyst and System Analyst with a bachelor's degree in Computer Science. I am passionate about using technology to create innovative and user-friendly solutions that align with business goals. I possess advanced skills in Tableau for data visualization. These skills enable me to analyze and present data clearly to inform decision-making. I am eager to apply these experiences and deepen my knowledge in roles such as Business Analyst, Data Analyst, and Researcher, contributing to business solutions and strategic decision-making.",
  avatarUrl: "./images/profile.png",
  skills: [
    "Analisis Bisnis",
    "Communication",
    "Leadership",
    "Problem Solving",
    "Critical Thinking",
    "Teamwork",
    "Data Analysis",
    "Data Visualization",
    "Data Analysis Tools",
    "Business Process Mapping",
    "Business Requirement Documentation (BRD)",
    "User Story Creation",
    "Agile Methodologies",
    "Wireframing Project Manager",
    "Machine Learning",
    "SQL",
    "Python",
    "Design",
    "Microsoft Office (Word, Excel, Power Point)",
    "Google Colab",
    "Google Suite (Docs, Spreadsheets, Slides)",
    "Tableau",
    "Trello",
    "Asana",
    "Lucidchart",
    "Visio",
    "Visual Studio Code",
    "PyCharm",
    "Figma",
    "Canva",
    "SPSS",
    "Smart PLS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: IoCode, label: "Project" },
  ],
  contact: {
    email: "nadhifareskaa@gmail.com",
    tel: "+6289634439400",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nadhifahreska",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nadhifah-nur-annisa-reska",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/nadhifasshh",
        icon: Icons.instagram,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT Bank Danamon Indonesia Tbk",
      href: "https://www.danamon.co.id/",
      badges: [],
      location: "On-Site",
      title: "IT Business Partner",
      logoUrl: "./images/Bank-Danamon.jpeg",
      start: "Nov 2025",
      end: "Present",
      description:
        "Tracked project timelines and conducted follow-ups with stakeholders to ensure timely task completion and summarized meetings and upadated status reports",
    },
    {
      company: "Klinik Pendidikan Mipa",
      href: "https://read1bogorplus.com/",
      badges: [],
      location: "Remote",
      title: "Data Entry Assistant",
      logoUrl: "./images/klinik-pendidikan-mipa.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Responsible for inputting, cleaning, and validating competition answer data, while managing business reporting in Microsoft Excel and Google Sheets to ensure accuracy and reliability.",
    },
    {
      company: "PT BSR Indonesia (MNC Group)",
      href: "https://www.bsrindonesia.com/",
      badges: [],
      location: "On-site",
      title: "IT Business & System Analyst",
      logoUrl: "./images/bsr-indonesia.png",
      start: "Feb 2024",
      end: "Jul 2024",
      description:
        "As an IT Business and System Analyst at PT BSR Indonesia (MNC Group), I was responsible for testing and analyzing web applications to ensure functionality and alignment with user expectations. My role involved evaluating website processes, identifying areas for improvement, and creating structured task lists for developers to support website development. I developed user guides for Odoo HRIS and Odoo I-Hub, and conducted data cleaning activities to maintain data accuracy. Additionally, I analyzed website errors, proposed technical solutions to developers, and produced comprehensive documentation, including Business Requirement Documents (BRD) and user manuals, particularly for the Rent Car project.",
    },
    {
      company: "Genius School",
      badges: [],
      href: "",
      location: "On-site",
      title: "Computer Teacher",
      logoUrl: "./images/genius-school.png",
      start: "Feb 2022",
      end: "Feb 2024",
      description:
        "Taught Microsoft Excel, PowerPoint, and data analysis fundamentals.",
    },
  ],
  education: [
    {
      school: "Semarang State University",
      href: "https://unnes.ac.id/beranda/",
      degree: "Bachelor's Degree of Information Systems",
      logoUrl: "./images/universitas-negeri-semarang.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "IslamicXplore Web",
      href: "https://naufalpratam4.github.io/islamicXplore.github.io/",
      dates: "",
      active: true,
      description:
        "A web-based Islamic education platform designed to make learning engaging through interactive features and gamified modules. This project aimed to improve digital literacy and provide accessible Islamic resources for students and communities.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://naufalpratam4.github.io/islamicXplore.github.io/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Business Proposal",
          href: "./docs/proposal-islamic-xplore.pdf",
          icon: <Icons.business className="size-3" />,
        },
        {
          type: "Figma",
          href: "https://www.figma.com/design/zYzdBsJEb0wdxlDfQqvIrj/IslamicXplore--Platform-Pembelajaran-Agama?node-id=0-1&p=f",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "",
      video: "./videos/islamic-xplore.mp4",
    },
    {
      title: "Hike Wise Mobile",
      href: "",
      dates: "",
      active: true,
      description:
        "A smart hiking assistant application built during the Bangkit Academy Program to support safe and efficient outdoor activities. The app leverages geolocation, weather updates, and recommendation systems to provide real-time guidance for hikers.",
      technologies: [],
      links: [
        {
          type: "Business Proposal",
          href: "./docs/proposal-hike-wise.pdf",
          icon: <Icons.business className="size-3" />,
        },
        {
          type: "Figma",
          href: "https://www.figma.com/file/3d7a2S3rI1hOVtLdaXmVr1/Untitled?type=design&node-id=50%3A2&mode=design&t=sJnKSUXCdSiwSIKf-1",
          icon: <Icons.figma className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Xcelerators-Bangkit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./videos/hike-wise.mp4",
    },
    {
      title: "Ancala Mobile",
      href: "",
      dates: "",
      active: true,
      description:
        "Ancala is a mobile application designed to enhance the safety and preparedness of mountain hikers in Indonesia. Recognizing the significant risks of mountain climbing, Ancala serves as a comprehensive digital companion that provides critical information, streamlined ticket booking, and a supportive community space for climbers of all levels.",
      technologies: [],
      links: [
        {
          type: "Proposal",
          href: "./docs/proposal-ancala.pdf",
          icon: <Icons.business className="size-3" />,
        },
        {
          type: "Figma",
          href: "https://www.figma.com/proto/rvGfrpEAgvc2lxcpbTPs4N/Ancala?node-id=9197-4229&t=ajavkZx7EIiealQM-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "",
      video: "./videos/ancala.mp4",
    },
    {
      title:
        "System Analysis and Process Optimization for Odoo ERP Modules (HRIS & I-Hub) Web",
      href: "",
      dates: "",
      active: true,
      description:
        "An ERP system development project at PT BSR Indonesia (MNC Group), focusing on Human Resource Information Systems (HRIS) and I-Hub (co-working space management). The system was designed for more than 3,000 outsourcing employees and new operational processes.",
      technologies: [],
      links: [],
      image: "/images/hris.png",
      video: "",
    },
    {
      title:
        "Communication Aids for Disabilities Using GPS and Web Technology IoT",
      href: "",
      dates: "",
      active: true,
      description:
        "A system designed to assist hearing and speech-impaired individuals in navigating public transportation (Bus Rapid Transit/BRT) using GPS and web-based communication technologies.",
      technologies: [],
      links: [
        {
          type: "Business Proposal",
          href: "./docs/proposal-pkm.pdf",
          icon: <Icons.business className="size-3" />,
        },
      ],
      image: "/images/communication-aid.png",
      video: "",
    },
    {
      title: "MUCOO (Managing Used Cooking Oil) Mobile",
      href: "",
      dates: "",
      active: true,
      description:
        "An integrated digital platform designed to manage the collection and recycling of used cooking oil in Indonesia, connecting households, restaurants, and processors to convert hazardous oil waste into sustainable products such as biodiesel, soap, fertilizer, and eco-friendly cleaning agents.",
      technologies: [],
      links: [
        {
          type: "Business Proposal",
          href: "./docs/proposal-mucoo.pdf",
          icon: <Icons.business className="size-3" />,
        },
        {
          type: "Figma",
          href: "https://www.figma.com/design/ePsffEwvrehH0MzfVUD6nh/MUCOO-(Copy)?node-id=0-1&t=NzuQZPNyQ081QCEt-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/images/mucoo.png",
      video: "",
    },
  ],
} as const;
