import { APP_STORE } from "../../constants";
import { GOOGLE_PLAY } from "../../constants";
import "./Help.css";

const Help = () => {
  return (
    <div className="help__main-div">
      <div>
        <h1>COMPANY</h1>
      </div>
      <div>
        <h1>CONTACT</h1>
      </div>
      <div>
        <h1>LEGAL</h1>
      </div>
      <div>
        <img alt="app-store" src={APP_STORE} />
        <img alt="google-play" src={GOOGLE_PLAY} />
      </div>
    </div>
  );
};

export default Help;
