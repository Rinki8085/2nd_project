import React,{Component} from "react";
import {Link} from 'react-router-dom';
import './Header.css';

const url = 'https://user-login-api.herokuapp.com/api/auth/userInfo'

class Header extends Component{     
    constructor(){
        super()
    
        this.state={
            userData:''
        }
    }
    
    handleLogout = () => {
        this.setState({userData:''});
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userData');
        this.props.history.push('/')
    }
    
    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArry = [data.name,data.email,data.phone,data.role];
            sessionStorage.setItem('userData', outputArry);
            return(
                <>
                    <button className="btn btn-info">Hi {this.state.userData.name}</button>
                    &nbsp;
                    <button className="btn btn-warning" onClick={this.handleLogout}>Logout</button>
                </>
            )
        }else{
            return(
                <>
                    <Link to="/login" className="btn btn-success">
                         LogIn
                    </Link> &nbsp;
                    <Link to="/register" className="btn btn-warning">
                       Register
                    </Link>
                </>
            )  
        }
    }

    render(){
        return(
            <>
            <section> 
                <div className="cover">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <p className="mb-0 phone pl-md-2">
                                    <a href="#main-navbar" className="mr-2">
                                        <i className="fas fa-phone mr-1"></i>
                                        +55 65 2212 454
                                    </a>
                                    <a href="#main-navbar">
                                        <i class="fas fa-paper-plane mr-1"></i>
                                        krinki2604@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center-md-end">
                                <div className="social-icon mr-4">
                                    <p className="mb-0 d-flex">
                                        <a href="#main-navbar" className="d-flex align-items-center justify-content-center">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="#main-navbar" className="d-flex align-items-center justify-content-center">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#main-navbar" className="d-flex align-items-center justify-content-center">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </p>
                                </div>
                                <div className="reg">
                                    {this.conditionalHeader()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    
         )
    }

    componentDidMount(){
        fetch(url, {
          method:'GET',
          headers:{
            'x-access-token':sessionStorage.getItem('ltk')
          }
        })
        .then((res) => res.json())
        .then((data) => {
          this.setState({userData:data})
        })
      }
}

export default Header;