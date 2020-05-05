import React from 'react';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import Menu from './components/Menu';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Case from './components/Case';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <main>


            <Menu />
            <div className="wrapper">
                <Route exact path="/" component={VerticalMenu}/>
                <Route exact path="/" component={Map} />
                <Route exact path="/" component={CovidData} />
                <>
                  <Route exact path="/" component={News} />
                </>
                </div>
            <div className="classRouterDiv" >
                    <Route id="sidePage" path="/case" component={Case} />
            </div>
          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{/* <div className="App">
      <Router>
        <Switch>
          <main>


            <Menu />
            <div className="wrapper">
                <Route exact path="/" component={VerticalMenu}/>
                <Route exact path="/" component={Map} />
                <Route exact path="/" component={CovidData} />
                <>
                  <Route exact path="/" component={News} />
                </>
            </div>
            <div className="classRouterDiv" >
                    <Route id="sidePage" path="/case" component={Case} />
                  </div>
          </main>
        </Switch>
      </Router>
    </div> */}