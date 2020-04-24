import React from 'react';
import '../App.css';
import './Component.css';

function Menu() {
    
    return (
        <>
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
        </>
    )
}

export default Menu;