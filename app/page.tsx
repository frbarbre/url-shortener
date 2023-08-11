import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-[#F2F2F2] px-[24px] md:px-[48px]">
        <Search />
        <Statistics />
      </div>
      <CTA />
    </main>
  );
}
