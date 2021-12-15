import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './search.css';

const locationurl = "https://cherish-your-journey-api.herokuapp.com/location";
const restUrl = "https://cherish-your-journey-api.herokuapp.com/hotel?cityid=";

class Search extends Component {
    constructor(props) {
        super(props)

        this.state={
            location:'',
            hotel:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                   <option value={item.id} key={item._id}>
                       {item.city}
                   </option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <><option value={item.id} key={item._id}>{item.name} | {item.address}</option>
                    </>
                )
            })
        }
    }

    handleCity = (event) => {
        const cityId = event.target.value;
        fetch(`${restUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel:data})
        })
    }

    handleRest = (event) => {
        this.props.history.push(`/hotel_details/${event.target.value}`)
    }

    render(){
        
        return(
            <>
            <div className="container-fluid heading">
                <div className="row align-items-center justify-content-center">
                    <div id="logo">
                        <span style={{fontSize:'50px'}}>&hearts;</span>
                    </div>
                </div> 
                <div className="row align-items-center justify-content-center text">Cherish Your Journey</div> 
                <div className="row align-items-center justify-content-center pb-4">
                    <select id="Location" onChange={this.handleCity}>
                        <option seleted>--Select Location--</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select onChange={this.handleRest}>
                        <option>---Select Hotels---</option>
                        {this.renderRestaurants(this.state.hotel)}
                    </select>
                </div>           
            </div>
            <div id="navbar" className="navbar navbar-expand-sm navbar-dark sticky-top">
                <Link className="active" to='/'>Home</Link>
                <Link to='/trips'>Trip Ideas</Link>
            </div>
            </>
        )
    }

    // on page load we have to call api  onChange={this.handleRest}
    componentDidMount(){
        fetch(locationurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);