import { useParams } from "react-router-dom";
import useRestraurant from "../../utils/useRestraurant";
import { FOOD_CDN_IMG } from "../../constants";

const RestrauDetails = () => {
  const params = useParams();
  // const { id } = useParams()

  const { name, city, cloudinaryImageId } = useRestraurant(params.id);

  return (
    <div style={{ padding: "10px" }}>
      <h1>RestrauDetails id : {params.id}</h1>
      <h2>{name}</h2>
      <p>{city}</p>
      <img alt="img" src={FOOD_CDN_IMG + cloudinaryImageId} />
    </div>
  );
};

export default RestrauDetails;
