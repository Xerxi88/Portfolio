import "./ListOfProyects.css";
import { useEffect, useState } from "react";
import data from "../projects.json";
import Card from "./Card";

const ListOfProyects = () => {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    const newArray = [...data].reverse();
    setProyects(newArray);
  }, []);

  return (
    <>
      <ul className="proyects-container" id="proyects">
        {proyects &&
          proyects.map((proyect, index) => (
            <Card props={proyect} id={"card" + index} key={index} />
          ))}
      </ul>
    </>
  );
};

export default ListOfProyects;
