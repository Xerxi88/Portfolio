import Spain from "../assets/Spain.png";
import Catalonia from "../assets/Catalonia.png";
import English from "../assets/English.png";

const Languages = ({ changeLanguage }) => {
  return (
    <>
      <div className="lang">
        <img src={Spain} alt="Español" onClick={() => changeLanguage("es")} />
        <img
          src={Catalonia}
          alt="Català"
          onClick={() => changeLanguage("cat")}
        />
        <img src={English} alt="English" onClick={() => changeLanguage("en")} />
      </div>
    </>
  );
};

export default Languages;
