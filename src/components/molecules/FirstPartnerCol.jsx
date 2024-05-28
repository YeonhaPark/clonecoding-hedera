import { useEffect, useRef, useState } from "react";

export default function FirstPartnerCol() {
  const colRef = useRef();
  const [colPosition, setColPosition] = useState("");
  // const [bannerOn, setBannerOn] = useState(false);
  // function callback(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       console.log("Element is in the viewport");
  //       setBannerOn(true);
  //     } else {
  //       console.log("Element is not in the viewport");
  //     }
  //   });
  // }

  useEffect(() => {
    // const observer = new IntersectionObserver(callback);
    // const lab = document.getElementById("eqty-lab");
    // observer.observe(lab);

    function handleScroll() {
      if (colRef.current.getBoundingClientRect().y < 160) {
        setColPosition("partner-col-fixed");
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
          <div
            className={`partner-col-text ${colPosition}
            }`}
          >
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
