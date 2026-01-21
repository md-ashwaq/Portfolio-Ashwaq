import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "isl-translator",
    title: "ISL Translator with Multi Language Subtitles",
    description: "Developed a text and audio-based system to convert inputs into Indian Sign Language (ISL) translations with integrated multilingual subtitle generation for broader accessibility in regional communities.",
    problemSolved: "Bridging communication gaps for the hearing-impaired community by providing real-time ISL translation with multilingual subtitle support, enabling accessibility across diverse regional languages.",
    technologies: ["Python", "Machine Learning", "Natural Language Processing", "Multimedia Processing", "Django"],
    metrics: [
      { label: "Publication", value: "International Journal of Multidisciplinary Engineering" },
      { label: "Accessibility Impact", value: "Multi-regional language support" },
    ],
    githubUrl: "https://github.com/md-ashwaq",
    period: {
      start: "Jan 2025",
      end: "April 2025",
    },
  },
  {
    id: "cloud-storage-safety",
    title: "Enhancing Cloud Storage Safety for Massive Data",
    description: "Implemented encryption and access controls for secure cloud storage. Designed scalable solutions for data integrity and protection, identifying and mitigating risks in cloud storage systems.",
    problemSolved: "Addressing security vulnerabilities in cloud storage systems handling massive datasets by implementing robust encryption mechanisms and access control policies, ensuring data integrity and protection against unauthorized access.",
    technologies: ["Cloud Computing", "Encryption", "Access Control", "Data Security", "System Design"],
    metrics: [
      { label: "Security Enhancement", value: "Policy-driven data sharing" },
      { label: "Scalability", value: "Massive data handling" },
    ],
    githubUrl: "https://github.com/md-ashwaq",
    period: {
      start: "May 2024",
      end: "Sep 2024",
    },
  },
  {
    id: "sonata-fullstack",
    title: "Full Stack Development - Enterprise Applications",
    description: "Built websites using Java Full stack, including connecting front-end displays with back-end systems. Gained practical knowledge of software development workflows by observing team processes, attending training sessions, and completing guided learning assignments.",
    problemSolved: "Delivered enterprise-grade full-stack solutions by seamlessly integrating frontend interfaces with robust backend systems, following industry best practices and agile development methodologies.",
    technologies: ["Java", "Spring Boot", "RESTful APIs", "Frontend Integration", "MySQL", "MongoDB"],
    metrics: [
      { label: "System Integration", value: "100% frontend-backend connectivity" },
      { label: "Code Quality", value: "Enterprise-grade standards" },
    ],
    period: {
      start: "Dec 2024",
      end: "Mar 2025",
    },
  },
];
