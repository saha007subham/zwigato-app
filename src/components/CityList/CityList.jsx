import "./CityList.css";
import { citiesA } from "../../utils/citiesName";
import { citiesB } from "../../utils/citiesName";
import { citiesC } from "../../utils/citiesName";
import { citiesD } from "../../utils/citiesName";

const CityList = () => {
  return (
    <div className="cityList__main-div">
      <h1 className="ul__header">WE DELIVER TO</h1>
      <div className="citiesList__div">
        <ul>
          {citiesA.map((cities, idx) => {
            return (
              <li key={idx} className="list-style">
                {cities}
              </li>
            );
          })}
        </ul>
        <ul>
          {citiesB.map((cities, idx) => {
            return (
              <li key={idx} className="list-style">
                {cities}
              </li>
            );
          })}
        </ul>
        <ul>
          {citiesC.map((cities, idx) => {
            return (
              <li key={idx} className="list-style">
                {cities}
              </li>
            );
          })}
        </ul>
        <ul>
          {citiesD.map((cities, idx) => {
            return (
              <li key={idx} className="list-style">
                {cities}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CityList;
