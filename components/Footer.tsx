"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dracula-current/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-dracula-comment text-sm font-mono">
            &copy; {currentYear} Ashwaq Masumbaigari. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/md-ashwaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-comment hover:text-dracula-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashwaq-masumbaigari-646201225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dracula-comment hover:text-dracula-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:md.ashwaq.2609@gmail.com"
              className="text-dracula-comment hover:text-dracula-cyan transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-dracula-comment font-mono">
          Built with Next.js 16, Tailwind CSS & Framer Motion
        </div>
      </div>
    </footer>
  );
}
