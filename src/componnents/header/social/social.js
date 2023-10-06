import React from 'react';
import './social.scss';
import { Link } from 'react-router-dom';
import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';
import {TiSocialLinkedin} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

// Redux import 

// Hooks

function Social(props) {
    // State
    // New constantes
    // Page load
    // Events
    // Variables
    return(
    <>
        {/*<!-- ====  Social - barre ==== -->*/}
        <div className="social-next">
        <div className="social-next-container">
            <span className="action-text">
                Suiviez toutes nos actus
                <HiArrowNarrowRight />
                
            </span>
            <div className="social-link">
                <TiSocialFacebook className='icone-sociale' /> <p className='bi'>Facebook</p>
                <TiSocialInstagram className='icone-sociale' /><p className='bi'>Instagram</p>
                <TiSocialLinkedin className='icone-sociale' /><p className='bi'>Linkedin</p>
                <TiSocialTwitter className='icone-sociale' /><p className='bi'>Twitter</p>
            </div>
        </div>
        </div>
    </>
    )
}

export default Social;