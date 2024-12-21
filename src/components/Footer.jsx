import logo from "/assets/icons/ieF_1Sqg.jpeg";
import PhoneButton from "./PhoneButton";

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div id="footerbloc1">
          <div id="logo">
            <img src={logo} alt="volumlogo" />
          </div>
          <div id="contact">
            <h3>Contact</h3>
            <p>Adresse: </p>
            <p>Telephone: 07 87 86 66 17 <PhoneButton /></p> 
            <p>mail: frederic.pilon@voluM.group</p>
          </div>
          <div id="socials"></div>
          {/* <div id="links">
            <p>lien de navigation dans la page</p>
            <p>lien de navigation dans la page</p>
            <p>lien de navigation dans la page</p>
            <p>lien de navigation dans la page</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
