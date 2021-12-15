import React,{Component} from "react";
import {Link} from 'react-router-dom';
import './booking.css';

const url = "https://cherish-your-journey-api.herokuapp.com/hotel/";
const PostUrl = "https://zomoapp.herokuapp.com/placeOrder"

class Booking extends Component{

    constructor(){
        super()

        this.state={
            ids:Math.floor(Math.random()*10000),
            details:'',
            hotelname:sessionStorage.getItem('name'),
            fname:'',
            lname:'',
            email:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[1]:'',
            phone:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[2]:'',
            checkIn:'',
            checkOut:'',
            room:'',
            adults:'',
            amount:'0',
            tdiscount:'700',
            aftdiscount:'0',
            tax:'100',
            tamount:'0'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    handleRoom = (event) => {
        this.setState({[event.target.name]:event.target.value});
        var r = Number(this.state.room);
        if(r>0){
            var amounts = Number(this.state.amount)+(700*r);
            var aftdiscounts = amounts+Number(this.state.tdiscount);
            var taxs = aftdiscounts+Number(this.state.tax)
            this.setState({amount:amounts,aftdiscount:aftdiscounts,tamount:taxs})
        }
    }

    // var a = this.state.adults
    // var r = this.state.room

    handleAdults = (event) => {
        this.setState({[event.target.name]:event.target.value});
        var a = Number(this.state.adults);
        if(a>2){
            var amountss = Number(this.state.amount)+300;
            var aftdiscountss = amountss+Number(this.state.tdiscount);
            var taxss = aftdiscountss+Number(this.state.tax);
            console.log(amountss,aftdiscountss,taxss)
            this.setState({amount:amountss,aftdiscount:aftdiscountss,tamount:taxss})
        }
    }

    handleSubmit = () => {
        sessionStorage.setItem("email",this.state.email)
        fetch(PostUrl,
            {
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(this.props.history.push('/viewPlace'))
    }

    handleSubmission= (event) => {
        event.preventDefault()
    }

    render(){
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Please ! Login first</h1>
                    <Link to='/login'><button className="btn btn-danger">Login</button></Link>
                </div>
            )
        }
        return(
            <>
                <div className="container-fluid contf">
                    <div className="card">
                        <div className="card-heading" style={{backgroundColor:'powderblue'}}>
                            <div className="image-text">
                                <h3 style={{Color:'midnightblue',fontWeight:'bold'}}>Your Bookings from {this.state.details.name}</h3>
                                <p>{this.state.details.address}</p>
                            </div>
                            <div className="image-text">
                                <img style={{width:'80px',height:'80px'}} src={this.state.details.image} alt="adjsd"/>    
                            </div>   
                        </div>
                        <div className="card mt-4 ml-2 mr-2">
                            <div className="card-heading" style={{backgroundColor:'pink',padding:'4px 4px 4px'}}>
                                <h4>Login to prefil travel details and get access</h4>
                            </div>
                            <form onSubmit={this.handleSubmission}>
                                <div className="row ml-2"> 
                                    <div className="form-group col-md-5 ml-2">
                                        <label><b>First Name :</b></label>
                                        <input className="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} placeholder="First name"/>
                                    </div>
                                    <div className="form-group col-md-5 ">
                                        <label><b>Last Name :</b></label>
                                        <input className="form-control" name="lname" value={this.state.lname} onChange={this.handleChange} placeholder="Last name"/>
                                    </div>
                                    <div className="form-group col-md-5 ">
                                        <label><b>Enter Your email :</b></label>
                                        <input className="form-control" value={this.state.email} onChange={this.handleChange} name="email"/>
                                    </div>
                                    <div className="form-group col-md-5 ">
                                        <label><b>Phone Number :</b></label>
                                        <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-sm-3 ">
                                        <label><b>Check-In</b></label>
                                        <input className="form-control" name="checkIn" value={this.state.checkIn} onChange={this.handleChange} type="date"/>
                                    </div>
                                    <div className="form-group col-sm-3 ">
                                        <label><b>Check-Out</b></label>
                                        <input className="form-control" name="checkOut" value={this.state.checkOut} onChange={this.handleChange} type="date"/>
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label><b>Room</b></label>
                                        <input className="form-control" name="room" value={this.state.room} onChange={this.handleRoom} type="number"/>
                                    </div>
                                    <div className="form-group col-sm-2">
                                        <label><b>Adults</b></label>
                                        <input className="form-control" name="adults" value={this.state.adults} onChange={this.handleAdults} type="number"/>
                                    </div>
                                    <button className="btn btn-warning" onClick={this.handleSubmit}>Submit Details</button>
                                    
                                    <div className="card ml-3 mb-4" style={{width:'90%'}}>
                                        <div className="card-heading" style={{backgroundColor:'lightblue',padding:'4px 4px 4px'}}>
                                            <h4>Price Break-Up</h4>
                                        </div>
                                        <div className='card-body'>
                                            <div>
                                                <span>Amount:- </span>&nbsp; &nbsp; &nbsp;
                                                <span>{this.state.amount}</span>
                                            </div>
                                            <div>
                                                <span>Total Discount:- </span>&nbsp; &nbsp; &nbsp;
                                                <span>{this.state.tdiscount}</span>
                                            </div>
                                            <div>
                                                <span>After Disount:- </span>&nbsp; &nbsp; &nbsp;
                                                <span>{this.state.aftdiscount}</span>
                                            </div>
                                            <div>
                                                <span>Tax & Service fee:- </span>&nbsp; &nbsp; &nbsp;
                                                <span>{this.state.tax}</span>
                                            </div>
                                            <div>
                                                <span>Total Amount:- </span>&nbsp; &nbsp; &nbsp;
                                                <span>{this.state.tamount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card ml-3" style={{width:'90%'}}>
                                        <div className="card-heading" style={{backgroundColor:'orange',padding:'4px 4px 4px'}}>
                                            <h5 style={{fontWeight:'bold',marginLeft:'10px'}}>Important information</h5>
                                        </div>
                                        <div className='card-body'>
                                            <p style={{fontWeight:'bold'}}>Hotel Rule</p>
                                            <ul>
                                                <li>Guests with fever are not allowed</li>
                                                <li>Guests from containment zones are not allowed</li>
                                                <li>Guests below 18 years of age are not allowed at the property.</li>
                                                <li>Passport, Driving License and Govt. ID are accepted as ID proof(s)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </form> 
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        var id = sessionStorage.getItem('hotelId');
        var disc = Number(this.state.tdiscount);
        var texs = Number(this.state.tax);
        fetch(`${url}${id}`)
        .then((res) => res.json())
        .then((data) => {
                sessionStorage.setItem('name',data[0].name)
                var afdisc = Number(data[0].price-disc)
                var aftex = Number(afdisc+texs)
            this.setState({details:data[0],amount:data[0].price,aftdiscount:afdisc,tamount:aftex})
        })
    }

}

export default Booking;