import { useEffect, useRef, useState } from "react";

export default function FirstPartnerCol() {
  const colRef = useRef();
  const [colPosition, setColPosition] = useState("");
  useEffect(() => {
    function handleScroll() {
      console.log(colRef.current.getBoundingClientRect());
      if (colRef.current.getBoundingClientRect().y < 160) {
        setColPosition("fixed");
        console.log("fixe!");
      } else {
        setColPosition("");
      }
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative border-gray-900 border-r-[3px]  w-[525px]">
      <div
        className="w-[525px] overflow-hidden relative -z-10"
        id="partner-col-first"
        ref={colRef}
      >
        <div>
          <img
            className="w-[103%] h-[103%]"
            src="/assets/home/net/HH-Homepage-Desktop-Lines-retina.webp"
            alt="net"
          />
        </div>
        <div className="overflow-hidden h-full w-[525px]"></div>
        <div className="absolute partner-col-first">
          <div className={`partner-col-text ${colPosition}`}>
            <p>
              <strong className="font-semibold">A responsibly governed</strong>{" "}
              decentralized network
              <br />
              <br />
            </p>
            <p className="mb-16">
              <strong className="font-semibold">With ecosystems </strong>
              <strong className="font-semibold">built </strong> by the community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
