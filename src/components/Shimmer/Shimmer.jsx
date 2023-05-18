import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="main_container">
      <div className="trending_main">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, idx) => {
          return <div className="trending"></div>;
        })}
      </div>
    </div>
  );
};

export default Shimmer;
