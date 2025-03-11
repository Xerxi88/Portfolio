import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export const Footer = ({ handleNavClick }) => {
  const { t } = useTranslation(["translate"]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="nav-container">
          <a onClick={() => handleNavClick(1)} className="nav-link">
            {t("Sobre mi")}
          </a>
          |
          <a onClick={() => handleNavClick(3)} className="nav-link">
            {t("Proyectos")}
          </a>
          |
          <a onClick={() => handleNavClick(2)} className="nav-link">
            {t("Formacion")}
          </a>
          |
          <a onClick={() => handleNavClick(3)} className="nav-link">
            {t("Contacto")}
          </a>
        </div>
        <div className="text-container">
          <p className="text">
            © 2024 Sergio. {t("Todos los derechos reservados")}
          </p>
        </div>
      </div>
      <div className="social-container">
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
