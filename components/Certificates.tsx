"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";
import { ExternalLink, FileText, Image as ImageIcon, X } from "lucide-react";

type PreviewState =
  | { open: false }
  | {
      open: true;
      title: string;
      kind: "pdf" | "image";
      src: string;
    };

export default function Certificates() {
  const [preview, setPreview] = useState<PreviewState>({ open: false });

  const sorted = useMemo(() => {
    // Keep as-is (already in a good order), but defensive copy
    return [...certificates];
  }, []);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates
            <span className="text-dracula-comment font-mono text-2xl ml-4">
              // Verified learning
            </span>
          </h2>
          <p className="text-dracula-comment text-lg">
            Industry certifications and badges (PDF / JPG previews)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((c) => {
            const Icon = c.file.kind === "pdf" ? FileText : ImageIcon;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-dracula-current/20 border border-dracula-current/50 rounded-lg p-6 hover:border-java-orange transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-dracula-foreground">
                      {c.title}
                    </h3>
                    <p className="text-sm text-dracula-cyan">{c.issuer}</p>
                    <p className="text-xs text-dracula-comment font-mono mt-1">
                      Issued: {c.issued}
                    </p>
                  </div>
                  <div className="p-2 bg-dracula-bg/50 rounded border border-dracula-current/40">
                    <Icon className="w-5 h-5 text-java-orange" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setPreview({
                        open: true,
                        title: c.title,
                        kind: c.file.kind,
                        src: c.file.src,
                      })
                    }
                    className="px-4 py-2 rounded-lg bg-dracula-bg border border-dracula-current/60 text-dracula-foreground hover:border-java-orange transition-colors text-sm font-semibold"
                  >
                    Preview
                  </motion.button>

                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dracula-cyan/15 border border-dracula-cyan/30 text-dracula-cyan hover:bg-dracula-cyan/20 transition-colors text-sm font-semibold"
                    >
                      <ExternalLink size={16} />
                      Credential
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Preview modal */}
      <AnimatePresence>
        {preview.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setPreview({ open: false })}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl bg-dracula-bg border border-dracula-current/60 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-dracula-current/50 border-b border-dracula-current/60">
                <div className="text-sm text-dracula-foreground font-semibold truncate">
                  {preview.title}
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setPreview({ open: false })}
                  className="p-2 rounded hover:bg-dracula-bg/60 transition-colors"
                >
                  <X className="w-5 h-5 text-dracula-foreground" />
                </button>
              </div>

              <div className="bg-black/20">
                {preview.kind === "pdf" ? (
                  <object
                    data={preview.src}
                    type="application/pdf"
                    className="w-full h-[75vh]"
                  >
                    <div className="p-6 text-dracula-foreground">
                      PDF preview not supported in this browser.{" "}
                      <a
                        className="text-dracula-cyan underline"
                        href={preview.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open PDF
                      </a>
                      .
                    </div>
                  </object>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview.src}
                    alt={preview.title}
                    className="w-full h-[75vh] object-contain bg-black/40"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

