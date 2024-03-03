import React from "react"; 
import './TopSide.css'
import { FaDragon, FaEnvelope } from "react-icons/fa";

const TopSide = () =>{
    return(
        <div className="topside">
            <div className="write-up">
                <h1 className="text-2xl text-purple-900">
                    Headphones
                </h1>
                <h4>From top brands</h4>
            </div>
            <div className="searchbar">
                <FaEnvelope />
                <FaDragon />
            </div>
        </div>
    );
}

export default TopSide;