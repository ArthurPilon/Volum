import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Importer l'icône téléphone

const PhoneButton = () => {
  return (
    <FontAwesomeIcon
      onClick={() => (window.location.href = "tel:+33787866617")} // Lien pour lancer un appel
      icon={faPhone} // Utilise l'icône du téléphone
      style={{ color: "#4b607b", cursor: "pointer" }} // Style pour l'icône
    />
  );
};

export default PhoneButton;
