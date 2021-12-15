import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css'

const ListingHotel = (props) => {

    const renderRoom = ({lists}) => {
            console.log("kmkm",lists)
        if(lists){
            if(lists.length>0){
                return lists.map((item) => {
                    return(
                        <>
                            <div className="container-fluid mb-3 filter" key={item.id}>
                                <div>
                                    <div className="image_con con1">
                                        <img src={item.image} alt="Business" className="Img"/>
                                    </div>
                                    <div className="image_con1">
                                        <div style={{fontSize:"22px", color:"blue", fontWeight: "bold"}}>
                                            <Link to={`/hotel_details/${item.id}`}>
                                            {item.name}
                                            </Link>
                                            </div>    
                                        <div style={{fontSize:'12px', color:'darkgrey', fontWeight: 'bold'}}>
                                        Rs.{item.price} | {item.city}<br/>
                                            {item.address}<br/>
                                        <h3 className="badge badge-success con">Rating-{item.rating}<i className="fas fa-star"></i></h3>                                        
                                        </div>
                                    </div>
                                </div>
                                <hr className="round bg-info"/>
                                <div>
                                    <div className="image_con">Roomtype-</div>
                                    <div className="image_con ">
                                        <div className="image_con badge badge-success">{item.roomType[0].name}</div> || 
                                        <div className="image_con badge badge-danger">{item.roomType[1].name}</div>
                                    </div>
                                </div> 
                            </div>
                        </>
                    )
                })
            }
        }       
    }

    return(
        <>
        {renderRoom(props)}
        </>
    )

}

export default ListingHotel;