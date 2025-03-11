import { useTranslation } from "react-i18next";
import "./AboutMe.css";
import home from "../assets/home.png";
import SocialMedia from "./SocialMedia";

const AboutMe = () => {
  const { t } = useTranslation(["translate"]);

  const handleDownloadCV = () => {
    const userConfirmed = window.confirm(t("Texto confirmacion"));
    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = "/public/curriculum/Currículum Profesional (2p Spanish).pdf";
      link.download =
        "public/curriculum/Currículum Profesional (2p Spanish).pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="home" id="about">
      <div className="home-content">
        <h3>{t(`Saludo`)}</h3>
        <h1>Sergio Jiménez</h1>
        <h3>
          <span>{t("No todo es programar")}</span>
        </h3>
        <p>{t("Descripcion")}</p>
        <div className="social-media">
          <SocialMedia />
        </div>
        <a onClick={handleDownloadCV} className="btn">
          {t("Descargar CV")}
        </a>
      </div>
      <div className="home-img">
        <img src={home} alt="main-Sergio" className="home-card" />
      </div>
    </section>
  );
};

export default AboutMe;
