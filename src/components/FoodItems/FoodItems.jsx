import "./FoodItems.css";
import { BiRupee } from "react-icons/bi";
import { addItems } from "../../redux/cartSlice";
import { removeItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const FoodItems = ({ name, price, url, restaurant, areaName }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleAddItem = (name, price, url, restaurant, areaName) => {
    setCount((prev) => prev + 1);
    const foodItems = { name, price, url, restaurant, areaName };
    dispatch(addItems(foodItems));
  };

  const handleRemoveItem = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      // You can also dispatch remove item action here if needed
      const foodItems = { name, price, url, restaurant, areaName };
      dispatch(removeItem(foodItems));
    }
  };

  return (
    <>
      <div className="food__menu">
        <p>{name}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>
          <BiRupee
            size={18}
            style={{ position: "relative", top: "3px", left: "5px" }}
          />{" "}
          {price}
        </p>
        <div className="addItems">
          <button className="addItem_button" onClick={handleRemoveItem}>
            -
          </button>
          <p style={{ margin: "0 15px 0 15px", fontSize: "15px" }}>{count}</p>
          <button
            className="addItem_button"
            onClick={() =>
              handleAddItem(name, price, url, restaurant, areaName)
            }
          >
            +
          </button>
        </div>
      </div>
      <div>
        <img src={url} alt="item-img" style={{ borderRadius: "6px" }} />
      </div>
    </>
  );
};

export default FoodItems;
