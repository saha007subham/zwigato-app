import "./Offer.css";
import CouponCard from "../../components/CouponCard";
import OfferCard from "../../components/OfferCard";
import { couponsData } from "../../utils/couponsData";

const Offer = () => {
  return (
    <>
      <OfferCard />
      <h1 className="coupon_h1">Available Coupons</h1>
      <div className="offer_coupon">
        {couponsData.map((data) => {
          return <CouponCard {...data} key={data.id} />;
        })}
      </div>
    </>
  );
};

export default Offer;
