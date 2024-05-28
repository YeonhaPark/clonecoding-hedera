import Banner from "../atoms/Banner";
import Button from "../atoms/Button";

export default function EQTYLabSection() {
  return (
    <section>
      <Banner classNames={["eqty-container"]}>
        <div id="eqty-lab">
          <div>
            <img
              className="h-[50px]"
              src="/assets/logos/eqtylab-logo-white.webp"
              alt="eqtylab"
            />
          </div>
          <p className="text-[20px] text-white font-semibold tracking-[-0.5px] mt-5 leading-[18px]">
            DATA-DRIVEN CLIMATE CHANGE DECISION MAKING
          </p>
          <p className="text-[15px] text-white mt-[10px] leading-6 font-normal">
            See how this industry-first blockchain-native integration leverages
            Hedera for AI transparency and equitable climate decisions.
          </p>
          <div className="mt-5">
            <Button hierarchy="primary-reverse" classnames={["text-white"]}>
              Read Case Study
            </Button>
            <Button hierarchy="white" classnames={["ml-[10px]"]}>
              Press Release
            </Button>
          </div>
        </div>
      </Banner>
    </section>
  );
}
