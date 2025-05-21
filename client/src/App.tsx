import { Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import prettier from "prettier";

const Components: {
  [x: string]: { component: React.JSX.Element; code: string };
} = {
  Header: {
    component: <Header />,
    code: `import React from "react";
import Button from "../Button/Button";
import { ButtonSizeStyle } from "../Button/ButtonSizeStyle";
import "./header.css";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}): JSX.Element => (
  <header>
    <div className="storybook-header">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button
              size={ButtonSizeStyle.SMALL}
              onClick={onLogout}
              label="Log out"
            />
          </>
        ) : (
          <>
            <Button
              size={ButtonSizeStyle.SMALL}
              onClick={onLogin}
              label="Log in"
            />
            <Button
              primary
              size={ButtonSizeStyle.SMALL}
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

export default Header;
`,
  },
  Logo: {
    component: (
      <Logo width={"w-[220px]"} height={"h-[220px]"} padding="p-[30px]" />
    ),
    code: `import React from "react";
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
`,
  },
  Navbar: {
    component: <Navbar />,
    code: `import React from "react";
import Logo from "../Logo/Logo";

const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <nav className="w-[100%] h-[64px] fixed top-0 left-0 bg-white flex items-center p-[12px_40px]">
      <Logo width={"w-[40px]"} height={"h-[40px]"} padding="p-[4px]" />
    </nav>
  );
};

export default Navbar;
`,
  },
  Button: {
    component: <Button label="Hello" />,
    code: `import React, { ComponentProps } from "react";
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
          \`inline-block cursor-pointer border-0 rounded-[3em] font-bold leading-1
           \${size} \${mode}\`,
          className,
          { "hover:transparent bg-slate-400 cursor-auto": disabled }
        )}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  `,
  },
};

const App = () => {
  const [selectedComponent, setSelectedComponent]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState("");

  const componentRender = () => {
    if (selectedComponent) {
      return (
        <div className="flex flex-col gap-[32px]">
          {Components[selectedComponent].component}
          <div
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(Components[selectedComponent].code);
              alert("code copied!");
            }}
          >
            {Components[selectedComponent].code}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white">
      <main>
        <h1 className="text-3xl font-bold text-blue-500">Hello world</h1>
        <label htmlFor="component-select">Choose a component:</label>
        <select
          name="components"
          id="component-select"
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          <option value="">--Please choose component--</option>
          {Object.keys(Components).map((component) => (
            <option value={component}>{component}</option>
          ))}
        </select>
        {componentRender()}
      </main>
    </div>
  );
};

export default App;
