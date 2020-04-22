import React from "react";
import "../App.css";

let fakeData = {
  id: "A thing",
  name: "covid",
  thing: "otherThing",
};

function CovidData() {
  return (
    <div class="datacomp">
      <h2 class="covid">Covid Data Here</h2>
      <div class="data">
        {" "}
        <fakeData />
      </div>
    </div>
  );
}

export default CovidData;
