
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    state  = {
      center: {lat: 84.3880, lng: 33.7490},
      zoom: 11
    };

    componentDidMount(){
        if (!!navigator.geolocation) {
          navigator.geolocation.watchPosition((position) => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });
          },
          (err) => console.log(err),
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
          );
        } else {
          //  // No Support Web
          alert('This page cannot load Google Maps properly')
        }
      }
  
    render() {
      return (
         <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0" }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
        />
      );
    }
  }
  

export default Map;