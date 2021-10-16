import React, { useState } from "react";
import CarList from "./CarList";
import SearchBar from "./SearchBar";
import Header from "./Header";
import "../Css/app.css";

const App = () => {
  const [carInfo, setCarInfo] = useState([]);

  const setCar = (val) => {
    setCarInfo(val);
  };

  return (
    <div className="hero">
      <Header />
      <div className="mainContent">
        <SearchBar setCar={setCar} />

        <CarList lists={carInfo} />
      </div>
    </div>
  );
};

export default App;
