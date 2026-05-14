import Hero from "@/components/home/Hero";
import CaseSummary from "@/components/home/CaseSummary";
import WhyItMatters from "@/components/home/WhyItMatters";
import TimelinePreview from "@/components/home/TimelinePreview";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CaseSummary />
      <WhyItMatters />
      <TimelinePreview />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
