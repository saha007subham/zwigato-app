import "./RestrauDetails.css";
import { useParams } from "react-router-dom";
import FoodItems from "../../components/FoodItems/FoodItems";
import { FOOD_CDN_IMG } from "../../constants";
import useRestraurant from "../../utils/useRestraurant";
import { menu } from "../../utils/menuData";

import { FiHeart } from "react-icons/fi";
import { MdDirectionsBike } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { TbDiscountCheck } from "react-icons/tb";

const RestrauDetails = () => {
  const params = useParams();
  // const { id } = useParams()

  console.log(useRestraurant(params.id));

  const {
    name,
    city,
    cloudinaryImageId,
    areaName,
    avgRating,
    totalRatingsString,
    cuisines,
    feeDetails,
    sla,
    costForTwoMessage,
    aggregatedDiscountInfo,
  } = useRestraurant(params.id);

  return (
    <div style={{ padding: "10px" }}>
      <div className="restrau__details-div">
        <div>
          <img
            alt="img"
            src={FOOD_CDN_IMG + cloudinaryImageId}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="restrau__heading-div">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="location__div">
              <p>Home</p>
              <p>-</p>
              <p> {city}</p>
              <p>-</p>
              <p> {areaName}</p>
              <p>-</p>
              <p>{name}</p>
            </div>
            <div>
              <FiHeart style={{ cursor: "pointer", marginRight: "15px" }} />
            </div>
          </div>
          <div className="restro_details_main-div">
            <div className="restro__details_div1">
              <p style={{ fontSize: "25px", fontWeight: "800" }}>{name}</p>
              <p>{cuisines?.join(", ")}</p>
              <p> {areaName}</p>
              <p style={{ marginTop: "10px" }}>
                <MdDirectionsBike
                  style={{ paddingTop: "3px", marginRight: "2px" }}
                />{" "}
                {feeDetails?.message}
              </p>
              <p></p>
            </div>
            <div>
              <div className="restro__details_div2">
                <p style={{ color: "green" }}>
                  <AiOutlineStar className="star" />
                  {avgRating}
                </p>
                <p>{totalRatingsString}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="delivery__div">
        <p>
          <FaRegClock className="star" />
          {sla?.slaString}
        </p>
        <p>{costForTwoMessage}</p>
      </div>

      <div className="discount__div">
        <p className="discount__card">
          <TbDiscountCheck size={20} className="star" style={{ top: "4px" }} />{" "}
          {aggregatedDiscountInfo?.descriptionList[0]?.meta}
        </p>
        <p className="discount__card">
          <TbDiscountCheck size={20} className="star" style={{ top: "4px" }} />
          {aggregatedDiscountInfo?.descriptionList[1]?.meta}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="menus">
          <div className="recommended">
            <p>Recommended</p>
          </div>

          <div>
            {menu.map((data) => {
              return (
                <div className="foodItem__div" key={data.id}>
                  <FoodItems {...data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauDetails;
