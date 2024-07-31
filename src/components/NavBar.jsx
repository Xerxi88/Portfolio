import "./NavBar.css";
import { useTranslation } from "react-i18next";

const NavBar = ({ activeIndex, handleNavClick }) => {
  const { t } = useTranslation(["translate"]);

  return (
    <>
      <nav>
        <ul>
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
