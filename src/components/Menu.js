import React from 'react';
import '../App.css';
import './Component.css';
import { Link } from 'react-router-dom';

function Menu() {
    
    return (
        <>
        <div className="menu1">
          <div className="logo">
            <div className="menuItem" style={{borderRight: "outset"}}>
              <Link to={"/"} className="menuLinks">
                <span className="logoInsta"><span style={{color: "red"}}> 1 </span> NSTA </span> <br></br> <span className="logoTracker"> TR <span style={{color: "red"}}> 9 </span>CKER</span>
              </Link>
            </div>
            <div className="menuItem" style={{fontStyle:"initial"}}>
              <Link to={"/case"} className="menuLinks" id="caseLink">
                Report Case
              </Link>
            </div>
          </div>
        </div>
        </>
    )
}

export default Menu;