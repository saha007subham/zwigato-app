import "./RestaurantCard.css";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  const cloudinaryImg =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="restra__card">
      <img
        alt="food-img"
        src={cloudinaryImg + cloudinaryImageId}
        className="food__img"
      />
      <p className="food__name">{name}</p>
      <p className="cuisines">{cuisines.join(", ")}</p>
      <div className="inner__div">
        <div className={avgRating >= 4 ? "rating__div-4" : "rating__div"}>
          <AiOutlineStar />
          <p>{avgRating}</p>
        </div>
        <div className="deliveryTime">
          <p>{deliveryTime} MINS</p>
        </div>
        <div className="deliveryTime">
          <p>{costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
