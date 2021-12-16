import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
        if(!this.state.orders){
            return(
                <div>
                    <h1>Login first to see booking</h1>
                </div>
            )
        }
        console.log(this.state.orders)
        return(
            <>
            <Link className="btn btn-danger" to='/'>Go To Home</Link>
            <div className="container">
                <ViewBooking Order={this.state.orders}/>
            </div>
            <h1 style={{color:'green',fontWeight:'bold',textAlign:'center'}}>!* Successfully Booking *!</h1>
            </>
        )
    }

    // get orders 
    componentDidMount(){
        if(sessionStorage.getItem('userData')){
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`)
        .then((res) => {
            this.setState({orders:res.data})
        })
        }
    }
}

export default BookingApi;