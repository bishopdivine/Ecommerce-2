import React, { Component } from "react"
import image4 from "./images/image4.png"
import './Main.css'
//import { FaFullstars, falove } from "react-icons/fa" 

class Main extends Component {
    constructor(props){
        super(props);

        this.state= {
            imageURL : image4,
            header : "Boots Studio wireless headphone"
        }
    
    }
    render(){
       return(
            <div className="main">
                <img
                    src={ this.state.imageURL}
                    alt="blue headphone" className="img1"/>
                    <div className="writeup">
                        <h2>{ this.state.header }</h2>
                        <p>(2000+ review) </p>
                        <p>wireless Headphones with 40mm  drives,
                            22 hours of listening time Appl WI chip & class 1. </p>
                        <br />
                        <p>Rs. 5,500</p>
                        <div className="buttoncolor">
                            <p>Color</p>
                            <button  className="but1"/>
                            <button className="but2"/>
                            <button className="but3"/>
                            <button className="but4"/>
                        </div>
                        <div>
                            <button><falove/></button>
                        </div>
                        
                    </div>
                    
                    
            </div>
            );
        }  
    }
    

export default Main;