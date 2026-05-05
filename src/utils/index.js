import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";
import project5 from "../assets/projects/5.png";
import project6 from "../assets/projects/6.png";
import project61 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/7.png";
import project9 from "../assets/projects/sparkImage.jpg";
import project10 from "../assets/projects/9.png";
import project11 from "../assets/projects/project11.jpg";
import project12 from "../assets/projects/project12.jpg";
import project13 from "../assets/projects/project13.png";

import image1 from "../assets/Open/image1.jpg";
import image2 from "../assets/Open/image-2.jpg";
import image3 from "../assets/Open/image-3.jpg";
import image4 from "../assets/Open/image-4.jpg";
import image5 from "../assets/Open/image-5.jpg";

import depInspectorImg from "../assets/dep-inspector.jpg";

export const HERO_CONTENT = `Full Stack Software Engineer with hands-on experience building scalable, production-ready web applications using modern JavaScript frameworks and cloud-native tools. I specialize in React, Next.js, TypeScript, and Tailwind CSS on the frontend, and Node.js, Express, MongoDB, PostgreSQL, and FastAPI on the backend. I have worked on real-world MVPs involving secure authentication, REST APIs, third-party integrations, and data-driven dashboards, while actively exploring GenAI, Cloud, and DevOps workflows to deliver reliable, high-performance systems.`;


export const EXPERIENCES = [
  {
    Duration: "Aug 2025 – Mar 2026",
    role: "Full Stack Web Developer Intern",
    company: "Square Education Pvt. Ltd.",
    description:
      "Owning and developing the company’s primary production MVP as a full-stack engineer. Building scalable, secure, and high-performance web applications using modern frontend, backend, and cloud-native technologies in a real production environment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    Tasks:
      "Led end-to-end development of the production codebase, including frontend architecture, backend APIs, authentication flows, and database design. Integrated PayU payment gateway, implemented JWT-based admin dashboards, and managed cloud deployment, infrastructure, and live user data in a remote, production setting.",
  },

  {
    Duration: "Mar 2025 – Apr 2025",
    role: "Full Stack Web Developer Intern",
    company: "Financea",
    description:
      "Worked in a fast-paced remote startup environment to design and build the core MVP of a data-driven financial platform, focusing on performance, scalability, and clean system architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "React 19",
    ],
    Tasks:
      "Developed full-stack features, implemented dynamic dashboards, and contributed to the overall product architecture. Collaborated closely with the team to deliver scalable, production-ready features within tight timelines.",
  },

  {
    Duration: "Feb 2025 – Present",
    role: "Deputy Head of Development",
    company: "Geek Room – MSIT",
    description:
      "Leading development initiatives for a large-scale technical community, focusing on mentoring, project execution, and strengthening full-stack engineering practices among members.",
    technologies: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
    ],
    Tasks:
      "Mentoring and leading 50+ developers, overseeing technical projects, organizing development-focused events, and driving hands-on learning through real-world full-stack applications and collaborative initiatives.",
  },

  {
    Duration: "Oct 2024 – Present",
    role: "Deputy Head of Development",
    company: "GDGOC – MSIT",
    description:
      "Driving technical growth and development initiatives within a Google-backed developer community by leading teams, managing projects, and organizing large-scale technical events and campaigns.",
    technologies: [
      "Department Leadership",
      "Team Management",
      "Full Stack Development",
    ],
    Tasks:
      "Supervised development teams, managed departmental operations, and played a key role in organizing workshops, hackathons, and community-driven projects aimed at upskilling students in modern software engineering practices.",
  },
];

export const PROJECTS = [
  {
    title: "dep-inspector-cli – Node.js Dependency Analysis CLI",
    image: depInspectorImg,
    github: "https://github.com/Nevin100/Dep-inspector-nevin",
    link: "https://www.npmjs.com/package/dep-inspector-cli",
    description:
      "An open-source CLI tool published on npm that goes beyond npm audit — traces the exact dependency chain that pulled in a vulnerability, with optional AI-powered insights via Groq."
        .padEnd(140, " "),
    technologies: [
      "TypeScript",
      "Node.js",
      "Commander.js",
      "LangChain",
      "Groq API",
      "Chalk",
      "Semver",
    ],
    keyFeatures: [
      "Traces full chain: root → pkg → sub-pkg → vulnerable-dep",
      "Vulnerability scan with severity levels and version delta",
      "Visual dependency tree with outdated version highlights",
      "Optional AI analysis via Groq (--ai flag)",
      "JSON output for CI/CD pipeline integration",
      "240+ weekly downloads on npm",
    ],
    learnings: [
      "Published and maintained a production npm package",
      "Built a TypeScript CLI with Commander.js and Chalk",
      "Integrated LangChain + Groq for AI-powered dependency insights",
      "Designed machine-readable JSON output for CI/CD pipelines",
    ],
  },
  {
  title: "Invoicer v1 – Invoice & Finance Management Platform ",
  image: project13, 
  github: "https://github.com/Nevin100/Invoicer-v1",
  link: "https://invoicer.nevinbali.me/",
  description:
    "Invoicer v1 is a modern, full-stack invoice and finance management platform designed for freelancers and small businesses to manage invoices, expenses, payments, clients, and financial analytics from a single, responsive platform with additional features like Ai Insights for dedicated Section, Invoice tracking status + Secured Credit Based System." 
      .padEnd(140, " "),
  technologies: [
    "Next.js (App Router)",
    "React",
    "TypeScript",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Tailwind CSS",
    "Recharts",
    "Redux Toolkit",
    "Razorpay",
    "ExcelJS",
    "Tavily API",
    "Groq",
  ],
  keyFeatures: [
    "Invoice lifecycle management with client-linked invoices",
    "Expense tracking with category-wise analytics & insights",
    "Interactive financial analytics dashboard (monthly & yearly)",
    "Secure online payments using Razorpay integration",
    "Export expenses & financial data to Excel for reporting",
    "Fully responsive dashboard with sidebar navigation",
    "Ai EValuations and insights for financial data using Tavily APi & Groq with history management",
  ],
  learnings: [
    "Designed and built a monolithic full-stack architecture using Next.js",
    "Implemented Cookie based authentication with secure API routes.",
    "Integrated Razorpay payment flow into invoice lifecycle",
    "Built real-time financial analytics using aggregated MongoDB data",
    "Worked on scalable schema design with Mongoose ODM",
    "Implemented data export functionality using ExcelJS",
    "Integrated AI insights using Tavily API and Groq for financial data analysis",
    "Integrated Docker + CI/CD pipelines for streamlined deployment and development workflows",
  ],
},

  {
    title: "InteliMail – AI Cold Email Generator",
    image: project12,
    github: "https://github.com/Nevin100/InteliMail-AI-Cold-Email-Generator",
    link:"https://intelimail.nevinbali.me/",
    description:
      "InteliMail is a lightweight AI-powered web tool that helps users generate formal, personalized cold emails instantly using the Groq LLM model.".padEnd(
        140,
        " "
      ),
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Groq API",
    ],
    keyFeatures: [
      "Generate formal emails based on user details using Groq LLM",
      "Supports name, position, role, qualities, and social links",
      "Fully responsive design with clean UI and one-click copy",
      "No sign-up or authentication needed – just plug and play",
    ],
    learnings: [
      "Integrated Groq API for dynamic email generation",
      "Designed a frictionless user flow with no backend complexity",
      "Built a sleek UI using TailwindCSS and shadcn/ui",
    ],
  },
  {
    title: " NewsMail – AI-Integrated Newsletter Platform",
    image: project11,
    github: "https://github.com/Nevin100/NewsMail",
    link:"https://newsmail.nevinbali.me/",
    description:
      "NewsMail is a powerful MERN stack newsletter platform that allows scraping news articles, managing subscribers, and sending bulk emails with AI-enhanced summaries.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Nodemailer",
      "Groq API",
      "Cheerio",
    ],
    keyFeatures: [
      "Scrapes and summarizes news content using Groq API",
      "Bulk email sending via Nodemailer",
      "Admin dashboard for newsletter management",
      "AI integration for custom content generation",
    ],
    learnings: [
      "Worked with Cheerio for DOM parsing and scraping",
      "Integrated Groq API for summarizing articles",
      "Handled newsletter scheduling and bulk mailing",
    ],
  },
  {
    title: " HireWire – AI-Powered Interview Preparation Tool",
    image: project1,
    github: "https://github.com/Nevin100/HireWire",
    link:"https://hirewire.nevinbali.me/",
    description:
      "HireWire is an AI-powered interview prep tool that generates tailored technical questions based on your role and experience using Groq API.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Groq API",
    ],
    keyFeatures: [
      "AI-generated interview questions using Groq API",
      "Session-based prep with role and domain context",
    ],
    learnings: [
      "Implemented Groq API for dynamic question generation",
      "Built session-based flows for personalized prep",
    ],
  },
  {
    title: " PagePulse – E-Commerce Bookstore",
    image: project2,
    github: "https://github.com/Nevin100/PagePulse",
    link:"https://pagepulse.nevinbali.me/",
    description:
      "PagePulse is a full-stack bookstore with user authentication, product management, and admin dashboard secured by Firebase and JWT.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Redux Toolkit",
      "Firebase",
    ],
    keyFeatures: [
      "Role-based dashboards and product CRUD",
      "JWT and Firebase for secure dual authentication",
    ],
    learnings: [
      "Built protected routes using JWT and Firebase",
      "Managed global state with Redux Toolkit",
    ],
  },
  {
    title: " Sociopedia – MERN Social Media App",
    image: project3,
    github: "https://github.com/Nevin100/Sociopedia",
    link:"#",
    description:
      "Sociopedia is a MERN social platform with real-time posts, likes, comments, friends, and profile management features.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Material UI",
    ],
    keyFeatures: [
      "Create, like, and comment on posts",
      "Manage friends and user profiles securely",
    ],
    learnings: [
      "Designed social graph schemas in MongoDB",
      "Built JWT-secured authentication flows",
    ],
  },
  {
    title: "Notify – Cloud Notes App",
    image: project5,
    github: "https://github.com/Nevin100/Notify",
    link:"https://notify.nevinbali.me/",
    description:
      "Notify is a minimalist notes app supporting CRUD, tagging, pinning, search, and secure JWT-based user authentication.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "TailwindCSS",
    ],
    keyFeatures: [
      "Note creation, editing, pinning, and deletion",
      "Tag-based filtering and search functionality",
    ],
    learnings: [
      "Built protected API routes with JWT",
      "Enhanced search and filtering using React",
    ],
  },
  {
    title: "Restaura – Restaurant Showcase Website",
    image: project6,
    github: "https://github.com/Nevin100/Restaura",
    link:"https://stately-sfogliatella-4529b5.netlify.app/",
    description:
      "Restaura is a responsive restaurant website featuring animations, menus, and highlights with clean UI/UX using React and Tailwind.".padEnd(
        140,
        " "
      ),
    technologies: ["React.js", "TailwindCSS", "Framer Motion", "HTML"],
    keyFeatures: [
      "Responsive layout for all screen sizes",
      "Framer Motion powered smooth animations",
    ],
    learnings: [
      "Applied animation techniques with Framer Motion",
      "Focused on branding with UI/UX design balance",
    ],
  },
  {
    title: "Plantventory — Track Your Greens Like a Pro ",
    image: project8,
    github: "https://github.com/Nevin100/Plantventory",
    link:"#",
    description:
      `Welcome to Plantventory, your personal jungle journal! A full-stack, modern-as-heck plant inventory app built with Next.js, TypeScript, Prisma, Neon (PostgreSQL), Stack Auth, and UploadThing. Curate, care for, and celebrate your favorite medicinal herbs, houseplants, and garden greens — all in one smooth digital space. 🌼🧪🌾`.padEnd(
        140,
        " "
      ),
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon (PostgreSQL)",
      "Stack Auth",
      "UploadThing",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Custom Plant Inventory: Add, edit, and organize all your leafy friends with love and labels",
      "Smart Notes to log care routines and growth stages",
    ],
    learnings: [
      "Built a full-stack Next.js app with TypeScript",
      "Integrated Prisma ORM with Neon PostgreSQL",
    ],
  },
  {
    title: "Baatein – Real-Time Chat App",
    image: project4,
    github: "https://github.com/Nevin100/Baatein",
    link:"https://baatein-7epj.onrender.com/",
    description:
      "Baatein is a MERN chat app with real-time messaging via Socket.io, dynamic themes, and secure authentication using JWT.".padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Bcrypt.js",
      "Zustand",
      "TailwindCSS",
      "DaisyUI",
    ],
    keyFeatures: [
      "Real-time messaging with Socket.io",
      "Dynamic themes using DaisyUI components",
    ],
    learnings: [
      "Implemented instant chat with WebSockets",
      "Handled secure login with Bcrypt and JWT",
    ],
  },
  {
    title: "SPARK – Bridging the Gap Between Campus & Code!",
    image: project9,
    github: "https://github.com/Nevin100/S.P.A.R.K",
    link:"#",
    description:
      `A revolutionary platform for students, societies, sponsors, and curious minds in tech. SPARK bridges skill gaps by connecting academia, industry, and hackathons to build job-ready developers.`.padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Firebase Auth",
      "JWT",
      "MongoDB",
      "Cloudinary",
    ],
    keyFeatures: [
      "Industry Challenges: Solve real tasks by companies",
      "Multi-Chapter Societies: Enable cross-campus collaborations",
    ],
    learnings: [
      "Designed scalable dev ecosystem connecting students and industry",
      "Integrated Firebase Authentication and JWT for secure login",
    ],
  },
  {
    title: "ReactIn3D – 3D Spline Integration ",
    image: project10,
    github: "https://github.com/Nevin100/ReactIn3D",
    link:"https://react-in3-d.vercel.app/",
    description:
      `ReactIn3D is a futuristic 3D email platform for developers. Built with React.js, Tailwind CSS, and Spline, it redefines frontend presentation with stunning visuals.`.padEnd(
        140,
        " "
      ),
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Spline 3D",
      "Vercel (Deployment)",
    ],
    keyFeatures: [
      "3D Interactive Visuals powered by Spline",
      "Fully Responsive Layout with Flexbox and Tailwind",
    ],
    learnings: [
      "Integrated 3D scenes into React via Spline",
      "Built a responsive and aesthetic layout using Tailwind CSS",
    ],
  },
  {
    title: "HR Analytics Dashboard",
    image: project61,
    github: "#",
    link:"#",
    description:
      "A Power BI dashboard analyzing employee attrition by demographics to identify HR trends and provide actionable insights.".padEnd(
        140,
        " "
      ),
    technologies: ["Power BI"],
    keyFeatures: [
      "Interactive attrition metrics by age and dept",
      "Demographic segmented visual analytics",
    ],
    learnings: [
      "Mastered data modeling in Power BI",
      "Created dynamic metrics using DAX formulas",
    ],
  },
  {
    title: "Firm Financial Dashboard",
    image: project7,
    github: "#",
    link:"#",
    description:
      "Power BI dashboard visualizing savings, investments, and revenues to deliver comprehensive financial insights to decision-makers.".padEnd(
        140,
        " "
      ),
    technologies: ["Power BI"],
    keyFeatures: [
      "Consolidated KPIs across financial metrics",
      "Time-series analysis with slicers and drilldowns",
    ],
    learnings: [
      "Built financial data flows for dashboard",
      "Utilized Power BI drilldowns and filters",
    ],
  },
];

export const OpenSourceContributionsData = [
  {
    image: depInspectorImg, 
    role: "Author & Maintainer",
    company: "dep-inspector-cli (npm)",
    repo: "https://github.com/Nevin100/Dep-inspector-nevin",
    description:
      "Built and published an open-source CLI tool on npm for analyzing Node.js project dependencies. Traces the exact dependency chain that pulled in a vulnerable package, with AI-powered insights via Groq, JSON output for CI/CD pipelines, and 240+ weekly downloads.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Commander.js",
      "LangChain",
      "Groq API",
      "npm Registry",
    ],
    link: "https://www.npmjs.com/package/dep-inspector-cli",
  },
  {
    image: image4,
    role: "Frontend Developer",
    company: "Code Kshetra 2.0 (MLH Hackathon)",
    repo: "https://github.com/Nevin100/CodeKshetra2.0",
    description:
      "Contributed to the official MLH-backed hackathon website by developing scalable and visually engaging frontend components. Implemented smooth animations and responsive layouts using React and Tailwind CSS, ensuring an optimized user experience for large-scale event traffic. Collaborated closely with the offline operations team to coordinate logistics with major technology partners.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "UI Animations",
      "Responsive Design",
    ],
    link: "https://code-kshetra2-0.vercel.app/#/",
  },
  {
    image: image5,
    role: "Frontend Developer & Moderator",
    company: "Pears Global Hackathon",
    repo: "https://github.com/Nevin100/pears-hack-website",
    description:
      "Led frontend development and moderated participant workflows for a global-level hackathon. Built dynamic event modules and onboarding flows to streamline registrations and participation, while ensuring a seamless and accessible user experience throughout the event lifecycle.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "User Experience Design",
      "Event Systems",
    ],
    link: "https://pearshack.geekroom.in/",
  },
  {
    image: image3,
    role: "Frontend Developer & Participant",
    company: "Manipal University Jaipur (MUJ)",
    repo: "https://github.com/Nevin100/MUJ-Hack-Website",
    description:
      "Designed and developed a fully responsive hackathon website during active participation at MUJ Hackathon. Delivered performance-optimized UI components using React and TypeScript under strict deadlines, focusing on cross-device compatibility and clean frontend architecture.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Web Design",
      "Performance Optimization",
    ],
    link: "https://codemanipal.geekroom.in/#/",
  },
  {
    image: image2,
    role: "Frontend Developer",
    company: "Geekroom – MSIT",
    repo: "https://github.com/Nevin100/Geek-Room",
    description:
      "Developed and maintained the official Geekroom website with a strong focus on responsive design, performance optimization, and scalable frontend structure. Leveraged modern frameworks and styling solutions to deliver a polished and production-ready community platform.",
    technologies: [
      "Next.js",
      "SASS",
      "Tailwind CSS",
      "Responsive UI",
      "Frontend Architecture",
    ],
    link: "https://www.geekroom.in/",
  },
  {
    image: image1,
    role: "Deputy Head & Frontend Supervisor",
    company: "GDGOC – MSIT",
    repo: "https://github.com/Nevin100/gdgoc-website",
    description:
      "Led and supervised the frontend development team for the official GDGOC website. Oversaw UI architecture, animation workflows, and module-level execution using React, Tailwind CSS, and Framer Motion. Played a key role in coordinating team deliverables and maintaining high-quality engineering standards for Google-backed community initiatives.",
    technologies: [
      "React.js",
      "Framer Motion",
      "Tailwind CSS",
      "Team Leadership",
      "Frontend Supervision",
    ],
    link: "https://www.gdgmsit.in/",
  },
];


export const CONTACT = {
  address: "Sector 8, Dwarka, New Delhi – 110077, India",
  email1: "opopopopop100000@gmail.com",
  email2: "nevinbali10@gmail.com",
};
