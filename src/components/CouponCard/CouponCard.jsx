import "./CouponCard.css";

const CouponCard = ({ code, title, description, url }) => {
  return (
    <div className="coupon__card-main-div">
      <div className="coupon_code">
        <img src={url} alt="code_img" style={{ width: "25px" }} />
        <p>{code}</p>
      </div>
      <div>
        <p className="coupon_title">{title}</p>
        <p className="coupon_description">{description}</p>
        <button className="coupon_button">COPY CODE</button>
      </div>
    </div>
  );
};

export default CouponCard;
