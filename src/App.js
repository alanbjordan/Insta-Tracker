import React from 'react';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import Menu from './components/Menu';
import News from './components/News';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Exercise from './components/Exercise';
import Youtube from './components/Youtube';
import Twitter from './components/Twitter';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <main>
          <div className="ui menu">
          <Link to={"/"} className="header item">
            Home
          </Link>
          <a href="#" className="item">
            News
          </a>
          <a href="#" className="item">
            Trends
          </a>
          <Link to={"/exercises"} className="item">
            Things To Do
          </Link>
          <Route path="/" component={Menu} />
        </div>
            <div className="wrapper">
                <Route exact path="/" component={VerticalMenu}/>
                <Route exact path="/" component={Map} />
                <Route exact path="/" component={CovidData} />
                <>
                  <Route exact path="/" component={News} />
                </>
                <Route path="/exercises" component={Exercise} />
            </div>
            <Route exact path="/" component={Youtube} />
            <Route exact path="/" component={Twitter} />

          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
