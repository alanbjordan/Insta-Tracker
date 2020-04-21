import React from 'react';
import '../App.css';

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
                <input type="checkbox" name="example"/>
                <label>Public</label>
            </div>
            <div class="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Private</label>
            </div>
          </div>
        <div class="item">
            <div class="header">
                Essential Shopping
            </div>
                <div class="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Pharmacy</label>
                </div>
                <div class="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Grocery</label>
                </div>
                <div class="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>Resturants</label>
                </div>
                <div class="ui checkbox">
                    <input type="checkbox" name="example"/>
                    <label>General</label>
                </div>
        </div>
        <div class="item">
            <div class="header">
              Food Banks
            </div>
            <div class="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Public</label>
            </div>
            <div class="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Churches</label>
            </div>
            <div class="ui checkbox">
                <input type="checkbox" name="example"/>
                <label>Private</label>
            </div>
        </div>
    </div>
    )
}

export default VerticalMenu;