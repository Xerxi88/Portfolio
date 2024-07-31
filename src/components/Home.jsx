import "./Home.css";
import arrowDown from "../assets/arrow-down.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["translate"]);

  return (
    <section>
      <div className="container-home">
        <p className="text-home">{t("Presentacion")}</p>
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
