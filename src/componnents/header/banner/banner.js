import React from 'react';
import './banner.scss';
import { Link } from 'react-router-dom';
import {HiChevronRight} from 'react-icons/hi';
import {HiChevronLeft} from 'react-icons/hi';
import { motion } from 'framer-motion';

//Hooks
import { useState, useEffect } from 'react';

function Banner(props){
// State
const [currentIndex, setCurrentIndex] = useState(0);
const [progressBar, setProgressBar] = useState(0);
const [direction, setDirection] = useState("forward");
const [isPaused, setIsPaused] = useState(false);

// New constantes
const slides = [
    {
        "title":"Harterkämpfter Startsieg gegen Goldcoast Wallabies",
        "content":"Swiss Central Basket hat sein erstes Spiel der neuen Saison in der Nationalliga B gewonnen. Es brauchte aber viel Arbeit des ganzen Teams, vor allem aber vom «Best Player» des Spieles, Jermale Jones, um die Goldcoast Wallabies am Ende mit 81:74",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Le club",
        "image":"https://i2.wp.com/www.pb86.fr/wp-content/uploads/2023/06/Com-campagne-abo-2324.png?w=1080&ssl=1"

    },
    {
        "title":"FIRST GAME OF THE SEASON",
        "content":"Endlich ist es wieder so weit, am Sonntag 1. Oktober 2023 – 16:00 Uhr findet das erste Spiel der Saison 23/24 gegen die Goldcoast Wallabies in der Staffeln Halle, Luzern statt!",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Le club",
        "image": "https://www.jlbourg-basket.com/wp-content/uploads/2021/12/PHOTO-ARTICLE-HORIZONTAL_Orleans.png"

    },
    {
        "title":"Ein Korb fehlte zum Meistertitel",
        "content":"Swiss Central verliert ein dramatisches Finale gegen Küsnacht-Erlenbach in den Schlusssekunden. Freud und Leid liegen im Basketball manchmal sehr nah beieinander. Nachdem Swiss Central gegen die Goldcoast Wallabies (BC Küsnacht-Erlenbach) fas",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Evènement",
        "image" : "https://www.jlbourg-basket.com/wp-content/uploads/2021/12/DSC00003-scaled-750x375.jpg"

    },
]

// Page load
useEffect(() => {
    const interval = setInterval(slideCard, 100);
    
        if (progressBar >= 100 && isPaused) {
        clearInterval(interval);
        }
    
        return () => {
            clearInterval(interval);
        };
},[currentIndex, direction, progressBar]);

// Events
function nextSlide(){
    if (direction === 'forward') {
        if(currentIndex < slides.length){
            setCurrentIndex(currentIndex + 1);
            setProgressBar(0);
        }else{
            setCurrentIndex(currentIndex);
            setDirection('backward');
        }
    }
}
function prevSlide() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setProgressBar(0);
        } else {
            // Si currentIndex est déjà à zéro, vous pouvez définir la direction sur 'forward'
            setDirection('forward');
        }
}
function slideCard() {
    if (direction === "forward") {
        setProgressBar(progressBar + 1)
      if (currentIndex < slides.length ) {
        if(progressBar === 100){
            setCurrentIndex(currentIndex + 1);
            setProgressBar(0)
        }else{
            setCurrentIndex(currentIndex)
        }

      }else {
        setCurrentIndex(0);
      }
    }
  }
function pauseLoader(index) {
    setCurrentIndex(index);
    setIsPaused(true)
    if(index < currentIndex || index > currentIndex){
        setProgressBar(0)
    }
}
function reLoad(index) {
    setIsPaused(false);
    slideCard()
}
// Variables

return(
    <>
    <div className="hero">
        <div className="hero-wrap">
            {/*<!-- ====== Slider =======-->*/}
            <div 
            className="carroussel-hero-container" 
            style=
            {{
                right: currentIndex ?  currentIndex * 100 + '%': currentIndex, 
                transition: '0.7s'
            }}
            >
            {
                slides && 
                slides.map((articles,index) =>   
                <motion.div
                    className="hero-block4"
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        backgroundImage: `linear-gradient(180deg, #06070700 10%, #060607), url("${
                        articles && articles.image
                        }")`,
                        left: index >= 0 ? index * 100 + '%' : null,
                    }}
                >
                <div className="text-container">
                    <div className="text-wrap">
                        <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        >
                        {articles.title}
                        </motion.h1>
                        <Link to={'/'} className="bouton-action">
                        <span>En savoir plus</span>
                        </Link>
                    </div>
                </div>
                    
                </motion.div>
                )
            }
            </div>
            {/*<!-- ====== preview =======-->*/}
            <div className='preview_container'>
                {slides &&
                    slides.map((articles, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 100, opacity: 0 }} // Initial position and opacity
                        animate={{ y: 0, opacity: 1 }} // Animation when the component mounts
                        transition={{ duration: 0.4, delay: index * 0.12 }} // Animation duration and delay
                        className={index === currentIndex ? 'active' : 'previewBanner'}
                        onMouseOver={() => pauseLoader(index)}
                        onMouseLeave={() => reLoad(index)}
                    >
                        <span
                        className='progressBar'
                        style={{
                            width: index === currentIndex ? progressBar + '%' : '4px',
                            transition: '0.1s',
                        }}
                        />

                        <div className='imagePreview_container'>
                        <img src={`${articles.image}`} alt='' />
                        </div>
                        <p className='previewDescription'>
                        {articles.title.length > 40
                            ? articles.title.substring(0, 38) + '...'
                            : articles.title}
                        </p>
                    </motion.div>
                    ))}
                </div>

            {/*<!-- ====== Arrow =======-->*/}
            <div className="arrow-block">
                <Link 
                    to={''} 
                    className="arrow swiper-prev "  
                    //onFocus={} 
                    onClick={prevSlide}
                    style={{
                        display : currentIndex === 0 ? 'none' : 'flex', 
                    }}>
                    <HiChevronLeft/>
                </Link>
                <Link 
                    to={''} 
                    className="arrow  swiper-next active" 
                    //onFocus={changeNextColorBtn} 
                    onClick={nextSlide}
                    style={{
                        display : currentIndex === slides.length -1 ? 'none' : 'flex', 
                        //background: isNextFocused === true? 'linear-gradient(to right top, #e00d0d, #cd1112, #b91315, #a61616, #931717)': 'black'
                    }} >
                    <HiChevronRight/>
                </Link>
            </div>
            {/*<!-- ====== Carroussel dot =======-->*/}
            <div className="">
                <span className="dot-circle"></span>
                <span className="dot-circle"></span>
                <span className="dot-circle"></span>
                <span className="dot-circle"></span>
            </div>
            
                                    
        </div>
    </div>
    </>
    )
}
export default Banner;