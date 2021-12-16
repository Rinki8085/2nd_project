import React from 'react';
import './booking.css';

const ViewBooking = (props) => {

    const renderBooking = ({Order}) => {
        if(Order){
            return Order.map((item) => {
                return(
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Your Name:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.fname} {item.lname}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Your Email:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.email}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Phone No:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.phone}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Hotel Name:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.hotelname}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Check-In:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.checkIn}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Check-Out:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.checkOut}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Room:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.room}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Adults:- </span><span style={{fontWeight:'25px',color:'green'}}>{item.adults}</span>
                            </div>
                            <div className="col-md-6">
                                <span style={{fontWeight:'bold',fontSize:'26px'}}>Your total amount:- </span><span style={{fontWeight:'25px',color:'green'}}>Rs. {item.tamount}</span>
                            </div>
                        </div>
                    </>
                )
            })
        }else{
            return(
                <>
                    <h3>First login</h3>
                </>
            )
        }
    }

    return(
        <>
            <div className="container-fluid contf">
                <div className="card">
                    <div className="card-heading" style={{backgroundColor:'powderblue',padding:'5px 5px 5px 5px',fontWeight:'bold'}}>
                        <h3><i className="fas fa-smile" style={{color:'deeppink'}}></i>Here is Your Booking Details !</h3>
                    </div>
                    <div className="card-body">
                        <div className="container-fluid">
                            {renderBooking(props)}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default ViewBooking;