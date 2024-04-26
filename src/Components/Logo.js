import React, { Component } from "react";
import './Logo.css';
import { Link } from "react-router-dom";
import 'bootstrap'
import { FaBookmark, FaHome, FaMap, FaBabyCarriage, FaClock, FaPersonBooth, FaHeadphones } from "react-icons/fa";

class Logo extends Component {

    constructor(props){
        super(props);

        this.state = {
            message: "Soundix."

        };
    }

    
    render() {
        return(
            <div className='header-page'>
                <div>
                   <div className="inline-flex m-1.5">
                        <div className="FaHeadphones"> 
                            <FaHeadphones /> 
                        </div>
                        <div className="inline-flex text-bold blue-600 mx-1.5 ">
                           {this.state.message} 
                        </div>
                    </div> 
                </div>
                
                <nav className="nav-bar inline-flex">
                    <ul className="nav-list">
                        <li>
                            <Link to="/">
                               <div className="icon">
                                    <FaHome />
                                </div> 
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div className="icon">
                                    <FaMap />
                                </div>
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div className="icon">
                                    <FaBookmark/>
                                </div>
                                Saved
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <div className="icon">
                                <FaBabyCarriage />
                            </div>
                                Card
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                              
                            Selling
                            </Link>
                        </li>
                        <li>
                                <Link to="/">
                                    <div className="icon">
                                        <FaPersonBooth />
                                    </div>
                                     Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div className="icon"> 
                                        <FaClock />
                                    </div> Purchase History
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                Setting
                                </Link>
                            </li>
                        </ul>
                </nav>
            </div>
        );
    }
}
export default Logo;