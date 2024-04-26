import React, { Component } from "react";
import image4 from "./images/image4.png";
import './Main.css';
import { FaHeart } from "react-icons/fa";
import Counter from './Counter';


class Main extends Component {
    constructor(props){
        super(props);

        this.state= {
            imageURL : image4,
            header : "Boots Studio wireless headphone"
        }
    
    };
    
    render(){
       return(
            <div className="main bg-white max-h-72 shadow-outline Inline-flex display">
                <div className="inline-flex m-3">
                   <img
                    src={ this.state.imageURL}
                    alt="blue headphone" 
                    className="img1 inline-flex"/> 
                </div>
                
                <div className="writeup m-3 inline-flex display">
                    <h1 className="text-base font-sans font-bold">
                        { this.state.header }
                    </h1>
                <p className="text-yellow-400 text-gray-300 dark:text-gray-500 ">(2000+ review) </p>

                <p>wireless Headphones with 40mm drives,
                    22 hours of listening time Apple WI chip & class 1. </p>
                <br />
                <p>Rs. 5,500</p>
                    
                    <div className="buttoncolor display">
                        <p> Color </p>
                        <button  className="but1"/>
                        <button className="but2"/>
                        <button className="but3"/>
                        <button className="but4"/>
                    </div>
                    <div className="display mx-5">
                        <Counter className="className='bg-gray-300 p-2"/>
                    </div>
                    


                <div>
                    <button className="blue-500 m-2 rounded-lg border-2 border-blue-500 p-1">
                        <FaHeart />
                    </button>

                    <button className="blue-500 m-2 rounded-lg border-2 border-blue-500 p-1">
                        <p className="text-blue-400">Add to cart</p>
                    </button>

                    <button className="blue-500 bg-purple-400 rounded-lg m-2 border-2 border-blue-500 p-1">
                        <p>Buy now</p>
                    </button>
                </div>
            </div>
            
                    
            </div>
            );
        }  
    }
    

export default Main;