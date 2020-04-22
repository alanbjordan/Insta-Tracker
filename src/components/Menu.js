import React from 'react';
import '../App.css';

function Menu() {
    
    return (
        <div className="ui menu">
        <div className="header item">
          Home
        </div>
<<<<<<< HEAD
        <a href='#' className="item">
          News
        </a>
        <a href='#' className="item">
          Trends
        </a>
        <a href='#' className="item">
=======
        <a href="#" className="item">
          News
        </a>
        <a href="#" className="item">
          Trends
        </a>
        <a href="#" className="item">
>>>>>>> bb72d71023bd6829aa109ab088c1feb0312de22e
          Things To Do
        </a>
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i className="search icon"></i>
          </div>
        </div>
        <div className="right item">
          <div className="ui action input">
            <input type="text" placeholder="Navigate to..."/>
            <div className="ui button">Go</div>
          </div>
        </div>
      </div>
    )
}

export default Menu;