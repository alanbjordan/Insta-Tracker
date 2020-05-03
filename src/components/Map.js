
import React from 'react';
import Iframe from 'react-iframe'
import '../App.css';
import './Component.css';

function Map() {

return (
    <div className='map'>
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" 
      marginheight="0" marginwidth="0" title="2019-nCoV" 
      src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=dark"
      >
      </iframe>
    </div>  
)

}

export default Map;
