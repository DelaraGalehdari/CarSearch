import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Css/SearchBar.css";

const SearchBar = ({ setCar }) => {
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("year");
  const [carInfo, setCarInfo] = useState([]);
  const [carType, setCarType] = useState("car");
  const [resultNumber, setResultNumber] = useState("Find");

  //fetch data from api
  const fetch = async (term, year, carType) => {
    const getCarInfo = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${term}/modelyear/${year}/vehicletype/${carType}?format=json`
    );
    setCarInfo(getCarInfo.data.Results);
    setResultNumber("Found " + getCarInfo.data.Results.length + " cars");
  };

  //make year and type button disable and enable
  useEffect(() => {
    if (carInfo.length > 0) {
      document.getElementById("selectYear").disabled = false;
      document.getElementById("selectType").disabled = false;
    } else {
      document.getElementById("selectYear").disabled = true;
      document.getElementById("selectType").disabled = true;
    }
  });
  //sending data to parent component
  useEffect(() => {
    setCar(carInfo);
  }, [carInfo]);

  //reset data
  useEffect(() => {
    setCarInfo([]);
    setResultNumber("Find");
    fetch(term, year, carType);
  }, [term, year, carType]);

  //clear function
  const onButtonClear = () => {
    setResultNumber("Search");
    setTerm("");
    setYear("year");
    setCarInfo([]);
    setCarType("car");
  };

  return (
    <div className="search-container">
      <div className="content-text">
        <h1>The better way to find your next car</h1>
        <p>
          Buy, finance or subscribe entirely online and choose delivery or
          collection.
        </p>
      </div>

      <div className="search-car">
        <input
          className="search-select"
          placeholder="Search Model"
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
        />

        <select
          id="selectYear"
          className="year-select"
          placeholder="year"
          value={year}
          type="text"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="year">Year</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>

        <select
          id="selectType"
          className="type-select"
          value={carType}
          type="text"
          onChange={(e) => setCarType(e.target.value)}
        >
          <option value="car">Type</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
        </select>
        <div className="btn-form">
          <button className="btn-search">
            <a href="#end">{resultNumber}</a>
          </button>
          <button className="btn-search clear" onClick={onButtonClear}>
            Clear
          </button>
        </div>
      </div>
      <div id="end"></div>
    </div>
  );
};

export default SearchBar;
