import React from 'react';
import '../App.css';
import './Component.css';
import Youtube from './Youtube';
import Twitter from './Twitter';

function VerticalMenu() {

    return (
        <div id="vertmenu">
            <div className='twittervm'>
                <Twitter />
            </div>
            <div className='youtubevm'>
                <Youtube />
            </div> <hr />
        </div>
    )
}

export default VerticalMenu;