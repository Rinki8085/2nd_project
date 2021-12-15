import React,{Component} from 'react';
import axios from 'axios';

const url = "https://cherish-your-journey-api.herokuapp.com/filter";
const url1 = "https://cherish-your-journey-api.herokuapp.com/hotel?roomtype_id=";

class RatingFilter extends Component{
    filterCost = (event) => {
        let roomId = sessionStorage.getItem('roomId');
        let cost = (event.target.value);
        let filterurl;
        if(event.target.value===""){
            filterurl = `${url1}/${roomId}`
        }else{
            filterurl = `${url}/${cost}`
        }
        axios.get(filterurl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <div style={{marginLeft:'20px'}}>
                    <div style={{color:"blue"}}><h4><b>Rating</b></h4></div>
                    <div onChange={this.filterCost}>
                        <label className="radio">
                            <input type="checkbox" name="checkbox" value="5"/>Rating:-5<br/>
                        </label><br/>
                        <label className="radio">
                            <input type="checkbox" name="checkbox" value="4.8"/>Rating:-4.8<br/>
                        </label><br/>
                        <label className="radio">
                            <input type="checkbox" name="checkbox" value="4.5"/>Rating:-4.5<br/>
                        </label><br/>
                        <label className="radio">
                            <input type="checkbox" name="checkbox" value="4.2"/>Rating:-4.2<br/>
                        </label><br/>
                        <label className="radio">
                            <input type="checkbox" name="checkbox" value="3.5"/>Rating:-3<br/>
                        </label><br/>
                    </div> 
                </div> 
            </>
        )
    }
}

export default RatingFilter;  