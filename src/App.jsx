import DigitSection from "./components/organisms/DigitsSection";
import HeroSection from "./components/organisms/HeroSection";
import PartnerSection from "./components/organisms/PartnerSection";
import Layout from "./components/templates/Layout";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <DigitSection />
      <PartnerSection />
    </Layout>
  );
}
