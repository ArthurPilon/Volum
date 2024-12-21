import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Pour utiliser les icônes
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Pour l'icône envelope

const EmailButton = () => {
  return (
    <FontAwesomeIcon
      onClick={() => (window.location.href = "mailto:f.pilon@orange.fr")}
      icon={faEnvelope}
      style={{ color: "#4b607b" }}
    />
  );
};

export default EmailButton;
