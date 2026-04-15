import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </>
  );
}

export default App;
