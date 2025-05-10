import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features";
import Interface from "@/components/interface";
import CommandLine from "@/components/command-line";
import TeamCollaboration from "@/components/team-collaboration";
import Projects from "@/components/projects";
import Integrations from "@/components/integrations";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Interface />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
