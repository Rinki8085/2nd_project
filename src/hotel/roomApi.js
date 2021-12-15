import React from 'react';
import {Link} from 'react-router-dom';
import './hotelDetails.css';

const RoomApi = (props) => {

    const listRoom = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <>
                   
                        <div className="col-md-5 col-xs-12 mr-2 mb-2 tilecontainer" key={item.id}>                        
                            <div className="image_con2">
                                <img src={item.room_image} alt="Business" style={{width:'150px', height:'150px', borderRadius:'5px'}}/>
                            </div>
                                <div className="image-con2 text-box">
                                    <Link to={`/list/${item.roomtype_id}`}>
                                    <div className="txt1">{item.name}</div>
                                    <div className="txt2">Devlope your business</div>
                                    </Link> 
                                </div>
                                
                        </div> 
                    
                    </> 
                )
            })
        }
    }
    return(
        <>
        <div className="container-fluid mt-2">
            <div id="main_container">Quick Searches</div>
            <div style={{fontSize:'25px', color:'grey', fontWeight: 'bold'}}>Discover Hotels by the Type</div>
            <div className="container mt-4">
                <div className="row">
                    {listRoom(props)}
                </div> 
            </div>
        </div>            
        </>
    )

}

export default RoomApi;