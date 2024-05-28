import FirstPartnerCol from "../molecules/FirstPartnerCol";
import SecondPartnerCol from "../molecules/SecondPartnerCol";
export default function PartnerSection() {
  return (
    <section>
      <div className="py-0 px-[6.25%] flex gap-[90px]">
        <FirstPartnerCol />
        <SecondPartnerCol />
      </div>
    </section>
  );
}
