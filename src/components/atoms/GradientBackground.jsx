export default function GradientBackground() {
  return (
    <div>
      <div className="flex justify-center items-center absolute inset-0">
        <img
          className="animate-rotate"
          src="/assets/home/rwa/RWA-Gradient-Homepage-Bottom.webp"
          alt="bottom"
        />
      </div>
      <div className="flex justify-center items-center absolute inset-0 top-[900px]">
        <img
          className="mix-blend-screen animate-rotate-reverse"
          src="/assets/home/rwa/RWA-Gradient-Homepage-Middle.webp"
          alt="Middle"
        />
      </div>
      <div className="mix-blend-screen left-1/2 flex justify-center items-center absolute inset-0">
        <img
          className="animate-[rotate_200s_linear_infinite] scale-60"
          src="/assets/home/rwa/RWA-Gradient-Homepage-Top.webp"
          alt="Top"
        />
      </div>
    </div>
  );
}
