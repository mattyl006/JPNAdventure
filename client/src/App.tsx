import "./App.css";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-primary">
      <Navbar />
      <main>
        <h1 className="text-3xl font-bold text-blue-500">Hello world</h1>
        <Logo width={"w-[220px]"} height={"h-[220px]"} padding="p-[30px]" />
      </main>
    </div>
  );
};

export default App;
