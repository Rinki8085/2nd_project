import React, { Component } from 'react';
import './tripType.css';

const url = "https://cherish-your-journey-api.herokuapp.com/tripType"

class Triptype extends Component{
    constructor(){
        super()

        this.state = {
            triptype:''
        }
    }

    renderTriptype = (data) => {
        if(data){
            return data.map((item) => {
                 return(
                    <>
                        <div className="card card-div card_heading" key={item._id}>
                            <img className="card-img-top img" src={item.image} alt={item.name}/>
                            <div className="card-body" key={item.id}>
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-text">{item.about}</p>
                            </div>
                            <div className="explore">
                                <a href="#hjjjhh">
                                <i class="fas fa-arrow-circle-right"></i>
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </>
                )}
            )
        }
    }

    render(){
        return(
            <>
                <div className="container-fluid body">
                    <div className="row justify-content-center">
                        <h1 className="font-weight-bold text-color glow">
                            Trip Ideas
                        </h1>
                    </div>
                    <div className="container-fluid">
                        {this.renderTriptype(this.state.triptype)}
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({triptype:data})
        })
    }

}

export default Triptype;