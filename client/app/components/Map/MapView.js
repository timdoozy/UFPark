import React, { useState, Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import ReactSearchBox from 'react-search-box';
// I want to add custom logos but it is not currently working
//import listlogo from '..Images/icons8-list-50.png';
//import settingslogo from '..Images/icons8-settings-50.png';

function MapView () {

    const style = {width: '100%', height: '600px', position: 'relative'}

    const [defaultCoordinates, setDefaultCoordinates] = useState({center: {lat: 29.6436, lng: -82.3549}, zoom: 14});
    
    const [selectedLocation, setSelectedLocation] = useState({});

    const handleSelectedLocation = (response) => {
        console.log(response);
        setSelectedLocation(response);
        console.log(selectedLocation);
    };

    const data = [
        {
            value: 'East Campus',
            "lotName": "East Campus",
            "distance": 13.7,
            "availability": 42,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.67317448,
            "longitude": -82.29961516
          },
          {
              value: 'Veterinary Hospital',
              "lotName": "Veterinary Hospital",
              "distance": 5.3,
              "availability": 68,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63413743,
              "longitude": -82.35123307
            },
            {
              value: 'SW Archer Rd',
              "lotName": "Sw Archer road",
              "distance": 4.9,
              "availability": 18,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63544576,
              "longitude": -82.35139415
            },
            {
              value: 'Animal Sciences Building',
              "lotName": "Animal Sciences Building",
              "distance": 6.2,
              "availability": 52,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63075108,
              "longitude": -82.35249506
            },
            {
              value: 'Ritchy Road Center',
              "lotName": "Ritchy Road-center",
              "distance": 6.8,
              "availability": 62,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63033589,
              "longitude": -82.35493256
            },
            {
              value: 'Natural Area Teaching Laboratory',
              "lotName": "Natural Area Teaching Laboratory",
              "distance": 7.3,
              "availability": 66,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63132446,
              "longitude": -82.36768693
            },
            {
              value: 'Southwest Recreation Center',
              "lotName": "Southwest Recreation Center",
              "distance": 6.7,
              "availability": 89,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63754095,
              "longitude": -82.36834185
            },
            {
              value: 'Park and Ride 2',
              "lotName": "Park and Ride 2",
              "distance": 8.8,
              "availability": 75,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63839694,
              "longitude": -82.37691297
            },
            {
              value: 'Cultural Complex Parking',
              "lotName": "Cultural Complex Parking",
              "distance": 7.1,
              "availability": 13,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63627022,
              "longitude": -82.36983473
            },
            {
              value: 'Natural Area Drive',
              "lotName": "Natural Area drive",
              "distance": 7.3,
              "availability": 73,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63604015,
              "longitude": -82.3679952
            },
            {
              value: 'Donald R. Dizzey Stadium',
              "lotName": "Donald R. Dizzey Stadium",
              "distance": 6.9,
              "availability": 87,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63654908,
              "longitude": -82.36883932
            },
            {
              value: 'Harn Museum of Art',
              "lotName": "Harn Museum of Art",
              "distance": 8.9,
              "availability": 96,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63754836,
              "longitude": -82.36961039
            },
            {
              value: 'Bledsoe Drive Parking',
              "lotName": "Bledsoe drive parking",
              "distance": 6.8,
              "availability": 25,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63753679,
              "longitude": -82.36920398
            },
            {
              value: 'Administration Maintenance Parking',
              "lotName": "Administration Maintenance Parking",
              "distance": 6.8,
              "availability": 46,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.6399527,
              "longitude": -82.36629008
            },
            {
              value: 'Horticulture Department Parking',
              "lotName": "Horticulture Department Parking",
              "distance": 5.6,
              "availability": 27,
              "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
              "latitude": 29.63914318,
              "longitude": -82.36004388
            },
            {
              value: 'Parking Garage 8',
              "lotName": "Parking Garage 8",
              "distance": 2,
              "availability": 82,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64516099,
              "longitude": -82.33731625
            },
            {
              value: 'Parking Garage 5',
              "lotName": "Parking Garage 5",
              "distance": 1.7,
              "availability": 89,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64364893,
              "longitude": -82.35147529
            },
            {
              value: 'Woodlawn Drive Parking',
              "lotName": "Woodlawn drive Parking",
              "distance": 3.2,
              "availability": 5,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64591756,
              "longitude": -82.35536956
            },
            {
              value: 'Maguire Non-Resident Parking',
              "lotName": "Maguire non-resident parking",
              "distance": 6.9,
              "availability": 25,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64208542,
              "longitude": -82.37040579
            },
            {
              value: 'Lakeside Parking',
              "lotName": "Lakeside Parking",
              "distance": 5.4,
              "availability": 19,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64111178,
              "longitude": -82.36583116
            },
            {
              value: 'Fraternity Drive Parking',
              "lotName": "Fraternity drive Parking",
              "distance": 3.3,
              "availability": 87,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64678311,
              "longitude": -82.35761431
            },
            {
              value: 'Sorority Pond Parking',
              "lotName": "Sorority Pond Parking",
              "distance": 2.4,
              "availability": 83,
              "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
              "latitude": 29.64344336,
              "longitude": -82.33545474
            },
            {
              value: 'SW Archer Road - Disabled Parking',
              "lotName": "SW Archer Road-Disabled Parking",
              "distance": 5.2,
              "availability": 20,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.63538145,
              "longitude": -82.35269701
            },
            {
              value: 'Veterinary Small Animal Hospital - Disabled Parking',
              "lotName": "Veterinary Small Animal Hospital-Disabled Parking",
              "distance": 5.3,
              "availability": 24,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.63297981,
              "longitude": -82.35084474
            },
            {
              value: 'Center for Environmental and Human Toxicity - Disabled Parking',
              "lotName": "Center for Environmental and Human Toxicity-Disabled Parking",
              "distance": 4.2,
              "availability": 28,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.63754058,
              "longitude": -82.35356644
            },
            {
              value: 'Veterinary Medicine - Disabled Parking',
              "lotName": "Veterinary Medicine-Disabled Parking",
              "distance": 5,
              "availability": 29,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.63419732,
              "longitude": -82.34983353
            },
            {
              value: 'Shands Hospital Parking 9 - Disabled Parking',
              "lotName": "Shands Hospital Parking 9-Disabled Parking",
              "distance": 4.3,
              "availability": 70,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.636105, 
              "longitude": -82.350076
            },
            {
              value: 'Cory Village Parking',
              "lotName": "Cory Village Parking",
              "distance": 4.9,
              "availability": 88,
              "decals": ["All", "Brown 2", "Disabled Student"],
              "latitude": 29.64724268,
              "longitude": -82.36253477
            },
            {
              value: 'Maguire Village Parking',
              "lotName": "Maguire Village Parking",
              "distance": 7.3,
              "availability": 67,
              "decals": ["All", "Brown 2", "Disabled Student"],
              "latitude": 29.64082979,
              "longitude": -82.37220837
            },
            {
              value: 'Diamond Village Parking',
              "lotName": "Diamond Village Parking",
              "distance": 1.7,
              "availability": 76,
              "decals": ["All", "Brown 3", "Disabled Student"],
              "latitude": 29.64166475,
              "longitude": -82.34217559
            },
            {
              value: 'Norman Hall Parking - Disabled Parking',
              "lotName": "Norman Hall Parking-Disabled Parking",
              "distance": 1.3,
              "availability": 58,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.64732317,
              "longitude": -82.33758748
            },
            {
              value: 'Department of Environmental Engineering Sciences Parking - Disabled Parking',
              "lotName": "Department of Environmental Engineering Sciences Parking-Disabled Parking",
              "distance": 0.8,
              "availability": 92,
              "decals": ["All", "Disabled Student", "Disabled Student"],
              "latitude": 29.64189076,
              "longitude": -82.34818962
            },
            {
              value: 'New Physics Building Parking',
              "lotName": "New Physics Building Parking",
              "distance": 3.3,
              "availability": 43,
              "decals": ["All", "Red 1", "Disabled Student"],
              "latitude": 29.6436437,
              "longitude": -82.35081843
            },
            {
              value: 'Jennings Hall Parking',
              "lotName": "Jennings Hall Parking",
              "distance": 0.6,
              "availability": 91,
              "decals": ["All", "Red 1", "Disabled Student"],
              "latitude": 29.64350961,
              "longitude": -82.34312055
            },
            {
              value: 'Beaty Towers Parking',
              "lotName": "Beaty Towers Parking",
              "distance": 1.2,
              "availability": 32,
              "decals": ["All", "Red 1", "Disabled Student"],
              "latitude": 29.64371438,
              "longitude": -82.34113409
            },
            {
              value: 'Ustler Hall Parking',
              "lotName": "Ustler Hall Parking",
              "distance": 1.1,
              "availability": 86,
              "decals": ["All", "Red 1", "Disabled Student"],
              "latitude": 29.65071422,
              "longitude": -82.3470547
            },
            {
              value: 'Murphee Hall Parking',
              "lotName": "Murphee Hall Parking",
              "distance": 1.1,
              "availability": 56,
              "decals": ["All", "Red 1", "Disabled Student"],
              "latitude": 29.65183489,
              "longitude": -82.34718008
            }
    ]

    const placeMark = (location) => {
        return(
            <Marker 
            name={location.value}
            position={{lat: location.latitude, lng: location.longitude}}
            >
                <InfoWindow
                    visible={infoWindow}>
                        <div className={infoWindow}>
                            <p>
                                Distance to Century Tower = {location.distance} <br />
                                The availability is {location.availability} % <br />
                                The decals that work here are {location.decals} <br />
                            </p>
                        </div>
                </InfoWindow>
            </Marker>
            
        )
    }

        return (
                <div id="globalMapContainer">
                    <div id="searchElement">
                        <ReactSearchBox
                        placeholder="Search for parking"
                        data={data}
                        onSelect={record => handleSelectedLocation(record)}
                        />
                    </div>
                    <div id="mapElement">
                        <Map google={google} zoom={defaultCoordinates.zoom} initialCenter={defaultCoordinates.center} style={style}>
                            {placeMark(selectedLocation)}
                        </Map>
                    </div>
                </div>
            )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDzjKdRoiTMGMEU_W6LmzZPQEVL6GR9ejI")
})(MapView)