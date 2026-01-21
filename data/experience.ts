import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "sonata-software",
    company: "Sonata Software",
    position: "Full Stack Development Intern",
    location: "Hyderabad",
    period: {
      start: "Dec 2024",
      end: "Mar 2025",
    },
    achievements: [
      "Built websites using Java Full stack, including connecting front-end displays with back-end systems",
      "Gained practical knowledge of software development workflows by observing team processes",
      "Attended training sessions and completed guided learning assignments",
      "Contributed to enterprise-grade application development",
    ],
    technologies: ["Java", "Spring Boot", "RESTful APIs", "MySQL", "MongoDB", "Frontend Integration"],
  },
  {
    id: "datapoint-info",
    company: "Datapoint Info Solutions",
    position: "Short-Term Trainee - Internship",
    location: "Hyderabad",
    period: {
      start: "Aug 2024",
      end: "Sep 2024",
    },
    achievements: [
      "Created web applications using Django and connected them to databases for storing information",
      "Learned how to put Django websites online and make them available to users",
      "Implemented database integration and data persistence solutions",
    ],
    technologies: ["Python", "Django", "Database Management", "Web Deployment"],
  },
  {
    id: "simco-calibration",
    company: "SIMCO Calibration Laboratory",
    position: "Calibration Engineer (Internship - Diploma)",
    location: "Hyderabad",
    period: {
      start: "Jan 2022",
      end: "Jun 2022",
    },
    achievements: [
      "Ensured precision and accuracy by calibrating instruments to meet industry standards",
      "Diagnosed and troubleshot instrumentation issues using a structured root-cause approach",
      "Worked within quality and compliance requirements for reliable measurement outcomes",
    ],
    technologies: [
      "Calibration",
      "Measurement Tools",
      "Instrumentation Troubleshooting",
      "Quality Assurance",
      "Standards & Compliance",
    ],
  },
];
