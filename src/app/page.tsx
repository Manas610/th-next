import HeroSection from "@/components/HeroSection";
import { TracingBeam } from "../components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <TracingBeam>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
      </main>
      </TracingBeam>
    </>
  );
}
