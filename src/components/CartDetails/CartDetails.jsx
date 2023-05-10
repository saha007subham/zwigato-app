import { useSelector } from "react-redux";

const CartDetails = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart->", cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        {
          console.log(item.name);
        }
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default CartDetails;
