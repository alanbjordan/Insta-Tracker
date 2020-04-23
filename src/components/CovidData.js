import React from "react";
import "../App.css";
import Data from "./subs/fakedata";

console.log(Data.info);

function CovidData() {
  return (
    <div className="datacomp">
      <h2 className="covid">Covid Data Here</h2>
      <div className="data">
        <p> This right hre is one chunk of info </p>

        <p>hi</p>
      </div>
    </div>
  );
}

export default CovidData;
