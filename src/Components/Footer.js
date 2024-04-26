import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';

class Footer extends Component (){
    render(){
        return(
            <div>
                <div>
                    <h2>
                        Explore Popular categories
                    </h2>
                    <p>see all</p>
                    <FaArrowRight />
                </div>
            </div>
        )
    }
    
}

export default Footer;