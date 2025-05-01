import React, { ComponentProps } from "react";
import { ButtonSizeStyle } from "./ButtonSizeStyle";
import { cn } from "../../utils/cn";

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: ButtonSizeStyle;
  label: string;
} & ComponentProps<"button">;

/** Primary UI component for user interaction */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = ButtonSizeStyle.MEDIUM,
  className,
  disabled,
  label,
  ...props
}): JSX.Element => {
  const mode = primary
    ? "text-white bg-[#1ea7fd]"
    : "bg-transparent text-[#333] shadow-[rgba(0,_0,_0,_0.15)_0px_0px_0px_1px_inset]";
  return (
    <button
      {...props}
      type="button"
      onClick={(e) => (props.onClick && !disabled ? props.onClick(e) : null)}
      className={cn(
        `inline-block cursor-pointer border-0 rounded-[3em] font-bold leading-1
         ${size} ${mode}`,
        className,
        { "hover:transparent bg-slate-400 cursor-auto": disabled }
      )}
    >
      {label}
    </button>
  );
};

export default Button;
