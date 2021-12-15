import React, {Component} from 'react';
import axios from 'axios';
//import './search.css';

const locationurl = "https://cherish-your-journey-api.herokuapp.com/location";
const restUrl = "https://cherish-your-journey-api.herokuapp.com/hotel?cityid=";

class CityFilter extends Component {
    constructor(props) {
        super(props)

        this.state={
            location:''
        }
    }

    filterCost = (event) => {
        let cost = (event.target.value);
        console.log(cost)
        let filterurl;
        if(event.target.value){
            filterurl = `${restUrl}${cost}`
        }
        axios.get(filterurl)
        .then((res) => {this.props.restPerCity(res.data)})
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                   <option value={item.id} key={item._id}>{item.city}</option>
                )
            })
        }
    }

    render(){
        return(
            <>
                <select id="Location" onChange={this.filterCost}>
                    <option seleted>--Select Location--</option>
                    {this.renderCity(this.state.location)}
                </select>
            </>
        )
    }

    componentDidMount(){
        
        fetch(locationurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default CityFilter;