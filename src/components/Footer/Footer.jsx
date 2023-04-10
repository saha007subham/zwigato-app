import Help from "../Help";
import CityList from "../CityList";
import SocialHandles from "../SocialHandles";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__main-div">
      <Help />
      <CityList />
      <SocialHandles />
    </div>
  );
};

export default Footer;
