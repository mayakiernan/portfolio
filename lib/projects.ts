export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  href: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "onk",
    title: "The ONK Collection",
    subtitle: "Fall 2024 — Ceramics",
    coverImage: "/onk/main-image.jpg",
    href: "/onk",
    tags: ["Ceramics", "Product Design"],
  },
];
