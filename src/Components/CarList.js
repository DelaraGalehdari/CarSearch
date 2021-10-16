import React from "react";
import "../Css/main.css";

//getting data from parent and show
const CarList = (props) => {
  const lists = props.lists.map((list) => {
    return (
      <div className="card">
        <div className="card-image pic"></div>
        <h4>Model: {list.Model_Name} </h4>
        <h4>Make: {list.Make_Name}</h4>
        <h4>Type: {list.VehicleTypeName}</h4>
      </div>
    );
  });
  return <div className="wrapper">{lists}</div>;
};

export default CarList;
