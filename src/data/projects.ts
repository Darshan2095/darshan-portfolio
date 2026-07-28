export interface Project {
  title: string;
  category: "ai" | "fullstack" | "mern";
  featured: boolean;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  features: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    featured: true,
    category: "ai",
    title: "HireAI",
    description:
      "AI-powered career platform enabling resume analysis, job matching, interview preparation, and recruiter candidate filtering using Gemini AI workflows.",
    longDescription:
      "HireAI revolutionizes job hunting and candidate screening by parsing resumes with AI, scoring skill alignment, generating interactive mock interview questions, and providing detailed PDF evaluation reports for recruiters.",
    image: "/projects/hireai.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Gemini AI", "Tailwind CSS", "UploadThing"],
    features: [
      "AI Resume Analyzer & Parser",
      "Interactive Job Matching Engine",
      "Mock Interview Platform with AI Feedback",
      "Recruiter Dashboard & Candidate Ranking",
      "Downloadable PDF Resume Analytics",
    ],
    live: "https://hire-ai-blond.vercel.app/",
    github: "https://github.com/Darshan2095/HireAI",
  },
  {
    featured: false,
    category: "fullstack",
    title: "RentEase",
    description:
      "Full-stack furniture and appliance rental platform with flexible tenure plans, cart management, and admin inventory dashboard.",
    longDescription:
      "RentEase simplifies furniture and electronics renting for students and professionals. Features role-based access control, rental tenure calculation, order tracking, and an admin inventory management portal.",
    image: "/projects/rentease.png",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Flexible Rental Tenure Selection",
      "Cart & Instant Checkout Workflows",
      "Order & Rental Tenure Tracking",
      "Comprehensive Admin Control Panel",
    ],
    live: "https://rent-ease-amber.vercel.app/",
    github: "https://github.com/Darshan2095/RentEase",
  },
  {
    featured: false,
    category: "mern",
    title: "MyPG",
    description:
      "Full-stack PG booking platform with city-based search filtering, authentication, and property owner listing tools.",
    longDescription:
      "MyPG connects students and working professionals with verified Paying Guest accommodations. Features city-based real-time filters, landlord dashboards, dynamic image galleries, and secure user logins.",
    image: "/projects/mypg.png",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS", "Node.js"],
    features: [
      "City & Locality Real-Time Filters",
      "Role-Based Authentication (User/Owner)",
      "Dynamic PG Accommodation Pages",
      "Interactive Property Inquiries",
    ],
    live: "https://my-pg-snowy.vercel.app/",
    github: "https://github.com/Darshan2095/MyPG",
  },
  {
    featured: false,
    category: "fullstack",
    title: "CareerDisha",
    description:
      "Career guidance platform providing structured data on courses, top colleges, entrance exams, and scholarship opportunities.",
    longDescription:
      "CareerDisha empowers students with actionable academic insights. Built with SEO best practices, structured dynamic routes, and an admin dashboard to manage course catalogs.",
    image: "/projects/careerdisha.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Dynamic Entrance Exam & Course Catalog",
      "Admin Content Management Portal",
      "Fast SSR Performance & SEO Optimized",
      "Mobile First Responsive Experience",
    ],
    live: "https://career-disha-eosin.vercel.app/",
    github: "https://github.com/Darshan2095/CareerDisha",
  },
  {
    featured: false,
    category: "fullstack",
    title: "Rhyno.ev",
    description:
      "Contributed to full-stack development, UI enhancements, and feature optimizations for an Electric Vehicle platform.",
    longDescription:
      "Collaborated on designing responsive EV catalog views, enhancing page load speed, and crafting interactive vehicle comparison widgets.",
    image: "/projects/rhyno.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Vehicle Specification Comparison View",
      "High-Performance SSR Architecture",
      "Modern Dark Mode Aesthetics",
    ],
    live: "https://rhyno-ev-virid.vercel.app/",
    github: "https://github.com/Darshan2095/Rhyno-EV",
  },
];