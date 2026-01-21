import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammed Ashwaq | Portfolio",
    short_name: "Ashwaq",
    description:
      "Mohammed Ashwaq — Java Developer portfolio (Spring Boot, backend, and scalable systems).",
    start_url: "/",
    display: "standalone",
    background_color: "#1E1E1E",
    theme_color: "#1E1E1E",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

