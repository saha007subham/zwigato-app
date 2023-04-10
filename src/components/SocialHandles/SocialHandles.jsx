import "./SocialHandles.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialHandles = () => {
  return (
    <div className="social__div">
      <div>
        <div style={{ cursor: "pointer" }}>
          <h1 className="headtext__cormorant1">Zwigato</h1>
        </div>
      </div>
      <div>
        <p className="copyright">&copy; 2023 Zwigato</p>
      </div>
      <div>
        <FaFacebookF
          size={25}
          style={{ marginRight: 15, cursor: "pointer", color: "white" }}
        />
        <FaPinterest
          size={25}
          style={{ marginRight: 15, cursor: "pointer", color: "white" }}
        />
        <FaInstagram
          size={25}
          style={{ marginRight: 15, cursor: "pointer", color: "white" }}
        />
        <FaTwitter size={25} style={{ cursor: "pointer", color: "white" }} />
      </div>
    </div>
  );
};

export default SocialHandles;
