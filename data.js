window.PORTFOLIO_DATA = {
  profile: {
    name: "Muhammad Noval Dwi Ramadhani",
    nickname: "Noval",
    tagline: "Hi, I'm Noval.",
    role: "AI & Backend Engineer",
    bio: "Mahasiswa Teknik Informatika Semester 6 dengan spesialisasi pada <span id='typewriter' class='text-primary font-semibold border-r-2 border-accent animate-pulse pr-1'></span>. Menggabungkan fondasi Software Engineering yang kuat dengan kemampuan analisis data modern untuk menciptakan solusi cerdas yang aplikatif.",
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
      description: "Membangun aplikasi web yang <i>scalable</i> menggunakan <span class='text-primary font-semibold'>Django (Python)</span> dan <span class='text-primary font-semibold'>Laravel (PHP)</span>. Berpengalaman mengintegrasikan model AI ke dalam sistem web.",
      accentClass: "text-blue-400 bg-blue-500/10 hover:border-blue-500/30 group-hover:text-blue-400 shadow-blue-500/5",
      glowColor: "rgba(59, 130, 246, 0.15)",
      glowClass: "glow-card-blue",
      rgbColor: [59, 130, 246]
    },
    {
      title: "Deep Learning",
      icon: "fa-solid fa-brain",
      description: "Mengembangkan model deteksi objek secara <i>real-time</i> menggunakan <span class='text-primary font-semibold'>YOLOv8</span> dan <span class='text-primary font-semibold'>PyTorch</span>. Fokus pada implementasi <i>end-to-end</i>, mulai dari <i>training dataset</i> hingga tahap <i>deployment</i>.",
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
      githubUrl: "https://github.com/mnovaldr",
      image: "dist/img/projects/sirekap.jpg",
      architecture: "Laravel 10 • FilamentPHP • PostgreSQL • TailwindCSS",
      highlights: [
        "Dashboard visualisasi analitik interaktif sub-sektor ekonomi kreatif",
        "Optimasi query database PostgreSQL & rekapitulasi data multi-tabel",
        "Sistem manajemen event & pelaporan otomatis berbasis web"
      ],
      tags: ["Laravel", "FilamentPHP", "PostgreSQL", "TailwindCSS"],
      glowColor: "rgba(16, 185, 129, 0.2)",
      glowClass: "glow-card-emerald",
      rgbColor: [16, 185, 129]
    },
    {
      title: "Mama Frozen E-commerce",
      description: "Platform e-commerce untuk UMKM makanan beku (<i>frozen food</i>) guna mendigitalisasi proses katalog produk serta sistem pemesanan online.",
      url: "https://mamafrozen.000webhostapp.com/",
      githubUrl: "https://github.com/mnovaldr",
      image: null,
      architecture: "PHP 8 • Laravel MVC • MySQL • Bootstrap / Tailwind",
      highlights: [
        "Digitalisasi katalog produk frozen food dengan filter kategori dinamis",
        "Alur pemesanan online terintegrasi langsung ke admin dashboard",
        "Manajemen stok produk otomatis dan pencatatan transaksi"
      ],
      tags: ["PHP", "Laravel", "MySQL"],
      glowColor: "rgba(59, 130, 246, 0.2)",
      glowClass: "glow-card-blue",
      rgbColor: [59, 130, 246]
    },
    {
      title: "RestoranQue",
      description: "Aplikasi pencarian katalog restoran berbasis Progressive Web App (PWA) dengan fitur <i>offline caching</i>, daftar favorit, serta pengujian terintegrasi (<i>integration testing</i>).",
      url: "https://github.com/mnovaldr",
      githubUrl: "https://github.com/mnovaldr",
      image: null,
      architecture: "Vanilla JavaScript (ES6+) • IndexedDB • Service Worker • Webpack",
      highlights: [
        "Offline-first PWA caching dengan Service Worker & IndexedDB",
        "Fitur review customer, pencarian restoran real-time & simpan restoran favorit",
        "End-to-End & Integration Testing untuk keandalan fungsional aplikasi"
      ],
      tags: ["JavaScript", "PWA", "IndexedDB"],
      glowColor: "rgba(168, 85, 247, 0.2)",
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
