import React, { Component } from "react";
import image_red from "./images/image_red.png";
import pure from "./images/pure.png";
import purepure2 from "./images/purepure2.png";
import pure3 from "./images/pure3.png";
import pure4 from "./images/pure4.png";
import pure5 from "./images/pure5.png";
import pure6 from "./images/pure6.png";
import "./Right.css";


class Right extends Component{
    constructor(props){
        super(props);

        this.state = {
            imageURL1 : pure,
            imageURL2 : purepure2,
            imageURL3 : pure3,
            imageURL4 : pure4,
            imageURL5 : pure5,
            imageURL6 : pure6,
            imageURL7 : image_red

        };
    }
    render(){
        return(
            <div className="">
                <div>
                    <h2 className="text-3xl text-blue-600 text-bold font-sans"> Daily Deals </h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <img src={this.state.imageURL1} alt="" className="red bg-white rounded-full"/>
                            <div className="">
                               <h2 className="inline-flex display font-bold mx-9">beats new studio blue headset</h2>
                               <p className="inline-flex display"> Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>

                        <li>
                            <img src={this.state.imageURL2} alt="" className="bg-white rounded-full"/>
                            <div className="">
                               <h2 className="inline-flex display font-bold mx-9">beats new studio blue headset</h2>
                               <p className="inline-flex display">Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>

                        <li>
                            <img src={this.state.imageURL3}
                             alt="" className="rounded-full red bg-white"/>
                             <div className="">
                               <h2 className="inline-flex display font-bold mx-14">beats new studio blue headset</h2>
                               <p className="inline-flex display">Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>

                        <li>
                            <img src={this.state.imageURL4}
                             alt="" className="rounded-full red bg-white"/>
                            <div className="">
                               <h2 className="inline-flex display font-bold mx-8">beats new studio blue headset</h2>
                               <p className="inline-flex display">Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>
                        <li>
                            <img src={this.state.imageURL5} alt="" className="red bg-white rounded-full"/>
                            <div className="">
                               <h2 className="inline-flex display font-bold mx-8">beats new studio blue headset</h2>
                               <p className="inline-flex display">Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>
                        <li>
                            <img src={this.state.imageURL6} alt="" className="red bg-white rounded-full"/>
                            <div className="">
                               <h2 className="inline-flex display font-bold mx-8">beats new studio blue headset</h2>
                               <p className="inline-flex display">Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>
                        <li>
                            <img src={this.state.imageURL7} alt="" className="red bg-white rounded-full" />
                            <div className="">
                               <h2 className="inline-flex display font-bold mx-8">beats new studio blue headset</h2>
                               <p className="inline-flex display">Price rs. 3,400</p> 

                               <div>
                                <p>300 review 1853 orders</p>
                               </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Right;