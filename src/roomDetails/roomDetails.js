import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './roomDetails.css';

const url = "https://cherish-your-journey-api.herokuapp.com/hotel/";

class RoomDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            hotelDetails:'',
            hotel_name:sessionStorage.getItem('name')
        }
    }

    render(){
        const {hotelDetails} = this.state;
        var name = this.state.hotelDetails.name;
        sessionStorage.setItem('name',name)
        return(
            <>
                <div>
                    <div className="d-flex p-3 text-white">
                        <div className="p-2 bg-info">
                            <span className='hotel-name'>CITY - </span><span>{hotelDetails.city}</span>
                        </div>
                        <div className="p-2 ml-auto bg-info">Rating :- {hotelDetails.rating}<i className="fas fa-star"></i></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row container-fluid p-4 ml-auto">
                        <div ><img className="imgs" src={this.state.hotelDetails.image} alt="Hotel_Image"/></div>
                        <div className="details">
                            <div style={{marginLeft:'10px'}}>
                                <h3><b>{hotelDetails.name}</b></h3>
                                <p><b>{hotelDetails.city}</b></p>
                            </div>
                            <div>
                                <div style={{marginLeft:'25px'}}>
                                    <h5><b>About The {hotelDetails.name}</b></h5>
                                    <p style={{color:'grey'}}>Located in the city centre, the property offers <br/>unmatched comfort and luxury with grand suites, an outdoor pool, exotic spa and elite restaurants.
                                    </p></div>
                                    <ul>
                                        <li>Take a plunge in the outdoor pool.</li>
                                        <li>Relax with exfoliating scrubs and soothing massage therapies at the spa.</li>
                                        <li>Dine at Alchemy, the hotel's fine dining restaurant with a microbrewery.</li>
                                        <li>A jacuzzi for relaxation</li>
                                        <li>300+ guests like you rated their stay Good</li>
                                        <li>Relax in style at the spa</li>
                                        <li>Cubbon Park is 3.4 km from the property</li>
                                    </ul>
                                </div>
                                <div className="row p-2 m-auto float-right">
                                    <Link className="btn btn-info" to={`/hotel/:${hotelDetails.name}`} style={{borderRadius:'15px'}}>BOOK THIS NOW</Link>
                                </div>
                        </div>
                    </div>
                    <div className="textsa container-fluid">
                        <h5><b>Executive Room with Loung Access</b></h5>
                        <p>For 3 Adults</p>
                        <div className="row m-auto" style={{marginTop:'10px'}}>
                            <div>
                                <p><b>0- Free cancellation till 12hrs<br/> before check in</b></p>
                                <p>1- Room with free cancellation</p>
                            </div>
                            <div className="ml-3">
                                <p>per Night</p>
                                <h4>Rs. {hotelDetails.price}</h4> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        var id = this.props.match.params.id;
        sessionStorage.setItem("hotelId",id)
       fetch(`${url}${id}`)
       .then((res) => res.json())
       .then((data) => {
           this.setState({hotelDetails:data[0]})
       })
    }

}

/** value={this.state.fname} onChange={this.handleChange} */

export default RoomDetails;