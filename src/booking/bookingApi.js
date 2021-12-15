import React,{Component} from 'react';
import axios from 'axios';
import ViewBooking from './viewBooking';

const url = "https://zomoapp.herokuapp.com/viewOrder";
//const url1 = "https://zomoapp.herokuapp.com/updateOrder";

class BookingApi extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
            <div className="container">
                <ViewBooking Order={this.state.orders}/>
            </div>
            <h1 style={{color:'green',fontWeight:'bold',textAlign:'center'}}>!* Successfully Booking *!</h1>
            </>
        )
    }

    // get orders 
    componentDidMount(){
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`)
        .then((res) => {
            this.setState({orders:res.data})
        })
    }
}

export default BookingApi;