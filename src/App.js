<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import Map from "./components/Map";
import CovidData from "./components/CovidData";
import "./App.css";
import VerticalMenu from "./components/VerticalMenu";
import Menu from "./components/Menu";
=======
import React from 'react';
import logo from './logo.svg';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import Menu from './components/Menu';
import News from './components/News';
>>>>>>> 18209d27cb119e655a95831737da74bb69205d56

function App() {
  return (
    <div className="App">
      <main>
        <Menu />
<<<<<<< HEAD
        <div class="wrapper">
          <VerticalMenu />
          <Map />
          <CovidData />
=======
        <div className="wrapper">
            <VerticalMenu />
            <Map />
            <CovidData />
            <>
              <News />
            </>
>>>>>>> 18209d27cb119e655a95831737da74bb69205d56
        </div>
      </main>
    </div>
  );
}

export default App;
