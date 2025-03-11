import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

const NavBar = ({ activeIndex, handleNavClick }) => {
  const { t } = useTranslation(["translate"]);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburguerRef = useRef(null);
  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburguerRef.current &&
        !hamburguerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, hamburguerRef]);

  return (
    <>
      <nav>
        <div
          className="hamburguer-menu"
          onClick={toggleMenu}
          ref={hamburguerRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="aqua"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <ul ref={menuRef} className={`nav-links ${menuOpen ? "" : "open"}`}>
          <li
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleNavClick(0)}
          >
            {t(`Inicio`)}
          </li>
          <li
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleNavClick(1)}
          >
            {t(`Sobre mi`)}
          </li>
          <li
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleNavClick(2)}
          >
            {t(`Formacion`)}
          </li>
          <li
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => handleNavClick(3)}
          >
            {t(`Proyectos`)}
          </li>
          <li
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => handleNavClick(4)}
          >
            {t(`Contacto`)}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
