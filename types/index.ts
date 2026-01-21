export interface Skill {
  name: string;
  category:
    | "Core Java/Spring"
    | "Python"
    | "Cloud & DevOps"
    | "Databases"
    | "System Design"
    | "Frontend";
  level: "Expert" | "Advanced" | "Intermediate" | "Basic";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  period: {
    start: string;
    end: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  achievements: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issued: string; // e.g. "Feb 2025"
  credentialUrl?: string;
  /**
   * Put files under /public/certificates and reference as `/certificates/<file>`
   * Supported: pdf, jpg, jpeg, png, webp
   */
  file: {
    kind: "pdf" | "image";
    src: string;
  };
}
