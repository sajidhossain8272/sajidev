import HomeClient from "./HomeClient";
import { Metadata } from "next";

const baseUrl = "https://sajid-hossain-front-end-developer-p.vercel.app"; // Adjust if using a custom domain

export const metadata: Metadata = {
  title: "Sajid Hossain — Software Developer, AI Builder & Product Engineer",
  description:
    "Sajid Hossain is a software developer and product builder focused on AI agents, automation, SaaS, modern web applications and practical digital products.",
  keywords:
    "Sajid Hossain, Software Developer, Front-end Developer, React Developer, Next.js, TypeScript, Tailwind CSS, Web Developer, SaaS, Portfolio, Web Design, UI Developer, JavaScript, Developer Portfolio",
  authors: [{ name: "Sajid Hossain" }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Sajid Hossain — Software Developer, AI Builder & Product Engineer",
    description:
      "AI agents, automation, SaaS, modern web applications and practical digital products by Sajid Hossain.",
    url: baseUrl,
    siteName: "Sajid Hossain Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sajid Hossain – Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajid Hossain — Software Developer, AI Builder & Product Engineer",
    description:
      "AI agents, automation, SaaS, modern web applications and practical digital products by Sajid Hossain.",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
      <HomeClient />
  );
}

