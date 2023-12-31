import './footer.scss';

// Redux import 
// Hooks
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IoIosPlay} from "react-icons/io";
import { RiStarSFill } from 'react-icons/ri';
import { BsHeartFill } from 'react-icons/bs';

function Footer(props) {
    // State
    const [showVideo, setShowVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [moveForward, setMoveForward] = useState(false);
    // New constantes
     // New constantes
   

    // Function
      

   

    // Page load
  
    // Events
   
    // Variables
  
    return (
      <>
          <section id="footer">
            <div className='container'>
                <img class="logo" src="https://www.swisscentralbasketball.ch/wp-content/uploads/2018/08/Swiss_Central_Basketball_Logo_web.png" alt="logo" />
                <div className='copyright'>
                  <p>©Copyright FREDERIC ZAI 2023</p>
                </div>
            </div>
          </section>
      </>
    );
  }
  
  export default Footer;