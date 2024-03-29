import React from "react";

import LogoSvg from "../../public/assets/logo/ExpanseLogo.svg"
import WhiteLogoSvg from "../../public/assets/logo/ExpanseLogoWhite.svg"

type Props = {
  white?: boolean
}
export const LogoComponent = (props: Props) => {

  // todo white option
  return (
    <img
      alt="Expanse services logo"
      src={props.white ? WhiteLogoSvg : LogoSvg}
      height="100%"
    />
  );
}
