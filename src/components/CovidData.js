import React from "react";
import "../App.css";

let Data = `{
  info: [{ deaths: "11" }, { cases: "13" }, { recovered: "2" }],
}`;

console.log(Data.info);

function CovidData() {
  return (
    <div class="datacomp">
      <h2 class="covid">Covid Data Here</h2>
      <div class="data">
        <p> This right hre is one chunk of info </p>

        <p> this right here is another </p>
      </div>
    </div>
  );
}

export default CovidData;
