export const PERSONAL = {
  name: "Dhruv",
  title: "Full-Stack Developer",
  subtitle: "Building scalable web apps · Solving complex problems · Crafting intelligent systems",
  email: "dhruvgambhir077@gmail.com",
  phone: "+91 7678664514",
  bio: "I am a 3rd year B.Tech student in Computer Science with Data Science at Guru Tegh Bahadur Institute Of Technology, Delhi, and a full-stack developer focused on building end-to-end digital products. I work with the MERN stack and Next.js to design responsive interfaces, develop scalable REST APIs, and deliver seamless user experiences. Alongside web development, I apply Machine Learning to build data-driven applications, and I have strengthened my problem-solving skills by solving 100+ DSA problems across competitive platforms.",
  github: "https://github.com/dhruv-code297",
  linkedin: "https://www.linkedin.com/in/dhruv-09a06a370/",
  leetcode: "https://leetcode.com/u/DhruvGambhir05/",
  resumeUrl: "/resume2.pdf",
  avatarUrl: "/avatar1.jpg",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: { category: string; skills: string[] }[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database & Cloud",
    skills: ["MongoDB", "PostgreSQL", "AWS", "Cloudinary", "Vercel", "Render"],
  },
  {
    category: "Machine Learning",
    skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "C++", "DSA"],
  },
];

export const PROJECTS: {
  name: string; desc: string; tech: string[]; github: string; live: string; coverImage: string;
}[] = [
  {
    name: "SensAI",
    desc: "Developed an AI-powered career coaching platform that delivers personalized industry insights, resume building, cover letter generation, and interview preparation using modern full-stack technologies and Gemini AI.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Neon PostgreSQL", "Inngest", "Google Gemini AI"],
    github: "https://github.com/dhruv-code297/sensai",
    live: "https://sens-ai-teal.vercel.app/",
    coverImage: "/projects/sensai.png",
  },
  {
    name: "Medigo",
    desc: "Developed a full-stack healthcare platform enabling secure video consultations, credit-based appointment booking, and role-based workflows for patients, doctors, and admins using Next.js, Prisma, and real-time APIs.",
    tech: ["React", "Vonage Video", "Neon PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    github: "https://github.com/dhruv-code297/medigo",
    live: "https://medigo-lime.vercel.app/",
    coverImage: "/projects/medigo.png",
  },
  {
    name: "JobFit AI",
    desc: "Developed an AI-powered resume analysis platform that delivers ATS scoring, skill extraction, and job matching with personalized improvement suggestions using modern full-stack technologies.",
    tech: ["React", "Express", "MongoDB", "Gemini AI", "JWT", "Groq API"],
    github: "https://github.com/dhruv-code297/JobFit-AI",
    live: "https://jobfit-ai-client.onrender.com",
    coverImage: "/projects/jobfit.png",
  },
  {
    name: "SnapTalk",
    desc: "Developed a real-time chat and video communication platform with secure authentication, live messaging, and video features including screen sharing and recording using the MERN stack.",
    tech: ["React", "Express", "MongoDB", "JavaScript", "Steam API", "Zustand", "TanStack Query"],
    github: "https://github.com/dhruv-code297/snaptalk",
    live: "https://snaptalk-jikk.onrender.com/",
    coverImage: "/projects/snaptalk.png",
  },
  {
    name: "UrbanBites",
    desc: "Developed a full-stack food delivery platform with secure authentication, real-time order tracking, and Stripe-based payments, integrating customer, admin, and delivery workflows using the MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS","Stripe","JWT"],
    github: "https://github.com/dhruv-code297/urbanbites",
    live: "https://urbanbites-frontend.onrender.com/",
    coverImage: "/projects/urbanbites.png",
  },
  {
    name: "Velora",
    desc: "Developed an AI-powered thumbnail generation platform that enables users to create, preview, and manage high-quality thumbnails using Gemini AI, Cloudinary, and a scalable MERN-based architecture.",
    tech: ["Next.js", "TypeScript", "Cloudinary", "PostgreSQL","Google Gemini AI"],
    github: "https://github.com/dhruv-code297/Velora-AI-Thumbnail-Generator",
    live: "https://velora-ai-thumbnail-generator.vercel.app/",
    coverImage: "/projects/velora.png",
  },
];

export const EDUCATION = [
  {
    school: "St. John's School",
    shortName: "St. John's",
    degree: "Secondary (Class X)",
    period: "2020",
    note: "",
    current: false,
  },
  {
    school: "DAV Public School",
    shortName: "DAV, Faridabad",
    degree: "Higher Secondary (Class XII)",
    period: "2022",
    note: "Science Stream",
    current: false,
  },
  {
    school: "Guru Tegh Bahadur Institute of Technology",
    shortName: "GTBIT, Delhi",
    degree: "B.Tech — Computer Science & Data Science",
    period: "2023 — Present",
    note: "GGSIPU Affiliated · 3rd Year",
    current: true,
  },
];