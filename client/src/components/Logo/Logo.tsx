import React from "react";
import logo from "../../assets/tux-logo.svg";
import { cn } from "../../utils/cn";

type LogoProps = {
  width: string;
  height: string;
};

const Logo: React.FC<LogoProps> = (props): React.JSX.Element => {
  return (
    <div className={cn(props.width, props.height, "rounded-[50%] bg-primary")}>
      <img className="p-[30px] w-[100%] h-[100%]" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
