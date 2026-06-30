export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  category: "web" | "academic" | "database" | "mobile" | "other";
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface Organization {
  name: string;
  position: string;
  responsibilities: string[];
  period: string;
}

export interface Experience {
  title: string;
  organization: string;
  type: "academic" | "freelance" | "volunteer" | "training" | "internship";
  description: string;
  period: string;
  highlights?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  type: "award" | "competition" | "dean-list" | "hackathon" | "other";
}

export const personalInfo = {
  name: "Ryan Donayre",
  fullName: "Ryan M. Donayre",
  title: "BSIT Student",
  yearLevel: "4th Year, 1st Semester",
  email: "donayreryanm@gmail.com",
  phone: "09947697137",
  location: "Quezon City, Philippines",
  facebook: "Ry Donayre",
  github: "WhiteKnight-cell",
  linkedin: "ryan-donayre",
  tagline: "Building the future, one line of code at a time",
  bio: [
    "I am a 4th-year BSIT student at the Polytechnic University of the Philippines (PUP) Quezon City, passionate about technology and software development. My academic journey has equipped me with a solid foundation in information systems, programming, and problem-solving.",
    "I am particularly interested in web development, system analysis, and database management. I enjoy collaborating on projects that challenge my technical abilities and allow me to contribute to meaningful solutions.",
    "As an aspiring IT professional, I am continuously learning and exploring new technologies to expand my skill set. I am eager to apply my knowledge in real-world settings and grow as a developer.",
  ],
  passions: [
    "Web Development",
    "System Analysis & Design",
    "Database Management",
    "UI/UX Design",
    "Cybersecurity",
    "Cloud Computing",
  ],
};

export const education: Education[] = [
  {
    school: "Polytechnic University of the Philippines - Quezon City",
    degree: "Bachelor of Science in Information Technology",
    period: "2023 - 2027",
    highlights: ["4th Year, 1st Semester", "Relevant coursework in programming, databases, networking, and systems analysis"],
  },
  {
    school: "Our Lady of Fatima Quezon City Senior High School",
    degree: "Senior High School",
    period: "2021 - 2023",
  },
  {
    school: "North Fairview High School",
    degree: "Junior High School",
    period: "2017 - 2021",
  },
  {
    school: "Fairview Elementary School",
    degree: "Elementary",
    period: "2011 - 2017",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C#", level: 65, icon: "SiCsharp" },
      { name: "JavaScript", level: 60, icon: "SiJavascript" },
      { name: "HTML5", level: 75, icon: "SiHtml5" },
      { name: "CSS3", level: 70, icon: "SiCss3" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Responsive Design", level: 70, icon: "SiReact" },
      { name: "Frontend Basics", level: 65, icon: "SiNextdotjs" },
      { name: "Tailwind CSS", level: 60, icon: "SiTailwindcss" },
      { name: "Bootstrap", level: 55, icon: "SiBootstrap" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 60, icon: "SiMysql" },
      { name: "SQLite", level: 50, icon: "SiSqlite" },
      { name: "Git & GitHub", level: 65, icon: "SiGit" },
      { name: "VS Code", level: 75, icon: "SiVisualstudiocode" },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Problem Solving", level: 80, icon: "SiBulma" },
      { name: "Teamwork & Collaboration", level: 85, icon: "SiGroupme" },
      { name: "Systems Analysis", level: 70, icon: "SiDiagramsdotnet" },
      { name: "Communication", level: 75, icon: "SiGooglechat" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "mabl Skills Certification: Foundations",
    issuer: "mabl",
    date: "2024",
    credentialUrl: "#",
  },
  {
    name: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Student Information System",
    description: "A web-based system for managing student records, grades, and enrollment data. Developed as a academic project using PHP and MySQL.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: ["Student CRUD operations", "Grade management", "Search and filter", "Responsive table views"],
    category: "academic",
    githubUrl: "https://github.com/WhiteKnight-cell",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "2",
    title: "Inventory Management System",
    description: "A database-driven inventory system with real-time stock tracking, supplier management, and reporting features.",
    technologies: ["C#", "SQL Server", ".NET Framework"],
    features: ["Stock tracking", "Supplier management", "Sales reporting", "Low stock alerts"],
    category: "database",
    githubUrl: "https://github.com/WhiteKnight-cell",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description: "An interactive portfolio built with modern web technologies showcasing projects, skills, and certifications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive design", "Dark/Light theme", "Smooth animations", "Contact form"],
    category: "web",
    githubUrl: "https://github.com/WhiteKnight-cell",
    liveUrl: "#",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "4",
    title: "Simple POS System",
    description: "A point-of-sale system for small businesses with billing, inventory, and receipt generation capabilities.",
    technologies: ["Java", "MySQL", "Swing"],
    features: ["Billing interface", "Product management", "Receipt generation", "Sales history"],
    category: "academic",
    githubUrl: "https://github.com/WhiteKnight-cell",
    image: "/images/project-placeholder.svg",
  },
];

export const experiences: Experience[] = [
  {
    title: "Academic Projects Developer",
    organization: "Polytechnic University of the Philippines",
    type: "academic",
    description: "Developed multiple academic projects as part of coursework, including information systems, database applications, and web-based solutions.",
    period: "2023 - Present",
    highlights: [
      "Built functional software systems using agile methodologies",
      "Collaborated with team members on system analysis and design",
      "Presented project demonstrations to faculty and peers",
    ],
  },
  {
    title: "Freelance Web Development",
    organization: "Self-Employed",
    type: "freelance",
    description: "Provided web development services on a freelance basis, creating simple websites and landing pages for small projects.",
    period: "2024 - Present",
    highlights: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Assisted with basic website maintenance and updates",
    ],
  },
];

export const achievements: Achievement[] = [];

export const organizations: Organization[] = [];
