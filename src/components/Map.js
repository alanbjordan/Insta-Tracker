
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
        // Error message for a location tracking denial
          alert('This page cannot load Google Maps properly')
        }
      }

    darkModeStyles = [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]

    
  
    render() {
      return (
         <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0" }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            options={{styles: this.darkModeStyles}}
        />
      );
    }
  }
  

export default Map;