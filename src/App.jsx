import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar.jsx";
import Loader from "./utils/Loader.jsx";

const Hero = lazy(() => import("./components/Hero.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Technologies = lazy(() => import("./components/Technologies.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Activities = lazy(() => import("./components/Activities.jsx"));
const Contact = lazy(() => import("./components/Contacts.jsx"));

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setShowLoader(false);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Router>
      {showLoader && <Loader />}

      <div className="text-neutral-300 overflow-x-hidden antialiased scroll-smooth min-h-screen">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto p-6 sm:p-8 min-h-screen">
          <Navbar />

          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Hero />} />
              <Route path="/contacts" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
