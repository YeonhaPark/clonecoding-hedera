import DigitSection from "./components/organisms/DigitsSection";
import EQTYLabSection from "./components/organisms/EQTYLabSection";
import HeroSection from "./components/organisms/HeroSection";
import PartnerSection from "./components/organisms/PartnerSection";
import Layout from "./components/templates/Layout";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <DigitSection />
      <PartnerSection />
      <EQTYLabSection />
    </Layout>
  );
}
