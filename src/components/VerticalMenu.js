import React from 'react';
import '../App.css';
import './Component.css';
import Youtube from './Youtube';
import Twitter from './Twitter';
import CountryTable from './CountryTable';

function VerticalMenu() {

    return (
        <div id="vertmenu">
            <div className='twittervm'>
                <h1 style={{marginTop: "10px", marginBottom: "10px"}}>CDC Twitter</h1>
                <Twitter />
            </div>
            <div className='youtubevm'>
                {/* <Youtube /> */}
                <div>
                    <h1>World Cases</h1>
                </div>
                <CountryTable />
            </div> <hr />
        </div>
    )
}

export default VerticalMenu;

