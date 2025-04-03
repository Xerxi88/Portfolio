import { useTranslation } from "react-i18next";
import "./AboutMe.css";
import home from "../assets/home.png";
import SocialMedia from "./SocialMedia";
import DownloadCV from "./DownloadCV";

const AboutMe = () => {
  const { t } = useTranslation(["translate"]);

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
        <DownloadCV />
      </div>
      <div className="home-img">
        <img src={home} alt="main-Sergio" className="home-card" />
      </div>
    </section>
  );
};

export default AboutMe;
