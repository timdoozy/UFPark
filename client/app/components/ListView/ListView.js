import React, {Component} from 'react';
//import ParkingData from './Parking.json';
import './ListView.css'

const ParkingData =[
        {
          "lotName": "East Campus",
          "distance": 13.7,
          "availability": 42,
          "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
          "latitude": 29.67317448,
          "longitude": -82.29961516
        },
        {
            "lotName": "Veterinary Hospital",
            "distance": 5.3,
            "availability": 68,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63413743,
            "longitude": -82.35123307
          },
          {
            "lotName": "Sw Archer road",
            "distance": 4.9,
            "availability": 18,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63544576,
            "longitude": -82.35139415
          },
          {
            "lotName": "Animal Sciences Building",
            "distance": 6.2,
            "availability": 52,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63075108,
            "longitude": -82.35249506
          },
          {
            "lotName": "Ritchy Road-center",
            "distance": 6.8,
            "availability": 62,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63033589,
            "longitude": -82.35493256
          },
          {
            "lotName": "Natural Area Teaching Laboratory",
            "distance": 7.3,
            "availability": 66,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63132446,
            "longitude": -82.36768693
          },
          {
            "lotName": "Southwest Recreation Center",
            "distance": 6.7,
            "availability": 89,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63754095,
            "longitude": -82.36834185
          },
          {
            "lotName": "Park and Ride 2",
            "distance": 8.8,
            "availability": 75,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63839694,
            "longitude": -82.37691297
          },
          {
            "lotName": "Cultural Complex Parking",
            "distance": 7.1,
            "availability": 13,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63627022,
            "longitude": -82.36983473
          },
          {
            "lotName": "Natural Area drive",
            "distance": 7.3,
            "availability": 73,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63604015,
            "longitude": -82.3679952
          },
          {
            "lotName": "Donald R. Dizzey Stadium",
            "distance": 6.9,
            "availability": 87,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63654908,
            "longitude": -82.36883932
          },
          {
            "lotName": "Harn Museum of Art",
            "distance": 8.9,
            "availability": 96,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63754836,
            "longitude": -82.36961039
          },
          {
            "lotName": "Bledsoe drive parking",
            "distance": 6.8,
            "availability": 25,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63753679,
            "longitude": -82.36920398
          },
          {
            "lotName": "Administration Maintenance Parking",
            "distance": 6.8,
            "availability": 46,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.6399527,
            "longitude": -82.36629008
          },
          {
            "lotName": "Horticulture Department Parking",
            "distance": 5.6,
            "availability": 27,
            "decals": ["All", "Green", "Park & Ride","Red 1", "Red 3", "Brown 2", "Brown 3", "Disabled Student", "Motorcycle/Scooter"],
            "latitude": 29.63914318,
            "longitude": -82.36004388
          },
          {
            "lotName": "Parking Garage 8",
            "distance": 2,
            "availability": 82,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64516099,
            "longitude": -82.33731625
          },
          {
            "lotName": "Parking Garage 5",
            "distance": 1.7,
            "availability": 89,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64364893,
            "longitude": -82.35147529
          },
          {
            "lotName": "Woodlawn drive Parking",
            "distance": 3.2,
            "availability": 5,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64591756,
            "longitude": -82.35536956
          },
          {
            "lotName": "Maguire non-resident parking",
            "distance": 6.9,
            "availability": 25,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64208542,
            "longitude": -82.37040579
          },
          {
            "lotName": "Lakeside Parking",
            "distance": 5.4,
            "availability": 19,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64111178,
            "longitude": -82.36583116
          },
          {
            "lotName": "Fraternity drive Parking",
            "distance": 3.3,
            "availability": 87,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64678311,
            "longitude": -82.35761431
          },
          {
            "lotName": "Sorority Pond Parking",
            "distance": 2.4,
            "availability": 83,
            "decals": ["All", "Red 1", "Red 3", "Disabled Student"],
            "latitude": 29.64344336,
            "longitude": -82.33545474
          },
          {
            "lotName": "SW Archer Road-Disabled Parking",
            "distance": 5.2,
            "availability": 20,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.63538145,
            "longitude": -82.35269701
          },
          {
            "lotName": "Veterinary Small Animal Hospital-Disabled Parking",
            "distance": 5.3,
            "availability": 24,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.63297981,
            "longitude": -82.35084474
          },
          {
            "lotName": "Center for Environmental and Human Toxicity-Disabled Parking",
            "distance": 4.2,
            "availability": 28,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.63754058,
            "longitude": -82.35356644
          },
          {
            "lotName": "Veterinary Medicine-Disabled Parking",
            "distance": 5,
            "availability": 29,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.63419732,
            "longitude": -82.34983353
          },
          {
            "lotName": "Shands Hospital Parking 9-Disabled Parking",
            "distance": 4.3,
            "availability": 70,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.636105, 
            "longitude": -82.350076
          },
          {
            "lotName": "Cory Village Parking",
            "distance": 4.9,
            "availability": 88,
            "decals": ["All", "Brown 2", "Disabled Student"],
            "latitude": 29.64724268,
            "longitude": -82.36253477
          },
          {
            "lotName": "Maguire Village Parking",
            "distance": 7.3,
            "availability": 67,
            "decals": ["All", "Brown 2", "Disabled Student"],
            "latitude": 29.64082979,
            "longitude": -82.37220837
          },
          {
            "lotName": "Diamond Village Parking",
            "distance": 1.7,
            "availability": 76,
            "decals": ["All", "Brown 3", "Disabled Student"],
            "latitude": 29.64166475,
            "longitude": -82.34217559
          },
          {
            "lotName": "Norman Hall Parking-Disabled Parking",
            "distance": 1.3,
            "availability": 58,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.64732317,
            "longitude": -82.33758748
          },
          {
            "lotName": "Department of Environmental Engineering Sciences Parking-Disabled Parking",
            "distance": 0.8,
            "availability": 92,
            "decals": ["All", "Disabled Student", "Disabled Student"],
            "latitude": 29.64189076,
            "longitude": -82.34818962
          },
          {
            "lotName": "New Physics Building Parking",
            "distance": 3.3,
            "availability": 43,
            "decals": ["All", "Red 1", "Disabled Student"],
            "latitude": 29.6436437,
            "longitude": -82.35081843
          },
          {
            "lotName": "Jennings Hall Parking",
            "distance": 0.6,
            "availability": 91,
            "decals": ["All", "Red 1", "Disabled Student"],
            "latitude": 29.64350961,
            "longitude": -82.34312055
          },
          {
            "lotName": "Beaty Towers Parking",
            "distance": 1.2,
            "availability": 32,
            "decals": ["All", "Red 1", "Disabled Student"],
            "latitude": 29.64371438,
            "longitude": -82.34113409
          },
          {
            "lotName": "Ustler Hall Parking",
            "distance": 1.1,
            "availability": 86,
            "decals": ["All", "Red 1", "Disabled Student"],
            "latitude": 29.65071422,
            "longitude": -82.3470547
          },
          {
            "lotName": "Murphee Hall Parking",
            "distance": 1.1,
            "availability": 56,
            "decals": ["All", "Red 1", "Disabled Student"],
            "latitude": 29.65183489,
            "longitude": -82.34718008
          }
];
const TableItem = (props) => {
    return(
        <tr>
            <td className="ListView-Data">{props.location.lotName}</td>
            <td className="ListView-Data">{props.location.distance} Mi</td>
            <td className="ListView-Data">{props.location.availability}%</td>
        </tr>
    )
}
class ListView extends Component {

constructor(props) {
    super(props);
    this.state={
        decals: props.decals,
        full: props.full,
        locations: [],
        query:""
    }
}

componentDidMount() {
    this.setState({ locations: ParkingData.sort((a,b)=> b.lotName.localeCompare(a.lotName))})
}

TableList() {
    return(
        this.state.locations
        .filter((data)=>
            data.decals.includes(this.state.decals)
        )
        .filter((data)=>
            data.availability<this.state.full
        )
        .filter((data)=>
             data.lotName.toLowerCase().includes(this.state.query.toLowerCase())
        )
        .map((data) =>
            <TableItem location={data}/>
        )
    )
}
alphabeticalSort(){
    {this.setState({locations: this.state.locations.sort((a,b)=> a.lotName.localeCompare(b.lotName))})}
}
distanceSort(){
    {this.setState({locations: this.state.locations.sort((a,b)=> a.distance-b.distance)})}
}
availabilitySort(){
    {this.setState({locations: this.state.locations.sort((a,b)=> a.availability-b.availability)})}
}
searchFiltering(event){this.setState({query: event.target.value})}
render() {
    return (
        <div className="ListView-Tablewrapper">
            <input className="ListView-filterinput" onChange={(e)=>this.searchFiltering(e)}
            placeholder="Search for Locations"/>
            <table className="ListView-Table">
                <tr>
                    <th className="ListView-Header"><button className="ListView-Sort" onClick={()=>this.alphabeticalSort()}>Lot Name &#9660;</button></th>
                    <th className="ListView-Header"><button className="ListView-Sort" onClick={()=>this.distanceSort()}>Distance &#9660;</button></th>
                    <th className="ListView-Header"><button className="ListView-Sort" onClick={()=>this.availabilitySort()}>Availability &#9660;</button></th>
                </tr>
                {this.TableList()}
                </table>
        </div>
    )
  }
}

export default ListView;