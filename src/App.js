import React from 'react';
import logo from './logo.svg';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <main>
        <Menu />
        <div class="wrapper">
            <VerticalMenu />
            <Map />
            <CovidData />
        </div>
      </main>
    </div>
  );
}

export default App;
