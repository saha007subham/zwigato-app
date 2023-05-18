import React from "react";
import "./TrendingMenu.css";
import { trendingData } from "../../utils/addData";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const TrendingMenu = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 320;
    } else {
      current.scrollLeft += 320;
    }
  };
  return (
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {trendingData.map((data) => {
          return (
            <div
              key={data.id}
              className="app__gallery-images_card flex__center"
            >
              <img alt="addLogo" src={data.img} className="trending-img" />
            </div>
          );
        })}
      </div>

      <div className="leftArrow__div">
        <BsArrowLeftShort
          className="gallery__arrow-icon"
          onClick={() => scroll("left")}
          size={30}
        />
      </div>
      <div className="rightArrow__div">
        <BsArrowRightShort
          className="gallery__arrow-icon"
          onClick={() => scroll("right")}
          size={30}
        />
      </div>
    </div>
  );
};

export default TrendingMenu;
