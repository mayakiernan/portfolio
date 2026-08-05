import SiteNav from "@/components/shared/SiteNav";
import HeroSection from "@/components/home/HeroSection";
import ProjectLinks from "@/components/home/ProjectLinks";
import SiteFooter from "@/components/shared/SiteFooter";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <SiteNav variant="hero" />
      <HeroSection />
      <ProjectLinks />
      <SiteFooter />
    </main>
  );
}
