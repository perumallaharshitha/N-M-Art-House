import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Packages from "./pages/Packages";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import BrushCursor from "./components/BrushCursor";
function App() {
  return (
    <div className="bg-bgMain min-h-screen flex flex-col">
      <BrushCursor />
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/connect" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;