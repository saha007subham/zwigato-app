import "./OfferCard.css";

const OfferCard = () => {
  return (
    <div className="offerCard__main">
      <div>
        <h1 className="offer_h1">Offer for you</h1>
        <p className="offer_p">
          Explore top deals and offers exclusively for you!
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
          alt=""
          className="offer_image"
        />
      </div>
    </div>
  );
};

export default OfferCard;
