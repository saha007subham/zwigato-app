import "./CartPage.css";
import CartDetails from "../../components/CartDetails/CartDetails";
import Delivery from "../../components/Delivery/Delivery";
import Payment from "../../components/Payment/Payment";

const CartPage = () => {
  return (
    <div className="main_div">
      <div className="left__div">
        <Delivery />
        {/* <Payment /> */}
      </div>
      <div className="right__div">
        <CartDetails />
      </div>
    </div>
  );
};

export default CartPage;
