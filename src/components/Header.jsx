import logo from "/assets/icons/ieF_1Sqg.jpeg";
import EmailButton from "./EmailButton";
import PhoneButton from "./PhoneButton";

export default function Header() {
  return (
    <>
      <div id="header">
        <div id="logo">
          <img src={logo} alt="logoVolum" />
        </div>
        <div id="navigation">
          <nav>
            <ul>
              <a href="#module-text1" className="nav_desk">
                <li>Le Process voluM</li>
              </a>
              <a href="#module-text2" className="nav_desk">
                <li>Des valeurs éthiques</li>
              </a>
              <a href="#module-text3" className="nav_desk">
                <li>Le gain financier</li>
              </a>
              <a href="#module-text4" className="nav_desk">
                <li>Une double transaction</li>
              </a>

              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        </div>
        <div id="phone-mail">
          <div id="email-header">
            <EmailButton />
          </div>
          <div id="phone-header">
            <PhoneButton />
          </div>
        </div>
      </div>
    </>
  );
}
