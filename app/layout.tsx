import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Response Playbook Automator",
  description: "Automate incident response workflows. Creates incident channels, notifies on-call teams, runs diagnostic scripts, tracks resolution time, and generates post-mortems."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c1f7dbc2-367f-4e96-86a2-7be4b7f1167b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
