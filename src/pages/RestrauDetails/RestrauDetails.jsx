import "./RestrauDetails.css";
import { useParams } from "react-router-dom";
import useRestraurant from "../../utils/useRestraurant";
import { FOOD_CDN_IMG } from "../../constants";

const RestrauDetails = () => {
  const params = useParams();
  // const { id } = useParams()

  console.log(useRestraurant(params.id));

  const { name, area, cloudinaryImageId, address } = useRestraurant(params.id);

  return (
    <div style={{ padding: "10px" }}>
      <div className="restrau__details-div">
        <div style={{ border: "1px solid red" }}>
          <img alt="img" src={FOOD_CDN_IMG + cloudinaryImageId} />
        </div>
        <div className="restrau__heading-div">
          <h1>{name}</h1>
          <p>{area}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default RestrauDetails;
