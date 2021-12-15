import React,{Component} from 'react';
import axios from 'axios';

const url = "https://cherish-your-journey-api.herokuapp.com/filter"

class CostFilter extends Component{
    filterCost = (event) => {
        let roomId = sessionStorage.getItem('roomId');
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let filterurl;
        if(event.target.value===""){
            filterurl = `${url}/${roomId}`
        }else{
            filterurl = `${url}/${roomId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(filterurl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <div style={{marginLeft:'20px'}}>
                    <div style={{color:"blue"}}><h4><b>Cost</b></h4></div>
                    <div onChange={this.filterCost}>
                        <label className="radio">
                            <input type="radio" name="cuisine" value=""/>All
                        </label><br/>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="1510-3000"/>1510rs to 3000rs
                        </label><br/>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="3001-4500"/>3000rs to 4500rs
                        </label><br/>
                        <label className="radio">
                                <input type="radio" name="cuisine" value="4501-6000"/>4500rs to 6000rs
                        </label><br/>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="6001-10000"/>upto 6000rs
                        </label><br/>
                    </div> 
                </div> 
            </>
        )
    }

    
}

export default CostFilter;  