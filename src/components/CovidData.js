import React from "react";
import "../App.css";
import Data from "./subs/fakedata";

console.log(Data.info);

function CovidData() {
  return (
    <div class="datacomp">
      <h2 class="covid">Covid Data Here</h2>
      <div class="data">
        <p> This right hre is one chunk of info </p>

        <p>hi</p>
      </div>
    </div>
  );
}

export default CovidData;
