// import {
//   Home,
//   MapPin,
//   Award,
//   Users,
//   ArrowRight,
//   Building2,
//   TreePine,
//   Train,
//   Heart,
// } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Locations from "../components/Locations";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
