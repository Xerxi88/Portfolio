import "./Card.css";
import { useTranslation } from "react-i18next";

const Card = ({ props, id }) => {
  const { t } = useTranslation(["translate"]);
  return (
    <>
      <li id={id} className="card">
        <div className="card-body">
          {props.url.map((dir, index) => (
            <a className="btn-demo" href={dir} key={index} target="_blank">
              Demo
              <box-icon name="run" color="white" size="md"></box-icon>
            </a>
          ))}

          <img src={props.picture} alt="imagen" />
          <div className="card-text">
            <h1 className="card-title">{props.nombre}</h1>
            <div className="card-languages">
              {props.lenguajes.map((lang, index) => (
                <div key={index} className={lang}>
                  {lang.at(0).toUpperCase() + lang.slice(1)}
                </div>
              ))}
            </div>
            <p className="card-description">{t(`${props.descripcion}`)}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
