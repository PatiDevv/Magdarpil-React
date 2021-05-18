import React from "react";
import "./App.css";
import "./styles/grid.css";
import "./styles/normalize.css";
import "./styles/style.css";

import { Header } from "./components/molecules/Header";
import { Footer } from "./components/molecules/Footer";
import { Ajra } from "./pages/Branding/Ajra";
import { AboutUs } from "./pages/Branding/AboutUs";
import { BeforeBuy } from "./pages/Branding/BeforeBuy";
import { Puppies } from "./pages/Branding/Puppies";
import { Contact } from "./pages/Branding/Contact";

function App() {
  return (
    <div>
      <Header />
      <Ajra />
      <AboutUs />
      <BeforeBuy />
      <Puppies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
