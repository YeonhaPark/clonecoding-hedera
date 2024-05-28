import TypingEffect from "../molecules/TypingEffect";
import Button from "./Button";
const texts = [
  "cross-boder\nremittance",
  "stablecoins",
  "financial assets",
  "digital assets",
  "real estate",
];
export default function HeroText() {
  return (
    <div className="hero-text pt-[150px] pb-[130px] relative text-white">
      <h1>
        Real World Asset
        <br />
        Tokenization for
        <br />
        <TypingEffect texts={texts} speed={130} />
        <span className="cursor"></span>
      </h1>
      <div className="mt-10 max-w-[750px] text-2xl leading-8 text-white tracking-[-.85px]">
        Hedera enables seamless tokenization of real-world and digital assets at
        scale, offering unmatched performance, security, and compliance for
        thriving tokenized economies.
      </div>
      <div className="mt-10 flex gap-[10px] flex-wrap">
        <Button hierarchy="primary-reverse">LEARN MORE</Button>
        <Button hierarchy="white">DOWNLOAD EBOOK</Button>
      </div>
    </div>
  );
}
