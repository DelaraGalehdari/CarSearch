import React, { useState } from "react";

const FilterYear = ({ onSubmitYear }) => {
  const [year, setYear] = useState("");

  const onSelectSubmit = (event) => {
    event.preventDefault();
    onSubmitYear(year);
  };
  return (
    <div>
      <select
        className="ui dropdown"
        value={year}
        onSelect={onSelectSubmit}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Year</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </select>
      year :{year}
    </div>
  );
};

export default FilterYear;
