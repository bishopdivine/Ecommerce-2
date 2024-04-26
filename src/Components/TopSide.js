import React from "react"; 
import './TopSide.css';
import Rectangle from './images/Rectangle .png'
import { FaDragon, FaEnvelope } from "react-icons/fa";
import { Component } from "react";

class TopSide extends Component {

    constructor(props){
        super(props);

        this.state= {
            imageURL : Rectangle
        }     
    };
    render(){
        return(

            <div className="topside my-8 max-h-20 scroll-smooth p-3">

                <div className="write-up inline-flex display my-98 ">
                    <h1 className="text-3xl text-bold">
                        Headphones
                    </h1>
                    <h4>From top brands</h4>
                </div>


                <div className="searchbar border-2 border-blue-400 rounded-md bg-white-400 px-3 py-3 display">

                    <input
                        type="text" 
                        placeholder="search product"
                        className="input display" /> 
                </div>

                <div className="display">
                    <FaEnvelope className="p-1 display m-2 w-6 bg-blue-400" />
                    <FaDragon className="m-2 p-1 w-6 display bg-blue-400"/>
                    <img src={this.state.imageURL} alt="profile pic" className="m-2 display p-1 w-6 bg-blue-400"/>
                </div>

            </div>
            )
        }
}

export default TopSide;