
import React from 'react';
import Iframe from 'react-iframe'
import '../App.css';

function Map() {

return (
    <div>
        <Iframe width="98%" height="98%" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLaD66tR09YgRhBoLv9TPoTI&key=AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0" allowfullscreen></Iframe>
    </div>  
)

}

export default Map;