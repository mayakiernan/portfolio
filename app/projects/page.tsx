import type { Metadata } from "next";
import SiteHeader from "@/components/shared/SiteHeader";
import SiteFooter from "@/components/shared/SiteFooter";
import ProjectsPageContent from "@/components/projects/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Maya Kiernan.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectsPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
