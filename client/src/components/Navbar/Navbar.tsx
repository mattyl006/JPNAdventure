import React from "react";
import Logo from "../Logo/Logo";

const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <nav className="w-[100%] h-[64px] fixed top-0 left-0 bg-white flex items-center p-[12px_40px]">
      <Logo width={"w-[40px]"} height={"h-[40px]"} padding="p-[4px]" />
    </nav>
  );
};

export default Navbar;
