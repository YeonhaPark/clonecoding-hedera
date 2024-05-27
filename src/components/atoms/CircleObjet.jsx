import { useState, useEffect } from "react";

export default function CircleObjet() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed top-[219px] -right-[5px]">
      <div>
        <img src="/assets/home/rwa/Circles.svg" alt="circles" />
      </div>
      <div
        className={`absolute top-[99px] left-[359px]`}
        style={{ transform: `rotate(${scrollPosition}deg)` }}
      >
        <img src="/assets/home/rwa/Spinning-Element.svg" alt="spin" />
      </div>
      <div className="absolute top-[130px] left-[400px]">
        <img src="/assets/home/rwa/Object.svg" alt="object" />
      </div>
    </div>
  );
}
