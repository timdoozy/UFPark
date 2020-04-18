import React, { useState, Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import ReactSearchBox from 'react-search-box';
// I want to add custom logos but it is not currently working
//import listlogo from '..Images/icons8-list-50.png';
//import settingslogo from '..Images/icons8-settings-50.png';

function MapView () {

    const style = {width: '100%', height: '500px', position: 'relative'}

    const [defaultCoordinates, setDefaultCoordinates] = useState({center: {lat: 29.6436, lng: -82.3549}, zoom: 12});

    const [showMap, setShowMap] = useState(false);

    const handleMapClick = () => setShowMap(true);

    if (showMap == false)
    {
        return (
            <>
                <br />
                <button onClick={handleMapClick}>Map</button>
            </>
        )
    }
    else if (showMap == true)
    {
        return (
                <div id="globalMapContainer">
                    <h2>UF Park - Map</h2>
                    <div id="searchElement">
                        <ReactSearchBox
                        placeholder="Search for parking"
                        />
                    </div>
                    <div id="mapElement">
                        <Map google={google} zoom={14} initialCenter={defaultCoordinates.center} style={style}>
                        </Map>
                    </div>
                    <div id="footerWrapper">
                        <button id="currentLocationButton">Location</button>
                        <button id="listViewButton" src="../Images/icons8-list-50.png">List View</button>
                        <button id="settingsButton" src="../Images/icons8-settings-50.png">Settings</button>
                    </div>
                </div>
            )
    }

    
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDzjKdRoiTMGMEU_W6LmzZPQEVL6GR9ejI")
})(MapView)