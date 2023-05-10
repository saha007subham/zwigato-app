import "./FoodItems.css";
import { BiRupee } from "react-icons/bi";
import { addItems } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const FoodItems = ({ name, price, url }) => {
  const dispatch = useDispatch();

  const handleAddItem = (name, price) => {
    const foodItems = { name, price };
    console.log(foodItems);
    dispatch(addItems(foodItems));
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
          <button className="addItem_button">-</button>
          <p style={{ margin: "0 15px 0 15px", fontSize: "15px" }}>0</p>
          <button
            className="addItem_button"
            onClick={() => handleAddItem(name, price)}
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
