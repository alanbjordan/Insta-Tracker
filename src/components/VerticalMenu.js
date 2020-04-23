import React from "react";
import "../App.css";

function VerticalMenu() {

    return (
        <div className="ui vertical menu" id="vertmenu">

        <div className="item">
          <div className="header">COVID-19 Data</div>
          <div className="menu">
            <button className="item" className="dataButton">Global</button>
            <button className="item" className="dataButton">Country</button>
            <button className="item" className="dataButton">State</button>
          </div>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Churches</label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Private</label>
        </div>
      </div>
    </div>
  );
}

export default VerticalMenu;
