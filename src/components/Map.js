
import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker
} from "react-google-maps";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-google-places-autocomplete";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0");
Geocode.enableDebug();
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      area: "",
      state: "",
      isOpen: true,
      mapPosition: {
        lat: (this.props.center.lat),
        lng: (this.props.center.lng)
      },
      markerPosition: {
        lat: (this.props.center.lat),
        lng: (this.props.center.lng)
      }
    };
  }
  /**
   * Get the current address from the default map position and set those values in the state
   */
  componentDidMount = () => {
    Geocode.fromLatLng(
      (this.state.mapPosition.lat),
      (this.state.mapPosition.lng)
    ).then(
      response => {
        console.log("This the response", response);
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        console.log("city", city, area, state);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : ""
        });
      },
      error => {
        console.error(error);
      }
    );
  };
  /**
   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
   *
   * @param nextProps
   * @param nextState
   * @return {boolean}
   */
  shouldComponentUpdate = (nextProps, nextState) => {
    if (
      (this.state.markerPosition.lat) !==
        (this.props.center.lat) ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true;
    } else if (
      (this.props.center.lat) === (nextProps.center.lat)
    ) {
      return false;
    }
  };
  /**
   * Get the city and set the city input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getCity = addressArray => {
    console.log("Address array: ", addressArray);
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };
  /**
   * Get the area and set the area input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getArea = addressArray => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };
  /**
   * Get the address and set the address input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getState = addressArray => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };
  /**
   * And function for city,state and address input
   * @param event
   */
  onAutoSelect = ({ description }) => {
    geocodeByAddress(description)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        let aLat = ({ lat });
        let aLng = ({ lng });
        this.setState({
          address: description,
          markerPosition: {
            lat: lat ,
            lng: lng 
          },
          mapPosition: {
            lat: lat ,
            lng: lng 
          }
        });
        console.log("Lat and Lng: ",  lat ,  lng );
      });
    // this.setState({ address: description });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /**
   * This Event triggers when the marker window is closed or opened
   *
   * @param event
   */
  onInfoWindowOpen = event => this.setState({ isOpen: true });
  onInfoWindowClose = event => this.setState({ isOpen: false });
  /**
   * When the user types an address in the search box
   * @param place
   */
  // onPlaceSelected = place => {
  //   const address = place.formatted_address,
  //     addressArray = place.address_components,
  //     city = this.getCity(addressArray),
  //     area = this.getArea(addressArray),
  //     state = this.getState(addressArray),
  //     latValue = (place.geometry.location.lat()),
  //     lngValue = (place.geometry.location.lng());
  //   // Set these values in the state.
  //   this.setState({
  //     address: address ? address : "",
  //     area: area ? area : "",
  //     city: city ? city : "",
  //     state: state ? state : "",
  //     markerPosition: {
  //       lat: (latValue),
  //       lng: (lngValue)
  //     },
  //     mapPosition: {
  //       lat: (latValue),
  //       lng: (lngValue)
  //     }
  //   });
  //   console.log("state is: ", this.state);
  // };
  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the address, city, area and state from the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  onMarkerDragEnd = event => {
    console.log("event", event);
    let newLat = (event.latLng.lat()),
      newLng = (event.latLng.lng());
    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : ""
        });
      },
      error => {
        console.error(error);
      }
    );
  };
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: (this.state.mapPosition.lat),
            lng: (this.state.mapPosition.lng)
          }}
        >
          {/* For Auto complete Search Box */}
          <GooglePlacesAutocomplete
            style={{
              width: "100%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px",
              marginBottom: "100px"
            }}
            // onPlaceSelected={this.onPlaceSelected}
            onSelect={this.onAutoSelect}
          />
          {/*Marker*/}
          <Marker
            onClick={this.onInfoWindowOpen}
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: (this.state.markerPosition.lat),
              lng: (this.state.markerPosition.lng)
            }}
          >
            {/* InfoWindow on top of marker */}
            {this.state.isOpen && (
              <InfoWindow
                onClose={this.onInfoWindowClose}
                position={{
                  lat: (this.state.markerPosition.lat),
                  lng: (this.state.markerPosition.lng)
                }}
              >
                <div>
                  <span style={{ padding: 0, margin: 0 }}>
                    {this.state.address}
                  </span>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      ))
    );
    let map;
    if ((this.props.center.lat) !== undefined) {
      map = (
        <div>
          <div>
            <div className="form-group">
              <label htmlFor="">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                onChange={this.onChange}
                readOnly="readOnly"
                value={this.state.city}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Area</label>
              <input
                type="text"
                name="area"
                className="form-control"
                onChange={this.onChange}
                readOnly="readOnly"
                value={this.state.area}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                onChange={this.onChange}
                readOnly="readOnly"
                value={this.state.state}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                onChange={this.onChange}
                readOnly="readOnly"
                value={this.state.address}
              />
            </div>
          </div>
          <AsyncMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0&libraries=places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: this.props.height }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}
export default Map;


  // componentDidMount(){
    //     if (!!navigator.geolocation) {
    //       navigator.geolocation.watchPosition((position) => {
    //         this.setState({
    //             center: {
    //                 lat: position.coords.latitude,
    //                 lng: position.coords.longitude
    //             }
    //         });
    //       },
    //       (err) => console.log(err),
    //       { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
    //       );
    //     } else {
    //     // Error message for a location tracking denial
    //       alert('This page cannot load Google Maps properly')
    //     }
    //   }