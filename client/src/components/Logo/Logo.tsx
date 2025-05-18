import React from "react";
import logo from "../../assets/tux-logo.svg";
import { cn } from "../../utils/cn";

type LogoProps = {
  width: string;
  height: string;
  padding: string;
};

const Logo: React.FC<LogoProps> = (props): React.JSX.Element => {
  return (
    <div className={cn(props.width, props.height, "rounded-[50%] bg-primary")}>
      <img
        className={cn(props.width, props.height, props.padding)}
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
