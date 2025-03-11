import "./Contact.css";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "react-i18next";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation(["translate"]);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [buttonText, setButtonText] = useState(t("Enviar"));

  useEffect(() => {
    const isValid = Object.values(formFields).every(
      (field) => field.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formFields]);

  useEffect(() => {
    setButtonText(t("Enviar"));
  }, [t]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setButtonText(t("Por favor rellene los campos"));
      setTimeout(() => {
        setButtonText(t("Enviar"));
      }, 3000);
      return;
    }

    const correoRef = collection(db, "correos");

    try {
      await addDoc(correoRef, formFields);
      setNotification(t("Mensaje enviado con éxito"));
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setTimeout(() => setNotification(""), 800);
      }, 3000);
      setFormFields({ name: "", email: "", asunto: "", mensaje: "" });
    } catch (error) {
      setNotification(t("Error al enviar el mensaje"));
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setTimeout(() => setNotification(""), 800);
      }, 3000);
    }
  };

  return (
    <>
      <section className="form-container" id="contact">
        <div className="form-body">
          <article>
            <div>
              <box-icon name="envelope" type="solid" color="aqua"></box-icon>
              <p>serjicu88@gmail.com</p>
            </div>
            <div>
              <box-icon type="solid" name="phone" color="aqua"></box-icon>
              <p>+34 677 373 608</p>
            </div>
            <div className="links">
              <SocialMedia />
            </div>
          </article>
          <aside>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t("Nombre")}
                value={formFields.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t("Correo")}
                value={formFields.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="asunto"
                id="asunto"
                placeholder={t("Asunto")}
                value={formFields.asunto}
                onChange={handleChange}
              />
              <textarea
                type="text"
                name="mensaje"
                id="mensaje"
                rows={10}
                placeholder={t("Mensaje")}
                value={formFields.mensaje}
                onChange={handleChange}
              />
              <div className="btn-form">
                <button type="submit" className="btn">
                  {buttonText}
                </button>
              </div>
            </form>
          </aside>
          {notification && (
            <div className={`notification ${showNotification ? "show" : ""}`}>
              {notification}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
