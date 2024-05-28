import CircleObjet from "../atoms/CircleObjet";
import GradientBackground from "../atoms/GradientBackground";
import HeroText from "../atoms/HeroText";

export default function HeroSection() {
  return (
    <section>
      <div className="hero">
        <GradientBackground />
        <CircleObjet />
        <HeroText />
      </div>
    </section>
  );
}
