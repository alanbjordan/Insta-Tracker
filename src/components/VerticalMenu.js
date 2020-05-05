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
            <div>
                <h1 style={{marginTop: "15px"}} className="worldTitle">World Cases</h1>
            </div>
            <div className='youtubevm'>
            
                {/* <Youtube /> */}
                <CountryTable />
            </div> 
        </div>
    )
}

export default VerticalMenu;

