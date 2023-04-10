import { APP_STORE } from "../../constants";
import { GOOGLE_PLAY } from "../../constants";
import "./Help.css";
import { company } from "../../utils/utils";
import { contact } from "../../utils/utils";
import { legal } from "../../utils/utils";

const Help = () => {
  return (
    <div className="help__main-div">
      <div className="company__div">
        <h1 className="ul__header1">COMPANY</h1>
        <ul>
          {company.map((com, id) => {
            return (
              <li key={id} className="list-style">
                {com}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="contact__div">
        <h1 className="ul__header1">CONTACT</h1>
        <ul>
          {contact.map((con, id) => {
            return (
              <li key={id} className="list-style">
                {con}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="legal__div">
        <h1 className="ul__header1">LEGAL</h1>
        <ul>
          {legal.map((leg, id) => {
            return (
              <li key={id} className="list-style">
                {leg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="app__logo">
        <img alt="app-store" src={APP_STORE} />
        <img alt="google-play" src={GOOGLE_PLAY} />
      </div>
    </div>
  );
};

export default Help;
