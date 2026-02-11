import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Category Pages
import Healthcare from "./pages/healthcare/Healthcare";
import Pharma from "./pages/pharma/Pharma";
import Manufacturing from "./pages/manufacturing/Manufacturing";
import Energy from "./pages/energy/Energy";
import IT from "./pages/it/IT";

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow pt-20">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/pharma" element={<Pharma />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/it" element={<IT />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;
