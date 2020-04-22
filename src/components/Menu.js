import React from 'react';
import '../App.css';

function Menu() {
    
    return (
        <div className="ui menu">
        <div className="header item">
          Home
        </div>
        <a className="item">
          News
        </a>
        <a className="item">
          Trends
        </a>
        <a className="item">
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