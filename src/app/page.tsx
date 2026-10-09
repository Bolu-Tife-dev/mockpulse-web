import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Capabilities } from "@/components/capabilities";
import { RolePreview } from "@/components/role-preview";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <RolePreview />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
