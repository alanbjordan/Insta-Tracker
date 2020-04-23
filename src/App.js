import React from 'react';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import Menu from './components/Menu';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <main>
        <Menu />
        <div className="wrapper">
            <VerticalMenu />
            <Map
              // google={this.props}
              center={{ lat: 33.749, lng: -84.388 }}
              height={parseFloat("300px")}
              zoom={15}
            />
            <CovidData />
            <>
              <News />
            </>
        </div>
      </main>
    </div>
  );
}

export default App;
