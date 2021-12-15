import React,{Component} from 'react';
import Search from '../hotel/search';
import ListingHotel from './listingHotel';
import RatingFilter from '../filter/rating';
//import CostFilter from '../filter/costfilter';
import CityFilter from '../filter/cityFilter';
import axios from 'axios';
import './listing.css';

const url = "https://cherish-your-journey-api.herokuapp.com/hotel?roomtype_id="

class ListingApi extends Component {
        constructor(){
            super()

            this.state={
                HotelList:''
            }
        }

    setDataAsPerFilter = (sortData) => {
        this.setState({HotelList:sortData})
    }

    render(){
        return(
            <> 
                <Search/> 
                <div className="container mt-4">
                    <div className="container-fluid headings">
                        Find The Hotels According To Your Place
                    </div>
                    <div className="row ml-2 mb-4 ">
                        <div className="col-md-3 mt-4 filter1 mr-4">
                            <div style={{marginTop:'10px'}}><h3><b>Filter</b></h3></div>
                            <hr className="rounded"/>
                            <div>
                                <div style={{color:"blue"}}><h4><b>Select Location</b></h4></div>
                                <div style={{marginBottom:'10px', color:'darkgrey'}}>
                                    <CityFilter restPerCity={(data) => {this.setDataAsPerFilter(data)}}/>      
                                </div>
                            </div>
                            <div>
                                <RatingFilter restPerCost={(data) => {this.setDataAsPerFilter(data)}}/>
                            </div>    
                        </div>
                        <div class="col-lg-8 mt-4 rows">
                            <ListingHotel lists={this.state.HotelList}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        var roomId = this.props.match.params.roomId;
        console.log("fsdfa",roomId)
        sessionStorage.setItem('roomId',roomId)
        axios.get(`${url}${roomId}`).then((res) => {this.setState({HotelList:res.data})})
    }

}

export default ListingApi;