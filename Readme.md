# Sajid Hossain – Software Developer Portfolio

This is the repository for the personal portfolio website of **Sajid Hossain**, a Software Developer specializing in building modern, performant, and scalable web applications using technologies like React, Next.js, TypeScript, and Tailwind CSS.

The website is built with **Next.js 16 (App Router)**, showcasing professional projects, skills, experience, and 1:1 meeting booking through Calendly (Google Meet).

---

## 🌐 Live Site

*   **Portfolio Website:** [https://sajid-hossain-front-end-developer-p.vercel.app](https://sajid-hossain-front-end-developer-p.vercel.app)
*   **Booking / Calendly:** [Book a 1:1 meeting (Google Meet)](https://calendly.com/sajidhossain8272/broke-innovation-mentor)

---

## ✨ Features & Sections

*   **Design System:** Full light-theme design (typography scale, cards, borders, responsive breakpoints, reduced-motion support) applied across the entire site.
*   **Hero:** Fixed glass navigation, headline introduction and an AI / Automation system card (Observe → Reason → Act).
*   **What I Do:** Product-lifecycle introduction — from idea to working system.
*   **Selected Work:** Project showcase featuring AgentBroko, Plzwork, QUULIX, GrafiXr, Notepad OS and dev-apply.
*   **AI Section:** AI-native capabilities — agents, automation, local AI and AI products.
*   **Capabilities:** Engineering, AI & Automation, and Product & Growth skill groups.
*   **Experience:** Career timeline for roles at **Panorama Management Advisory Services** (Software Developer, Software Associate).
*   **Philosophy & About:** Post-launch mindset quote plus an about preview.
*   **Meeting Booking:** Calendly integration for scheduling a **1:1 Google Meet** from the nav, CTA card and footer (WhatsApp contact options removed).
*   **Big Footer:** Large "Sajid Hossain." statement typography with menu links, social links and a Book a meeting CTA.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 16.2.6 (App Router)](https://nextjs.org/) with Turbopack support
*   **Runtime/Environment:** Node.js 18+, React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (v3.4+)
*   **Animations:** Framer Motion
*   **Icons:** Lucide React
*   **Components:** Custom ShadCN-like components built on Radix UI primitives
*   **Deployment:** Vercel

---

## 🚀 Getting Started Locally

### Prerequisites

*   Node.js (v18.x or higher)
*   npm (v10.x or higher)

### Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sajidhossain8272/sajidev.git
    cd sajidev
    ```

2.  **Install dependencies:**

    This project includes a `.npmrc` configured with `legacy-peer-deps=true` to ensure clean resolution of React 19 peer dependencies:

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4.  **Build for production:**

    ```bash
    npm run build
    ```

---

## 📁 Project Structure

```
├── app/                     # Next.js App Router (pages, layout, routing)
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Custom & reusable UI components
│   ├── ui/                 # Core ShadCN / Radix primitives
│   ├── site-header.tsx
│   ├── hero-section.tsx
│   ├── intro-section.tsx
│   ├── work-section.tsx
│   ├── ai-section.tsx
│   ├── capabilities-section.tsx
│   ├── experience-section.tsx
│   ├── philosophy-section.tsx
│   ├── about-section.tsx
│   ├── final-cta-section.tsx
│   ├── footer.tsx
│   ├── calendly-context.tsx
│   └── calendly-modal.tsx
├── public/                 # Static assets (images, og-image.png, Sajid-Hossain-Resume.pdf)
├── styles/                 # Global styles and tailwind directives
├── hooks/                  # Custom React hooks
├── lib/                    # Helper functions & utility methods
├── .npmrc                  # npm config for legacy-peer-deps
└── Readme.md               # Repository documentation
```

---

## 📬 Contact & Socials

*   **Name:** Sajid Hossain  
*   **Email:** [sajidhossain8272@gmail.com](mailto:sajidhossain8272@gmail.com)
*   **LinkedIn:** [https://www.linkedin.com/in/brokephilanthropist](https://www.linkedin.com/in/brokephilanthropist/)  
*   **GitHub:** [https://github.com/sajidhossain8272](https://github.com/sajidhossain8272)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
