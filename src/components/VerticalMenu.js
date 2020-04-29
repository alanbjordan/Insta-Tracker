import React from 'react';
import '../App.css';
import './Component.css';
import Youtube from './Youtube';
import Twitter from './Twitter';

function VerticalMenu() {

    return (
        <div className="ui vertical menu" id="vertmenu">
            <div className="item">
                <Youtube />
            </div> <hr />
            <div className="item">
                <Twitter />
            </div>
        </div>
    )
}

export default VerticalMenu;