import React from "react";
import { Link } from 'react-router-dom';
import './about.scss'; 
import IconeSwitzerland from '../../../images/icone-suisse.png'

function ABOUT(props){
    return(
        <>
         {/*<!-- ====== Section - A propos =======-->*/}
            <div className="hero-about">
                {/*<!-- ====== ABOUT CONTAINTER - A propos =======-->*/}
                <div className="hero-about-container">
                    <h3 className="hero-about-title"> 
                        <img src={IconeSwitzerland} alt=""/>
                        Swiss central basketball</h3>
                    <p className="hero-about-description">
                        Polaroid squid flannel chillwave roof party prism green juice <br></br> schlitz meditation vexillologist post-ironic hella umami cray.
                    </p>
                    <Link to={'/'} className="hero-about-action">A propos de nous</Link>
                </div>
            </div>
        </>
    )
}

export default ABOUT;