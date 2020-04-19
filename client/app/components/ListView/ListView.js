import React, {Component} from 'react';
import ParkingData from './Parking.json';

const TableItem = (props) => {
    return(
        <tr>
            <td className="ListView-Data">{props.location.lotName}</td>
            <td className="ListView-Data">{props.location.distance}</td>
            <td className="ListView-Data">{props.location.availability}%</td>
        </tr>
    )
}

class ListView extends Component {

constructor(props) {
    super(props);
    this.state={
        decals:[],
        full: 100,
        locations: []
    }
}

componentDidMount() {
    this.setState({ locations: ParkingData.Parking.sort((a,b)=> b.lotName.localeCompare(a.lotName))})
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
        .map((data) =>
            <TableItem location={data}/>
        )
    )
}
alphabeticalSort(){
    {this.setState({locations: this.state.locations.sort((a,b)=> a.lotName.localeCompare(b.lotName))})}
}
distanceSort(){
    {this.setState({locations: this.state.locations.sort((a,b)=> a.distance.localeCompare(b.distance))})}
}
availabilitySort(){
    {this.setState({locations: this.state.locations.sort((a,b)=> a.availability-b.availability)})}
}
render() {
    return (
        <div>
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