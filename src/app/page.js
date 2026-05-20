import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorks";
import TutorSection from "@/components/TutorSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "MediQueue || Home",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <TutorSection />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}
