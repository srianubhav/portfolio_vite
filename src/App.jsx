import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./Experience/Experience";
import Projects from "./components/Projects/Projects"; 
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer/>
      
    </div>
  );
}

export default App;
