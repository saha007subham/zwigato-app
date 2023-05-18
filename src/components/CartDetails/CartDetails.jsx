import "./CartDetails.css";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const CartDetails = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartPrice = cartItems[0]?.price;

  const [cart, setCart] = useState([cartPrice]);

  const handleAddItem = (price) => {
    setCart([...cart, price]);
  };

  const removeFromCart = () => {
    if (cart.length === 1) return;
    const updatedCart = cart.slice(0, -1);
    setCart(updatedCart);
  };

  const calculateTotalAmount = useCallback(() => {
    return cart.reduce((total, item) => total + item, 0);
  }, [cart]);

  return (
    <div>
      {cartItems.map((item, idx) => {
        return (
          <div key={idx} className="cart_main">
            <div className="img_div">
              <div>
                <img src={item.url} className="img" />
              </div>
              <div>
                <p className="restro_name">{item.restaurant}</p>
                <p className="area_name">{item.areaName}</p>
              </div>
            </div>

            <div className="flex">
              <div style={{ width: "80%" }}>
                <p className="item_name">{item.name}</p>
              </div>
              <div>
                <p className="item_price">{item.price}</p>
              </div>
            </div>
            <div className="addItems">
              <button className="addItem_button" onClick={removeFromCart}>
                -
              </button>
              <p style={{ margin: "0 15px 0 15px", fontSize: "15px" }}>
                {cart.length === 0 ? cartItems.length : cart.length}
              </p>
              <button
                className="addItem_button"
                onClick={() => handleAddItem(item.price)}
              >
                +
              </button>
            </div>
            <p className="suggestion">
              "Any suggestion? we will pass it on....
            </p>
            <p className="bill_details">Bill Details</p>
            <div className="flex">
              <div>
                {" "}
                <p className="item_total">Item total</p>
              </div>
              <div>
                <p className="item_span">{item.price}</p>
              </div>
            </div>
            <div style={{ marginTop: "7px" }} className="flex">
              <div>
                <p className="item_delivery">Delivery Partner Fee</p>
              </div>
              <div>
                <p className="item_span">FREE</p>
              </div>
            </div>
            <div className="gst_div">
              <div>
                <p className="item_gst">GST and Restaurant Charges</p>
              </div>
              <div>
                <p className="item_span">38</p>
              </div>
            </div>

            <div className="pay_div">
              <div style={{ width: "80%" }}>
                <p className="item_pay">To Pay</p>
              </div>
              <div>
                {" "}
                <p className="item_calculate">
                  {cart.length === 0 ? null : calculateTotalAmount() + 38}
                </p>
              </div>
            </div>
            <button className="button">Proceed To Pay</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartDetails;
