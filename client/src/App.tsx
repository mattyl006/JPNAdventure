import "./App.css";
import Logo from "./components/Logo/Logo";

const App = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-500">Hello world</h1>
      <Logo width={"w-[220px]"} height={"h-[220px]"} />
    </main>
  );
};

export default App;
