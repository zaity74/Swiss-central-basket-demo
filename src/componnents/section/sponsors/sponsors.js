import React from 'react';
import './sponsors.scss';
import { Link } from 'react-router-dom';
import {HiChevronRight} from 'react-icons/hi';
import {HiChevronLeft} from 'react-icons/hi';
import {BsFillShareFill} from 'react-icons/bs';
import {BsCart, BsZoomIn} from 'react-icons/bs';


// Redux import 

// Hooks
import { useState } from 'react';


function Sponsors(props){
// State
// New constantes
const sponsors = [
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp2.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp3.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp4.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp5.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp6.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp7.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp8.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp9.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp10.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp10.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp10.png',

    },
    {
        "image": 'http://127.0.0.1:5501/assets/images/sponsors/sp10.png',

    },
]
// Page load
// Events

// Variables
return (
<>
<div class="sponsors">
        <img className="flag" src={'https://i.pinimg.com/1200x/26/85/90/2685903f6c45a6952ede76d553c27298.jpg'} alt=""/>
        <div className="sponsors-container">
             <h2 className="sponsors-title">Nos sponsors</h2>
            <div className="sponsors-container-wrap">
                {
                    sponsors && 
                    sponsors.map((sponsor, index) =>
                        <img className="sponsors-img" src={sponsor.image} alt='image sponsors' />
                    )
                }
                
            </div>
        </div>
    </div>
</>
)};

export default Sponsors;
