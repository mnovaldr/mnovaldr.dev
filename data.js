window.PORTFOLIO_DATA = {
  profile: {
    name: "Muhammad Noval Dwi Ramadhani",
    nickname: "Noval",
    tagline: "Hi, I'm Noval.",
    role: "AI & Backend Engineer",
    bio: "Mahasiswa Teknik Informatika Semester 6 dengan spesialisasi pada <span id='typewriter' class='text-white font-semibold border-r-2 border-accent animate-pulse pr-1'></span>. Menggabungkan fondasi Software Engineering yang kuat dengan kemampuan analisis data modern untuk menciptakan solusi cerdas yang aplikatif.",
    typewriterRoles: [
      "Artificial Intelligence (Computer Vision)",
      "Backend Engineering",
      "Deep Learning Models",
      "Scalable Web APIs"
    ],
    status: {
      active: true,
      text: "Open for Internship"
    },
    socials: {
      github: "https://github.com/mnovaldr",
      instagram: "https://instagram.com/mnvldr_",
      email: "mailto:halo@mnovaldr.dev",
      linkedin: "https://www.linkedin.com/in/mnovaldr",
      resume: "https://drive.google.com/file/d/1Ij-yLprYCAYJWb7Hj9oCpgF2FF3Yk8ya/view?usp=sharing"
    }
  },
  focusAreas: [
    {
      title: "Backend Engineering",
      icon: "fa-solid fa-server",
      description: "Membangun aplikasi web yang <i>scalable</i> menggunakan <span class='text-white'>Django (Python)</span> dan <span class='text-white'>Laravel (PHP)</span>. Berpengalaman mengintegrasikan model AI ke dalam sistem web.",
      accentClass: "text-blue-400 bg-blue-500/10 hover:border-blue-500/30 group-hover:text-blue-400 shadow-blue-500/5",
      glowColor: "rgba(59, 130, 246, 0.15)",
      glowClass: "glow-card-blue",
      rgbColor: [59, 130, 246]
    },
    {
      title: "Deep Learning",
      icon: "fa-solid fa-brain",
      description: "Mengembangkan model deteksi objek secara <i>real-time</i> menggunakan <span class='text-white'>YOLOv8</span> dan <span class='text-white'>PyTorch</span>. Fokus pada implementasi <i>end-to-end</i>, mulai dari <i>training dataset</i> hingga tahap <i>deployment</i>.",
      accentClass: "text-purple-400 bg-purple-500/10 hover:border-purple-500/30 group-hover:text-purple-400 shadow-purple-500/5",
      glowColor: "rgba(168, 85, 247, 0.15)",
      glowClass: "glow-card-purple",
      rgbColor: [168, 85, 247]
    }
  ],
  projects: [
    {
      title: "Sirekap MCC",
      description: "Sistem backend analitik dan manajemen data event untuk Malang Creative Center (MCC). Menampilkan dashboard visualisasi data interaktif, rekapitulasi sub-sektor ekraf, dan optimasi performa query database.",
      url: "https://sirekap.mnovaldr.dev",
      tags: ["Laravel", "FilamentPHP", "PostgreSQL", "TailwindCSS"],
      glowColor: "rgba(16, 185, 129, 0.2)", // Emerald green glow
      glowClass: "glow-card-emerald",
      rgbColor: [16, 185, 129]
    },
    {
      title: "Mama Frozen E-commerce",
      description: "Platform e-commerce untuk UMKM makanan beku (<i>frozen food</i>) guna mendigitalisasi proses katalog produk serta sistem pemesanan online.",
      url: "https://mamafrozen.000webhostapp.com/",
      tags: ["PHP", "Laravel", "MySQL"],
      glowColor: "rgba(59, 130, 246, 0.2)", // Blue glow
      glowClass: "glow-card-blue",
      rgbColor: [59, 130, 246]
    },
    {
      title: "RestoranQue",
      description: "Aplikasi pencarian katalog restoran berbasis Progressive Web App (PWA) dengan fitur <i>offline caching</i>, daftar favorit, serta pengujian terintegrasi (<i>integration testing</i>).",
      url: "#",
      tags: ["JavaScript", "PWA"],
      glowColor: "rgba(168, 85, 247, 0.2)", // Purple glow
      glowClass: "glow-card-purple",
      rgbColor: [168, 85, 247]
    }
  ],
  techStack: [
    { name: "Python", isHighlighted: true },
    { name: "PyTorch", isHighlighted: false },
    { name: "YOLOv8", isHighlighted: false },
    { name: "Pandas & NumPy", isHighlighted: false },
    { name: "Django", isHighlighted: true },
    { name: "Laravel", isHighlighted: false },
    { name: "SQL", isHighlighted: false },
    { name: "Git", isHighlighted: false }
  ]
};

// Export data if modules are used, or make it global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.PORTFOLIO_DATA;
}
