import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relativ bg-primary z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
