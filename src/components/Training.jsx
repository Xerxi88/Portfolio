import "./Training.css";
import data from "../training.json";
import dataLang from "../skills.json";
import { useTranslation } from "react-i18next";
import { VanillaTilt } from "../vanilla-tilt.js";

const Training = () => {
  const reversedData = [...data].reverse();

  const { t } = useTranslation(["translate"]);

  VanillaTilt.init(document.querySelectorAll(".skill")),
    {
      max: 75,
      speed: 400,
      glare: true,
      "max-glare": 1,
      reverse: true,
    };

  return (
    <section className="container-tra" id="training">
      <div className="training">
        <ul>
          {reversedData.map((element, index) => (
            <li key={index}>
              <header>{element.years}</header>
              <main>
                <div className="course-description">
                  <h3>{element.titulo}</h3>
                  <h5>{element.centro}</h5>
                  <p className="training-description">
                    {t(`${element.descripcion}`)}
                  </p>
                  <div className="languages-courses">
                    {element.lenguajes.map((lang, indexL) => (
                      <span key={indexL}>{lang}</span>
                    ))}
                  </div>
                </div>
              </main>
            </li>
          ))}
        </ul>
      </div>
      <aside className="skills">
        <h2>{t("skills")}</h2>
        <ul className="skills-list">
          {dataLang.map((element) => (
            <li
              key={element.id}
              className="skill"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.3"
              data-tilt-reverse="true"
              data-tilt-startX="20"
              data-tilt-startY="-20"
              data-tilt-reset-to-start="true"
              data-tilt-scale="1.1"
            >
              <a
                href={element.url}
                className="skill-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={element.icono} alt="icon_language" />
                <p>{element.nombre}</p>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Training;
