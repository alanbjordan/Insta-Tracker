<<<<<<< HEAD
import React from "react";
import "../App.css";

function VerticalMenu() {
  return (
    <div class="ui vertical menu" id="vertmenu">
      <div class="item">
        <div class="header">COVID-19 Data</div>
        <div class="menu">
          <a class="item">Global</a>
          <a class="item">Country</a>
          <a class="item">State</a>
          <a class="item">Local</a>
        </div>
      </div>
      <div class="item">
        <div class="header">Testing Centers</div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Public</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Private</label>
        </div>
      </div>
      <div class="item">
        <div class="header">Essential Shopping</div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Pharmacy</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Grocery</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Resturants</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>General</label>
        </div>
      </div>
      <div class="item">
        <div class="header">Food Banks</div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Public</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Churches</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" name="example" />
          <label>Private</label>
        </div>
      </div>
    </div>
  );
}

export default VerticalMenu;
=======
import React from 'react';
import '../App.css';

function VerticalMenu() {

    return (
        <div className="ui vertical menu" id="vertmenu">

        <div className="item">
          <div className="header">COVID-19 Data</div>
          <div className="menu">
            <a className="item">Global</a>
            <a className="item">Country</a>
            <a className="item">State</a>
            <a className="item">Local</a>
          </div>
        </div>
        <div className="item">
            <div className="header">Testing Centers</div>
            <div className="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Public</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Private</label>
            </div>
          </div>
        <div className="item">
            <div className="header">
                Essential Shopping
            </div>
                <div className="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Pharmacy</label>
                </div>
                <div className="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Grocery</label>
                </div>
                <div className="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Resturants</label>
                </div>
                <div className="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>General</label>
                </div>
        </div>
        <div className="item">
            <div className="header">
              Food Banks
            </div>
            <div className="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Public</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Churches</label>
            </div>
            <div className="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Private</label>
            </div>
        </div>
    </div>
    )
}

export default VerticalMenu;
>>>>>>> 18209d27cb119e655a95831737da74bb69205d56
