"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/Ashwaq_Resume-01.pdf";
    link.download = "Ashwaq_Masumbaigari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dracula-bg/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center gap-3">
              <span className="text-2xl font-bold text-java-orange font-mono">
                &lt;AM/&gt;
              </span>
              <span className="text-lg sm:text-xl font-bold text-dracula-foreground">
                Mohammed Ashwaq
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-dracula-foreground hover:text-java-orange transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-4 py-2 bg-java-orange text-dracula-bg rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              <Download size={18} />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dracula-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dracula-bg border-t border-dracula-current"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-dracula-foreground hover:text-java-orange transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleResumeDownload();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 bg-java-orange text-dracula-bg rounded-lg"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
