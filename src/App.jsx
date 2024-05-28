import DigitSection from "./components/organisms/DigitsSection";
import HeroSection from "./components/organisms/HeroSection";
import Layout from "./components/templates/Layout";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <DigitSection />
    </Layout>
  );
}
