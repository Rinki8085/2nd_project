import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Header from './Header';
import Login from './login/loginComponent';
import Register from './login/registerComponent';
import Home from './home/Home';
import Triptype from './tripType/tripType';
import HotelApi from './hotel/hotel_api';
import ListingApi from './listingHotel/listingApi';
import RoomDetails from './roomDetails/roomDetails';
import Booking from './booking/booking';
import BookingApi from './booking/bookingApi';
//import Footer from './Footer';

const Routing = () => {

    return(
        <Router>
            <Header/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route exact path= "/" component={Home}/>
            <Route path='/trips' component={Triptype}/>
            <Route path='/hotel_list' component={HotelApi}/>
            <Route path='/list/:roomId' component={ListingApi}/>
            <Route path='/hotel_details/:id' component={RoomDetails}/>
            <Route path='/hotel/:restName' component={Booking}/>
            <Route path='/viewPlace' component={BookingApi}/>
         
        </Router>
    )
}

// <Footer/>

export default Routing;