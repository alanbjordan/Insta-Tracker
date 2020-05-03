import React from 'react';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Case from './components/Case';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <main>
            <div>
               <Menu />
              <div className="wrapper" > 
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
              
            </div>
            
          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
