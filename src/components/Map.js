
import React from 'react';
import Iframe from 'react-iframe'
import '../App.css';
import './Component.css';

function Map() {

return (
    <div className='map'>
     <Iframe
        width='100%'
        height='100%'
        frameborder='0'
        src='https://studio.here.com/viewer/?project_id=a546131c-800d-4d07-9c83-66f103eb1d62'
      ></Iframe>
    </div>  
)

}

export default Map;
