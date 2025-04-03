import "./Home.css";
import arrowDown from "../assets/arrow-down.svg";
import { useTranslation } from "react-i18next";
import SocialMedia from "./SocialMedia";
import { useState } from "react";
import DownloadCV from "./DownloadCV";

const Home = () => {
  const { t } = useTranslation(["translate"]);
  const [flipped, setFlipped] = useState(true);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <section>
      <div className="container-home">
        <div className="title-container">
          <div className="avatar" onClick={handleFlip}>
            <div
              className={`flip-card-inner ${flipped ? "flipped" : ""} ${
                !flipped ? "floating" : ""
              }`}
            >
              <div className="flip-card-front">
                <img src="../assets/home-avatar.png" alt="Front" />
              </div>
              <div className="flip-card-back">
                <img src="../assets/home-avatar-real.png" alt="Back" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card-home">
            <p className="pre-text">{t("Saludo-home")}</p>
            <p className="name">Sergio Jiménez</p>
            <p className="text-home">{t("Rol")}</p>
            <div className="dowload-cv">
              <DownloadCV />
            </div>
            <div className="social-media">
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="subtext-home">
          <p>{t("Saber-mas")}</p>
          <div className="arrow">
            <img src={arrowDown} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
