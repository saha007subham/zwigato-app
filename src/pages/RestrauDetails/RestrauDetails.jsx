import { useParams } from "react-router-dom";
import useRestraurant from "../../utils/useRestraurant";

const RestrauDetails = () => {
  const params = useParams();
  // const { id } = useParams()

  const { name, city, cloudinaryImageId } = useRestraurant(params.id);

  const cloudinaryImg =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  return (
    <div style={{ padding: "10px" }}>
      <h1>RestrauDetails id : {params.id}</h1>
      <h2>{name}</h2>
      <p>{city}</p>
      <img alt="img" src={cloudinaryImg + cloudinaryImageId} />
    </div>
  );
};

export default RestrauDetails;
