import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div class="ui menu">
          <div class="header item">
            Home
          </div>
          <a class="item">
            News
          </a>
          <a class="item">
            Trends
          </a>
          <a class="item">
            Things To Do
          </a>
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i class="search icon"></i>
            </div>
          </div>
          <div class="right item">
            <div class="ui action input">
              <input type="text" placeholder="Navigate to..."/>
              <div class="ui button">Go</div>
            </div>
          </div>
        </div>
        <div class="wrapper">
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
            <div class="map">
                <h1 class="hello">Map Goes Here</h1>
            </div>
            <div class="data">
                <h2 class="covid">Covid Data Here</h2>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
