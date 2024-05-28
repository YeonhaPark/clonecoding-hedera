import Network from "../molecules/Network";
import {
  councilBtnText,
  councilDescription,
  councilTitle,
  councilLogos,
  hipsBtnText,
  hipsDescription,
  hipsTitle,
  hipsLogos,
} from "../../constants";

export default function SecondPartnerCol() {
  return (
    <div>
      <Network
        title={councilTitle}
        description={councilDescription}
        btnText={councilBtnText}
        logos={councilLogos}
      />
      <Network
        title={hipsTitle}
        description={hipsDescription}
        btnText={hipsBtnText}
        logos={hipsLogos}
      />
    </div>
  );
}
