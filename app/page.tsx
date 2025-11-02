import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <Items />
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
