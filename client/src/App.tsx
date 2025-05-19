import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";

const Components: { [x: string]: React.JSX.Element } = {
  Header: <Header />,
  Logo: <Logo width={"w-[220px]"} height={"h-[220px]"} padding="p-[30px]" />,
  Navbar: <Navbar />,
  Button: <Button label="Hello" />,
};

const App = () => {
  const [selectedComponent, setSelectedComponent]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const componentRender = () => {
    if (selectedComponent) {
      return Components[selectedComponent];
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
