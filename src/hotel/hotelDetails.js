import React,{Component} from 'react';
import RoomApi from './roomApi';

const url = "https://cherish-your-journey-api.herokuapp.com/quicksearch";

class HotelDetails extends Component {
        constructor(){
            super()

            this.state={
                QuickData:''
            }
        }

        render(){
            return (
                <>
                   <RoomApi quickData={this.state.QuickData}/>
                </>
            )
        }

        componentDidMount(){
            console.log("Heloo")
            fetch(url)
            .then((res) => res.json())
            .then((data) =>  this.setState({QuickData:data}))
        }

}

//this.setState({QuickData:data}

export default HotelDetails;