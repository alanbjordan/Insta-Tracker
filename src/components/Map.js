
import React from 'react';
import Iframe from 'react-iframe'
import '../App.css';
import './Component.css';

function Map() {

return (
    <div>

    
     <Iframe
        width='100%'
        height='100%'
        frameborder='0'
        style='border:0'
        src='https://studio.here.com/viewer/?project_id=e8bdb0c7-f853-4840-968d-d4f57547c09a'
        owfullscreen
        frameborder='0'
      ></Iframe>
    </div>  
)

}

export default Map;
