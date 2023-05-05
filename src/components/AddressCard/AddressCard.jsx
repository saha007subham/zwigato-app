import "./AddressCard.css";
import { BiHome } from "react-icons/bi";

const AddressCard = ({ place, address, time }) => {
  return (
    <div className="address__card">
      <p className="place">
        <BiHome size={20} className="address_icons" />
        {place}
      </p>
      <p className="address">{address}</p>
      <p className="time">{time}</p>
      <button className="button">DELIVER HERE</button>
    </div>
  );
};

export default AddressCard;
