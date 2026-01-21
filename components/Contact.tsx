"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { ContactFormData } from "@/types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "md.ashwaq.2609@gmail.com", href: "mailto:md.ashwaq.2609@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 98661 00289", href: "tel:+919866100289" },
    { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India", href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashwaq-masumbaigari-646201225/" },
    { icon: Github, label: "GitHub", href: "https://github.com/md-ashwaq" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
            <span className="text-dracula-comment font-mono text-2xl ml-4">
              // Let's Connect
            </span>
          </h2>
          <p className="text-dracula-comment text-lg">
            Open to opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-dracula-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-dracula-current/20 border border-dracula-current/50 rounded-lg hover:border-java-orange transition-all duration-300">
                      <Icon className="w-5 h-5 text-java-orange mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-dracula-comment mb-1">{info.label}</p>
                        <p className="text-dracula-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={info.label} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-dracula-foreground mb-4">
                Social Links
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-dracula-current/20 border border-dracula-current/50 rounded-lg hover:border-java-orange transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-dracula-cyan" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-dracula-current/20 border border-dracula-current/50 rounded-lg p-6">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-dracula-foreground mb-2"
                  >
                    Name *
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 bg-dracula-bg border rounded-lg text-dracula-foreground placeholder-dracula-comment focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-dracula-red focus:ring-dracula-red"
                        : "border-dracula-current/50 focus:border-java-orange focus:ring-java-orange"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-dracula-red">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-dracula-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 bg-dracula-bg border rounded-lg text-dracula-foreground placeholder-dracula-comment focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-dracula-red focus:ring-dracula-red"
                        : "border-dracula-current/50 focus:border-java-orange focus:ring-java-orange"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-dracula-red">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-dracula-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    suppressHydrationWarning
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    rows={6}
                    className={`w-full px-4 py-3 bg-dracula-bg border rounded-lg text-dracula-foreground placeholder-dracula-comment focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-dracula-red focus:ring-dracula-red"
                        : "border-dracula-current/50 focus:border-java-orange focus:ring-java-orange"
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-dracula-red">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-java-orange text-dracula-bg rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dracula-bg border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-dracula-green/20 border border-dracula-green rounded-lg text-dracula-green text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-dracula-red/20 border border-dracula-red rounded-lg text-dracula-red text-sm"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
