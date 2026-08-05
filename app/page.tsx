import SiteHeader from "@/components/shared/SiteHeader";
import AboutPreview from "@/components/home/AboutPreview";
import FallingProjects from "@/components/home/FallingProjects";
import SiteFooter from "@/components/shared/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutPreview />
        <FallingProjects />
      </main>
      <SiteFooter />
    </>
  );
}
