import React from 'react';
import '../App.css';
import './Component.css';
import Youtube from './Youtube';
import Twitter from './Twitter';

function VerticalMenu() {

    return (
        <div id="vertmenu">
            <div className='cdcyttext'>
                    CDC Video Updates
                </div>
            <div className='youtubevm'>
                
                <div>
                    <Youtube />
                </div>
            </div> <hr />
            <div className='cdcyttext'><h1>CDC Twitter Updates</h1></div>
            <div className='youtubevm' id="twitterFeed">
                <Twitter />
            </div>
            <div className='youtubevm'>
                <Youtube />
            </div> <hr />
        </div>
    )
}

export default VerticalMenu;