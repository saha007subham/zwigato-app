import "./RestaurantCard.css";
import { AiOutlineStar } from "react-icons/ai";
import { FOOD_CDN_IMG } from "../../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="restra__card">
      <img
        alt="food-img"
        src={FOOD_CDN_IMG + cloudinaryImageId}
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
