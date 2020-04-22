<<<<<<< HEAD
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
=======
import React from 'react';
import '../App.css';

function CovidData() {

return (
    <div className="data">
    <h2 className="covid">Covid Data Here</h2>
    </div>    
)
}

export default CovidData;
>>>>>>> 18209d27cb119e655a95831737da74bb69205d56
