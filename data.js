const PORTFOLIO_DATA = {
  profile: {
    name: "Muhammad Noval Dwi Ramadhani",
    nickname: "Noval",
    tagline: "Hi, I'm Noval.",
    role: "AI & Backend Engineer",
    bio: "Computer Science student specializing in Computer Vision pipelines and scalable backend systems. Combining solid software engineering foundations with deep learning to build production-grade, data-driven solutions.",
    typewriterRoles: [
      "Computer Vision & YOLOv8",
      "Backend Architecture & APIs",
      "Deep Learning (PyTorch)",
      "Scalable Web Services"
    ],
    status: {
      active: true,
      text: "Open to Opportunities"
    },
    location: "Malang, Indonesia",
    socials: {
      github: "https://github.com/mnovaldr",
      instagram: "https://instagram.com/mnvldr_",
      email: "mailto:halo@mnovaldr.dev",
      linkedin: "https://www.linkedin.com/in/mnovaldr",
      resume: "https://s.mnovaldr.dev/RESUME"
    }
  },
  focusAreas: [
    {
      title: "Backend Engineering",
      subtitle: "Scalable Architecture & APIs",
      icon: "fa-solid fa-server",
      description: "Engineering robust, scalable web backends and REST APIs with Django (Python) and Laravel (PHP). Experienced in relational database schema design, query optimization, and deploying AI models into production environments.",
      tags: ["Django", "Laravel", "PostgreSQL", "MySQL", "REST APIs"]
    },
    {
      title: "Deep Learning & Vision",
      subtitle: "Computer Vision Pipelines",
      icon: "fa-solid fa-brain",
      description: "Building real-time computer vision and object detection workflows using PyTorch and YOLOv8. Focused on end-to-end implementation from dataset curation and transfer learning to low-latency model inference.",
      tags: ["PyTorch", "YOLOv8", "OpenCV", "NumPy", "Transfer Learning"]
    }
  ],
  projects: [
    {
      title: "Sirekap MCC",
      category: "Analytics & Management Platform",
      description: "Backend analytics and event data management system developed for Malang Creative Center (MCC). Delivers interactive data visualization dashboards, creative economy sub-sector consolidation, and database query optimization.",
      url: "https://sirekap.mnovaldr.dev",
      githubUrl: "https://github.com/mnovaldr",
      image: "dist/img/projects/sirekap.jpg",
      architecture: "Laravel 10 / FilamentPHP / PostgreSQL / TailwindCSS",
      highlights: [
        "Interactive analytics visualization for creative economy sub-sectors",
        "Optimized PostgreSQL queries across multi-table event records",
        "Automated event management and data recapitulation system"
      ],
      tags: ["Laravel", "FilamentPHP", "PostgreSQL", "TailwindCSS"]
    },
    {
      title: "Mama Frozen E-commerce",
      category: "E-Commerce System",
      description: "Digital commerce platform for a frozen food SME to modernize product catalogs and online customer orders, featuring dynamic inventory management and an administrative transaction dashboard.",
      url: "#",
      githubUrl: "https://github.com/mnovaldr",
      image: "dist/img/projects/mamafrozen.jpg",
      architecture: "PHP 8 / Laravel MVC / MySQL / Bootstrap / Tailwind",
      highlights: [
        "Product catalog with dynamic category filtering and search",
        "Integrated customer ordering workflow tied to admin control center",
        "Automated inventory tracking and transaction logging"
      ],
      tags: ["PHP", "Laravel", "MySQL"]
    },
    {
      title: "RestoranQue",
      category: "Point of Sale (POS) & Restaurant Management",
      description: "Point of Sales (POS) and restaurant management system featuring multi-level role access (Admin, Cashier, Customer), dynamic menu ordering, real-time transaction billing, and receipt & sales report printing.",
      url: "https://github.com/mnovaldr",
      githubUrl: "https://github.com/mnovaldr",
      image: "dist/img/projects/restoranque.jpg",
      architecture: "PHP Native / MySQL / Bootstrap 5 / AdminLTE",
      highlights: [
        "Multi-level role access control (Admin, Cashier, Customer)",
        "Dynamic menu ordering and real-time transaction billing workflow",
        "Automated receipt generation and comprehensive sales report printing"
      ],
      tags: ["PHP", "MySQL", "AdminLTE", "Bootstrap", "POS"]
    }
  ],
  techStack: [
    { name: "Python", category: "Languages", isHighlighted: true },
    { name: "PHP", category: "Languages", isHighlighted: false },
    { name: "JavaScript", category: "Languages", isHighlighted: false },
    { name: "SQL", category: "Languages", isHighlighted: false },
    { name: "PyTorch", category: "AI & ML", isHighlighted: true },
    { name: "YOLOv8", category: "AI & ML", isHighlighted: true },
    { name: "Pandas & NumPy", category: "AI & ML", isHighlighted: false },
    { name: "Django", category: "Backend", isHighlighted: true },
    { name: "Laravel", category: "Backend", isHighlighted: true },
    { name: "PostgreSQL", category: "Databases", isHighlighted: false },
    { name: "MySQL", category: "Databases", isHighlighted: false },
    { name: "Git", category: "Tools", isHighlighted: false }
  ]
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
