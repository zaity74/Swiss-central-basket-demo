import './home.css';
import Nav from '../../componnents/header/nav/nav';
import Social from '../../componnents/header/social/social';
import Banner from '../../componnents/header/banner/banner';
import Shape from '../../componnents/shape/shape';
import SectionActualite from '../../componnents/section/actualite/actualite';
import ABOUT from '../../componnents/section/about/about';
import PLAYERS_LIST from '../../componnents/section/players/players';
import Boutique from '../../componnents/section/boutique/boutique';
import Sponsors from '../../componnents/section/sponsors/sponsors';
import Footer from '../../componnents/footer/footer';

// Redux import 
// Hooks
import React, { useState, useEffect } from "react";

function Home(props) {
    // State
    // New constantes
    
  
    // Page load
    useEffect(() => {
    },[]);
    
    // Events
   
    // Variables
  
    return (
      <>
      <div className='home-section'>
        <Nav />
        <Shape />
        <Banner />
        <Social />
        <SectionActualite />
        <ABOUT />
        <PLAYERS_LIST />
        <ABOUT />
        <Boutique />
        <Sponsors />
        <Footer />
      </div>

      </>
    );
  }
  
  export default Home;