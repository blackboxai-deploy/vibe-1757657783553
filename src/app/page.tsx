import ElementorHero from "@/components/ElementorHero";
import ElementorFeatures from "@/components/ElementorFeatures";
import ElementorPackages from "@/components/ElementorPackages";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ElementorHero />
      <ElementorFeatures />
      <ElementorPackages />
    </main>
  );
}