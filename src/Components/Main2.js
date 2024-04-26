import React, { Component } from "react";
import image_red from "./images/image_red.png"
import image3 from "./images/image3.png"

class Main2 extends Component{
    constructor(props){
        super(props);

        this.state= {
            imageURL: image_red,
            imageURL1: image3,
            header : "Boots Studio wireless headphone"
        }
    }
    
    render(){
        return(
            <div className="font-sans inline-flex">
                <div className="max-w-xs p-4 rounded-2xl m-3 bg-white shadow-outline">
                    <div>
                        <img 
                        src={this.state.imageURL}
                            alt="red headphone" /> 
                        </div>
                        <div>
                            <p className="text-gray-900 text-center text-base text-bold">Original Beats Solo Pro</p>
                            <p>Price Rs. 3999</p>
                    </div> 
                </div>

                <div className="max-w-xs p-4 rounded-2xl m-3 bg-white shadow-outline">
                    <div>
                        <img 
                        src={this.state.imageURL1}
                            alt="red headphone" /> 
                        </div>
                        <div>
                            <p className=" text-center text-gray-900 text-base text-bold">
                                Beats Studio3 Bluetooth
                            </p>
                            <p>Price Rs. 3999</p>
                    </div> 
                </div>

                <div className="max-w-xs p-4 m-3 rounded-2xl bg-white shadow-outline">
                    <div>
                        <img 
                        src={this.state.imageURL}
                            alt="red headphone" /> 
                        </div>
                        <div>
                            <p className="text-gray-900 text-center text-base text-bold">
                                Rockerz 109 Wireless
                            </p>
                            <p>Price Rs. 3999</p>
                    </div> 
                </div>

                <div className="max-w-xs p-4 m-3 max-w-xs rounded-2xl bg-white shadow-outline">
                    <div>
                        <img 
                        src={this.state.imageURL1}
                            alt="red headphone" /> 
                        </div>
                        <div>
                            <p className="text-gray-900 text-center text-base text-bold">Original Beats Solo Pro</p>
                            <p>Price Rs. 3999</p>
                    </div> 
                </div>
                
            </div>
        )
    }
}
export default Main2