export type ProjectCategory =
  | "all"
  | "research"
  | "design"
  | "ceramics"
  | "software";

export type ProjectSize = "sm" | "md" | "lg" | "tall" | "wide";

export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "all">;
  coverImage?: string;
  placeholderColor: string;
  size: ProjectSize;
  href: string;
};

export const projectCategories: {
  id: ProjectCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "ceramics", label: "Ceramics" },
  { id: "software", label: "Software" },
];

export const projects: Project[] = [
  {
    slug: "rewild",
    number: "01",
    title: "Re:Wild",
    year: "2025",
    subtitle: "Conservation research platform",
    category: "research",
    placeholderColor: "#1a3d2e",
    size: "tall",
    href: "#",
  },
  {
    slug: "onk",
    number: "02",
    title: "The ONK Collection",
    year: "2024",
    subtitle: "Fall 2024 — Ceramics",
    category: "ceramics",
    coverImage: "/onk/main-image.jpg",
    placeholderColor: "#edebe6",
    size: "wide",
    href: "/onk",
  },
  {
    slug: "preterm",
    number: "03",
    title: "Preterm",
    year: "2024",
    subtitle: "Clinical data visualization",
    category: "research",
    placeholderColor: "#2b2f4a",
    size: "md",
    href: "#",
  },
  {
    slug: "mobile-survey",
    number: "04",
    title: "Mobile Survey Recaps",
    year: "2024",
    subtitle: "Field research tooling",
    category: "software",
    placeholderColor: "#4a3728",
    size: "sm",
    href: "#",
  },
  {
    slug: "soy-data",
    number: "05",
    title: "Soy Data",
    year: "2023",
    subtitle: "Agricultural analytics",
    category: "research",
    placeholderColor: "#5c4a1f",
    size: "lg",
    href: "#",
  },
  {
    slug: "studio-notes",
    number: "06",
    title: "Studio Notes",
    year: "2023",
    subtitle: "Design explorations",
    category: "design",
    placeholderColor: "#3d3d3d",
    size: "md",
    href: "#",
  },
];

export function getProjectsByCategory(category: ProjectCategory) {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

export const gridSizeClasses: Record<ProjectSize, string> = {
  sm: "aspect-[4/5]",
  md: "aspect-[3/4]",
  lg: "aspect-square",
  tall: "aspect-[2/3]",
  wide: "aspect-[16/10]",
};
