# DESIGN SPECIFICATION: TECHNICAL NEO-BRUTALIST BLUEPRINT

**Project:** Muhammad Noval Dwi Ramadhani — Personal Developer Portfolio  
**Visual Direction:** Technical Neo-Brutalis Grid + Blueprint Monospace HUD  
**Theme Model:** Light Mode Default (`#F2F1EE`) with Native OLED Dark Mode Toggle (`#09090B`)  
**Layout Model:** Modular Blueprint Grid (1px Border Docked Containers, 0px Radius)  
**Status:** Implemented & Cleaned  
**Version:** 4.2.0  

---

## 1. Core Visual & Architectural Philosophy

### 1.1 The Concept: "Technical Neo-Brutalist Grid"
The portfolio follows a precise, modular engineering blueprint aesthetic inspired by technical specification sheets, CAD drawings, and minimal developer portfolios (*Stripe Press*, *Paco Coursey*, *Rauno Freiberg*).

* **Strict 1px Grid Borders:** Clean hairline separation between modules (`border-line`) with zero border radius (`rounded-none`).
* **Light Mode Default:** Warm technical paper/canvas tint (`#F2F1EE`) providing high contrast, with an instant toggle to OLED Dark (`#09090B`).
* **Technical Typography:** Archivo (Display Headings), JetBrains Mono (HUD/Metadata/Navigation), and Plus Jakarta Sans (Body Prose).
* **Direct Navigation Structure:**
  - `01 // Works` (Selected Projects & Filter Bar)
  - `02 // Focus` (Core Engineering Disciplines)
  - `03 // Tech Stack` (Categorized Languages, Libraries, Frameworks & Databases)
  - `04 // Contact` (Transmission Directory & Direct Channels)
* **CLI Terminal:** Interactive keyboard-friendly console accessible via `Ctrl+K` / `⌘K` or top HUD button.

### 2.1 Responsive Reflow Rules
1. **Desktop (`≥ 1024px`):**
   * Left Column: `w-5/12` or `w-[420px] xl:w-[460px]`, `sticky top-0 h-screen flex flex-col justify-between`.
   * Right Column: `w-7/12` or `flex-1`, natural window scrolling.
2. **Tablet (`768px – 1023px`):**
   * Two-column split maintained, but left column width reduced (`w-[320px]`), padding tightened (`px-6 py-10`), and navigation text condensed.
3. **Mobile (`< 768px`):**
   * Reflows into a single, cohesive vertical document.
   * Identity panel becomes the prologue at the top of the page.
   * Section navigation collapses into a sticky top utility bar or in-page anchor strip.
   * Right column content stacks seamlessly below the prologue.
   * Zero horizontal overflow at any width down to `320px`.
   * Minimum `44px x 44px` touch targets for all interactive links and buttons.

---

## 3. Left Column: The Editorial Identity Panel

The left panel is designed as a calm, confident **editorial masthead**, not a noisy dashboard:

1. **Identity & Name:**
   * `Muhammad Noval Dwi Ramadhani` (Large sans-serif display, font weight 700, tight tracking).
2. **Title & Specialization:**
   * `AI & Backend Engineer` (Subtle monospace or semibold sans).
3. **Location & Status Flag:**
   * `Malang, Indonesia` (Verified factual location).
   * Status pill: `● Open for Internship` (Restrained emerald or neutral indicator).
4. **Short Personal Introduction:**
   * Concise narrative:
     *"Informatics student at Universitas, specializing in end-to-end Computer Vision pipelines (PyTorch, YOLOv8) and scalable backend web architectures (Django, Laravel, PostgreSQL). Focused on turning deep learning models into reliable, production-ready web services."*
5. **Section Navigation (Scrollspy):**
   * Monospace editorial index with active indicator:
     * `01` `Selected Works`
     * `02` `Core Disciplines`
     * `03` `Live Telemetry`
     * `04` `Technical Arsenal`
     * `05` `Contact`
   * Hovering or scrolling highlights the active section smoothly.
6. **Communications & Socials:**
   * Clean text or icon links with labels:
     * `GitHub` (`github.com/mnovaldr`)
     * `LinkedIn` (`linkedin.com/in/mnovaldr`)
     * `Instagram` (`instagram.com/mnvldr_`)
     * `Email` (`halo@mnovaldr.dev`)
   * Primary action: `Download Resume (PDF ↗)` directly linked to your verified Google Drive document.
7. **Developer Signature / CLI Easter Egg:**
   * Anchored at the bottom of the panel:
     `noval@workstation:~$ [:term / ⌘K]`
   * Discrete, non-intrusive prompt that opens the secondary CLI console when clicked or summoned via `⌘K` or `~`.

---

## 4. Right Column: The Editorial Works & Content Stream

The right column presents your work in an **expansive, vertical editorial format**, replacing the generic 3-column card grid:

### 4.1 Vertical Project Sections
Each verified project is presented with generous vertical pacing and 1px hairline separators:

* **Entry Header:**
  * Project number stamp (`01`, `02`, `03`) in monospace.
  * Category stamp (e.g. `ANALYTICS & MANAGEMENT SYSTEM`, `E-COMMERCE SYSTEM`, `PROGRESSIVE WEB APP`).
  * Live status / year stamp (e.g. `2024–2026`).
* **Title & Monospace Stack:**
  * Project title (Large sans-serif, bold, subtle hover color shift).
  * Architecture summary: `Laravel 10 • FilamentPHP • PostgreSQL • TailwindCSS` (JetBrains Mono).
* **Editorial Narrative:**
  * Real, verified description explaining the project's purpose and impact.
  * Bullet-point architectural accomplishments (e.g. query optimization, offline caching, inventory state machines).
* **Action Dock:**
  * `Inspect Architecture ⤢` (Opens the deep preview modal with real screenshot and verified specs).
  * `Launch Demo ↗` (External live link if active).
  * `Source Code ↗` (GitHub repository link).

### 4.2 Verified Projects in Sequence:
1. **01 / Sirekap MCC**
   * Category: Analytics & Event Management System
   * Organization: Malang Creative Center (MCC)
   * Architecture: Laravel 10 • FilamentPHP • PostgreSQL • TailwindCSS
   * Image: `dist/img/projects/sirekap.jpg`
2. **02 / Mama Frozen E-Commerce**
   * Category: SME Frozen Food E-Commerce Platform
   * Architecture: PHP 8 • Laravel MVC • MySQL • Bootstrap / Tailwind
   * Image: `dist/img/projects/mamafrozen.jpg`
3. **03 / RestoranQue**
   * Category: Offline-First Progressive Web App (PWA)
   * Architecture: Vanilla JavaScript (ES6+) • IndexedDB • Service Worker • Webpack
   * Image: `dist/img/projects/restoranque.jpg`

### 4.3 Core Disciplines (Capabilities)
A clean, two-column split contrasting your two main engineering domains:
* **Domain 01: Backend Systems & High-Throughput APIs**
  * Django, Laravel, PostgreSQL, MySQL, REST APIs, and query optimization.
* **Domain 02: Computer Vision & Model Deployment**
  * PyTorch, YOLOv8, OpenCV, NumPy, dataset curation, and inference serving.

### 4.4 Live Workstation Telemetry (Spotify Audio Signal)
* Minimalist live audio pulse powered by the Lanyard WebSocket integration.
* Displays current track, artist, album art, and subtle animated equalizer bars when listening.
* Idle state: Discrete status message ("Workstation Online • Focused in IDE").

### 4.5 Technical Arsenal
* Grouped classification:
  * Languages: Python, PHP, JavaScript, SQL
  * AI & ML: PyTorch, YOLOv8, OpenCV, Pandas, NumPy
  * Frameworks: Django, Laravel, FilamentPHP
  * Databases & Tools: PostgreSQL, MySQL, Git, Docker
* Interactive tag filtering tied directly to the project list.

### 4.6 Contact & Colophon
* Direct invitation for AI & Backend Engineering internship roles.
* Clean email link (`halo@mnovaldr.dev`) and LinkedIn profile.
* Dynamic copyright year and university semester attribution.

---

## 5. Visual Style & Color System

The visual style is **monochrome, dark, and tactile**, using one restrained accent.

### 5.1 Color Tokens

```css
:root, [data-theme="dark"] {
  /* Surfaces & Canvases */
  --bg-page: #0A0A0C;           /* Very dark neutral canvas */
  --bg-card: #121317;           /* Matte panel surface */
  --bg-subtle: #181920;         /* Tag wells, code blocks */
  --bg-hover: #1F212A;          /* Interactive hover highlight */

  /* Hairlines & Separators */
  --rule-subtle: #1E2028;       /* 1px hairline dividers */
  --rule-strong: #2D303C;       /* Active card / boundary borders */

  /* Editorial Typography */
  --ink-primary: #EDEDF0;       /* Near-white primary headlines */
  --ink-secondary: #8E92A0;     /* Muted gray narrative text */
  --ink-muted: #565A68;         /* Footnotes, timestamps, monospace keys */

  /* Restrained Accent (Single Tone Focus) */
  --accent: #10B981;            /* Terminal Emerald (or Technical Indigo #3B82F6) */
  --accent-tint: rgba(16, 185, 129, 0.08); /* Minimal badge tint */
  --accent-border: rgba(16, 185, 129, 0.3);/* Micro focus indicators */

  /* Live Signals */
  --signal-live: #10B981;       /* Active Spotify / Availability indicator */
}

/* Light Mode (Warm Editorial Technical Paper) */
[data-theme="light"] {
  --bg-page: #FAF9F6;           /* Warm technical paper */
  --bg-card: #FFFFFF;           /* Pure white card */
  --bg-subtle: #F1F0EC;         /* Newsprint wells */
  --bg-hover: #E8E6E0;          /* Hover wash */

  --rule-subtle: #E5E4DE;       /* Subtle editorial dividers */
  --rule-strong: #CDCAC0;       /* Active borders */

  --ink-primary: #111215;       /* Deep editorial charcoal */
  --ink-secondary: #4A4D58;     /* Legible editorial body */
  --ink-muted: #7A7E8D;         /* Monospace metadata */

  --accent: #059669;            /* Deep emerald */
  --accent-tint: rgba(5, 150, 105, 0.08);
  --accent-border: rgba(5, 150, 105, 0.3);

  --signal-live: #059669;
}
```

### 5.2 Anti-Slop Visual Rules
* **No Gradients:** Backgrounds and cards are flat, solid, and opaque.
* **No Glassmorphism:** Cards are solid matte surfaces; glass blur is strictly limited to modal backdrops.
* **No Neon / Cyberpunk:** No hot pinks, cyan glow outlines, or arcade wanted stars.
* **No Floating Blobs / 3D Objects:** Background is clean with zero canvas particle clutter.
* **Restrained Corner Radii:** Strict token scale: `rounded-md` (`6px`) for tags/buttons, `rounded-xl` (`12px`) for cards/modals. Zero pill cards.
* **No Fake Metrics / Testimonials:** Every claim is verified from actual project code.

---

## 6. Typography System

| Role | Font Family | Size / Tracking / Leading | Usage |
| :--- | :--- | :--- | :--- |
| **Masthead Display** | `Plus Jakarta Sans` | `2.5rem – 3rem` / `-0.035em` / `1.15` | Full Name in Left Column |
| **Section Titles** | `Plus Jakarta Sans` | `1.5rem – 1.75rem` / `-0.025em` / `1.25` | Project Titles, Major Section Headers |
| **Editorial Lead** | `Plus Jakarta Sans` | `1rem – 1.125rem` / `-0.01em` / `1.7` | Personal Introduction & Lead Statements |
| **Body Prose** | `Plus Jakarta Sans` | `0.9375rem (15px)` / `0` / `1.65` | Project descriptions and highlights |
| **Technical Metadata** | `JetBrains Mono` | `0.8125rem (13px)` / `+0.02em` / `1.5` | Architecture stacks, tag filters, parameters |
| **Index Stamps** | `JetBrains Mono` | `0.6875rem (11px)` / `+0.08em` / `1.4` | `01`, `WIB`, `STATUS`, `noval@workstation` |

---

## 7. CLI / Terminal Easter Egg Specification

1. **Non-Intrusive Integration:**
   * The terminal does **not** take over the screen on load.
   * A discrete prompt sits in the footer of the left identity panel:
     ```
     noval@workstation:~$ [:term / ⌘K]
     ```
   * Clicking the badge or pressing `⌘K`, `Ctrl+K`, or `~` opens an authentic, quiet monochrome slide-over console.
2. **Supported Commands:**
   * `help`: Lists standard workstation commands.
   * `bio`: Outputs personal credentials and university details.
   * `projects`: Lists verified projects (Sirekap, Mama Frozen, RestoranQue) with live links.
   * `skills`: Lists categorized technical competencies.
   * `contact`: Displays email and LinkedIn links.
   * `resume`: Opens the verified Google Drive resume link.
   * `theme [dark|light]`: Switches theme dynamically.
   * `clear`: Clears the console buffer.
   * `exit`: Closes the terminal drawer.

---

## 8. Verification & Delivery Gate Checklist

* [ ] Split-screen layout functions at desktop widths (`≥ 1024px`) with independent right column scrolling.
* [ ] Left panel remains pinned while scrolling through the right content stream.
* [ ] Layout cleanly reflows on tablets (`768px – 1023px`) and converts into a single flowing column on mobile (`< 768px`).
* [ ] Zero horizontal overflow tested across 320px, 375px, 390px, 430px, tablet, and desktop.
* [ ] Project modal preview displays verified screenshots (`sirekap.jpg`, `mamafrozen.jpg`, `restoranque.jpg`) with architecture specs and keyboard trap.
* [ ] CLI terminal easter egg functions via button trigger and `⌘K` / `~` shortcut.
* [ ] Real-time Lanyard Spotify WebSocket streams audio activity without high CPU usage.
* [ ] Zero fake statistics, fake metrics, or invented credentials anywhere on the page.
