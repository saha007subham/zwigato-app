import CouponCard from "../../components/CouponCard";
import OfferCard from "../../components/OfferCard";
import "./Offer.css";

const Offer = () => {
  return (
    <>
      <OfferCard />
      <h1 className="coupon_h1">Available Coupons</h1>
      <div className="offer_coupon">
        <CouponCard />
      </div>
    </>
  );
};

export default Offer;
