import "./App.css";
import i18next from "i18next";
import "boxicons";
import { useRef, useState, useEffect, useCallback } from "react";
import AboutMe from "./components/AboutMe";
import Languages from "./components/Languages";
import NavBar from "./components/NavBar";
import ListOfProyects from "./components/ListOfProyects";
import Contact from "./components/Contact";
import Training from "./components/Training";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const mainRef = useRef(null);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    const sections = mainRef.current.children;
    sections[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    const sections = mainRef.current.children;
    let currentIndex = activeIndex;

    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentIndex = i;
        break;
      }
    }

    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header className="header-body">
        <NavBar activeIndex={activeIndex} handleNavClick={handleNavClick} />
        <Languages changeLanguage={changeLanguage} />
      </header>
      <main ref={mainRef} className="body-container">
        <Home />
        <AboutMe />
        <Training />
        <ListOfProyects />
        <Contact />
      </main>
      <footer>
        <Footer handleNavClick={handleNavClick} />
      </footer>
    </>
  );
}

export default App;
