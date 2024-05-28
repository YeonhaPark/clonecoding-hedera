import { Fragment } from "react";
import Button from "../atoms/Button";
import PartnerLogo from "../atoms/PartnerLogo";

export default function Network({ title, description, btnText, logos }) {
  return (
    <Fragment>
      <h2 className="network tracking-[-1.5px] text-3xl leading-[42px] text-gray-900">
        {title}
      </h2>
      <p className="text-[15px] text-gray-900 leading-6 mt-5">{description}</p>
      <Button
        hierarchy="primary-reverse"
        classnames={["text-white", "mt-[50px]"]}
      >
        {btnText}
      </Button>
      <div className="flex flex-wrap h-auto gap-[10px] mt-10">
        {logos.map((logo) => (
          <PartnerLogo key={logo.name} name={logo.name} url={logo.url} />
        ))}
      </div>
      <div className="flex flex-wrap h-auto gap-[10px] mt-10">
        {logos.map((logo) => (
          <PartnerLogo key={logo.name} name={logo.name} url={logo.url} />
        ))}
      </div>
    </Fragment>
  );
}
