import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";

export const Footer = ({ handleNavClick }) => {
  const { t } = useTranslation(["translate"]);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.navContainer}>
          <a onClick={() => handleNavClick(1)} style={styles.navLink}>
            {t("Sobre mi")}
          </a>
          |
          <a onClick={() => handleNavClick(3)} style={styles.navLink}>
            {t("Proyectos")}
          </a>
          |
          <a onClick={() => handleNavClick(2)} style={styles.navLink}>
            {t("Formacion")}
          </a>
          |
          <a onClick={() => handleNavClick(3)} style={styles.navLink}>
            {t("Contacto")}
          </a>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.text}>
            © 2024 Sergio. {t("Todos los derechos reservados")}
          </p>
        </div>
      </div>
      <div style={styles.socialContainer}>
        <SocialMedia />
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #e0e0e0",
    justifyContent: "space-evenly",
  },
  container: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  textContainer: {
    marginBottom: "20px",
  },
  text: {
    fontSize: "14px",
    color: "#ffffff",
  },
  navContainer: {
    marginBottom: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#007bff",
    margin: "0 10px",
    cursor: "pointer",
  },
  socialContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    position: "absolute",
    marginRight: "20px",
    width: "300px",
    right: "0",
  },
};

export default Footer;
