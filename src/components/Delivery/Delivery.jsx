import "./Delivery.css";
import AddressCard from "../AddressCard";
import { deliveryData } from "../../utils/deliveryData";

const Delivery = () => {
  return (
    <div>
      <p className="delivery_address_para">Choose a delivery address</p>
      <p className="delivery_p">Multiple addresses in this location</p>
      <div className="address_cards">
        {deliveryData.map((data) => {
          return <AddressCard {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Delivery;
