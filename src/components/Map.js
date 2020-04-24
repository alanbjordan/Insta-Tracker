
import React from 'react';
import Iframe from 'react-iframe'
import '../App.css';
import './Component.css';

function Map() {

return (
    <div>

    
    <Iframe width="100%" height="100%" frameborder="0" style={{border:"0"}} src="https://studio.here.com/viewer/?project_id=74445c55-ad75-45a7-8c52-0fb67c915aca" owfullscreen ></Iframe>
    </div>  
)

}

export default Map;