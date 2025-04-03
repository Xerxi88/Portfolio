import { useTranslation } from "react-i18next";

const DownloadCV = () => {
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
    <a onClick={handleDownloadCV} className="btn">
      {t("Descargar CV")}
    </a>
  );
};

export default DownloadCV;
