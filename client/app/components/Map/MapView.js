import React, { useState, Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import ReactSearchBox from 'react-search-box';
// I want to add custom logos but it is not currently working
//import listlogo from '..Images/icons8-list-50.png';
//import settingslogo from '..Images/icons8-settings-50.png';

function MapView () {

    const style = {width: '100%', height: '500px', position: 'relative'}

    const [defaultCoordinates, setDefaultCoordinates] = useState({center: {lat: 29.6436, lng: -82.3549}, zoom: 14});

    const data = [
        {
            key: 'norman-garage',
            value: 'Norman Garage',
            lat: 29.645,
            lng: -82.338
        },
        {
            key: 'beaty-towers',
            value: 'Beaty Towers Parking Lot',
            lat: 29.643,
            lng: -82.341
        },
        {
            key: 'jennings-parking-lot',
            value: 'Jennings Parking Lot',
            lat: 29.643,
            lng: -82.343
        },
        {
            key: 'university-police-parking-lot',
            value: 'University Parking Lot',
            lat: 29.644,
            lng: -82.343
        },
        {
            key: 'rawlings-garage',
            value: 'Rawlings Parking Garage',
            lat: 29.645,
            lng: -82.343
        },
        {
            key: 'cypress-hall-parking-lot',
            value: 'Cypress Hall Parking Lot',
            lat: 29.645,
            lng: -82.339
        },
        {
            key: 'mccarty-hall-parking-lot',
            value: 'McCarty Hall Parking Lot',
            lat: 29.646,
            lng: -82.344
        },
        {
            key: 'reitz-union-parking-lot',
            value: 'Reitz Union Parking Lot',
            lat: 29.644,
            lng: -82.348
        },
        {
            key: 'commuter-lot',
            value: 'Commuter Lot',
            lat: 29.642,
            lng: -82.351
        },
        {
            key: 'murphree-parking-lot',
            value: 'Murphree Parking Lot',
            lat: 29.651,
            lng: -82.347
        },
        {
            key: 'oconnell-center-parking-lot',
            value: 'Oconnell Center Parking Lot',
            lat: 29.651,
            lng: -82.351
        },
        {
            key: 'hume-parking-lot',
            value: 'Hume Parking Lot',
            lat: 29.643,
            lng: -82.351
        },
        {
            key: 'graham-parking-lot',
            value: 'Graham Hall Parking Lot',
            lat: 29.645,
            lng: -82.354
        },
        {
            key: 'fraternity-row-parking-lot',
            value: 'Fraternity Parking Lot',
            lat: 29.647,
            lng: -82.358
        },
        {
            key: 'springs-parking-lot',
            value: 'Springs Parking Lot',
            lat: 29.649,
            lng: -82.357
        },
        {
            key: 'track-parking-lot',
            value: 'Track Parking Lot',
            lat: 29.649,
            lng: -82.355
        },
        {
            key: 'keys-parking-lot',
            value: 'Keys Parking Lot',
            lat: 29.648,
            lng: -82.354
        },
        {
            key: 'law-school-parking-lot',
            value: 'Levin Law School Parking Lot',
            lat: 29.648,
            lng: -82.359
        },
        {
            key: 'lakeside-parking-lot',
            value: 'Lakeside Parking Lot',
            lat: 29.642,
            lng: -82.366
        },
        {
            key: 'southwest-rec-parking-lot',
            value: 'Southwest Rec Parking Lot',
            lat: 29.642,
            lng: -82.366
        },
        {
            key: 'hilton-parking-lot',
            value: 'Hilton Parking Lot',
            lat: 29.637,
            lng: -82.375
        }
    ]

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
                        data={data}
                        />
                    </div>
                    <div id="mapElement">
                        <Map google={google} zoom={defaultCoordinates.zoom} initialCenter={defaultCoordinates.center} style={style}>
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