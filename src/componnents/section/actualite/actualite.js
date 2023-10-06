import React from 'react';
import './actualite.scss';
import Background from '../../../images/background-txt.jpg';
import { Link } from 'react-router-dom';
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { HiOutlineChevronRight } from 'react-icons/hi';
import Games from './games/games';
import { motion, useAnimation } from 'framer-motion';


// Redux import 

// Hooks
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


function SectionActualite(props){
// State
const [filter, setFilter] = useState('All');
const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
// New constantes
const articles = [
    {
        "title":"Harterkämpfter Startsieg gegen Goldcoast Wallabies",
        "content":"Swiss Central Basket hat sein erstes Spiel der neuen Saison in der Nationalliga B gewonnen. Es brauchte aber viel Arbeit des ganzen Teams, vor allem aber vom «Best Player» des Spieles, Jermale Jones, um die Goldcoast Wallabies am Ende mit 81:74",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Le club",
        "image": "https://www.swisscentralbasketball.ch/wp-content/uploads/2023/04/Swiss_central_basket_Lugano_tiger_20230413_04-980x551.jpg"

    },
    {
        "title":"FIRST GAME OF THE SEASON",
        "content":"Endlich ist es wieder so weit, am Sonntag 1. Oktober 2023 – 16:00 Uhr findet das erste Spiel der Saison 23/24 gegen die Goldcoast Wallabies in der Staffeln Halle, Luzern statt!",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Le club",
        "image":"https://www.swisscentralbasketball.ch/wp-content/uploads/2023/02/Swiss_central_basket_starwings_20230205_03-980x634.jpg"

    },
    {
        "title":"Ein Korb fehlte zum Meistertitel",
        "content":"Swiss Central verliert ein dramatisches Finale gegen Küsnacht-Erlenbach in den Schlusssekunden. Freud und Leid liegen im Basketball manchmal sehr nah beieinander. Nachdem Swiss Central gegen die Goldcoast Wallabies (BC Küsnacht-Erlenbach) fas",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Evènement",
        "image" : "https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-SBL.png"

    },
    {
        "title":"Am Ende noch gezittert – aber egal: Swiss Central steht im NLB-Final!",
        "content":"Erste Halbzeit top, zweite Halbzeit flop:",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Evènement",
        "image" : "https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-SBL.png"

    },
    {
        "title":"Swiss Central qualifiziert sich für das Final Four",
        "content":"Swiss Central gewinnt auch das zweite Playoffspiel gegen den BC Bären Kleinbasel. Damit kämpft das Team von Coach Orlando Bär",
        "author": 'steave bernanrd',
        "data": "20/12/2030",
        "category": "Evènement",
        "image" : "https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-SBL.png"

    },
]
const controls = useAnimation();
const startAnimation = async () => {
    await controls.start({ opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } });
  };

// Page load
useEffect(() => {
if (inView) {
    startAnimation();
}
}, [inView]);
// Events
const handleFilter = (content) => {
    setFilter(content);
    console.log(filter, 'ICI');
};
// Variables
return (
<>
<div className='section'>
    <img
        className='textured-background'
        src={Background}
        alt=''
    />
    <div className='overlay-background'></div>
    <div className='section-container'>
        <div className='section-wrapper'>
            <div className='bloc-left'>
                <motion.div 
                ref={ref}
                className='article-container'>
                    {/*<!-- TITLE -->*/}
                    <div className='article-info'>
                        <h2 className='article-header'>A la une</h2>
                        <motion.ul 
                        className='article-filter'
                        initial={{ opacity: 0, y: '50px' }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <li className='article-link'>
                                <Link to={'#'}  onClick={() => handleFilter('All')}>All</Link>
                            </li>
                            <li className='article-link'>
                                <Link to={'#'} onClick={() => handleFilter('Le club')}>Le club</Link>
                            </li>
                            <li className='article-link'>
                                <Link to={'#'} onClick={() => handleFilter('Evènement')}>Evènement</Link>
                            </li>
                        </motion.ul>
                    </div>
                    {/*<!-- CARD -->*/}
                    <div className='latest-news-wrap'>
                        {
                        articles.map((article, index) =>
                            filter === article.category ?
                            (
                                index === 0  || index === 3 ? 
                                (
                                    <div className={index === 0 ? 'master':'last'} 
                                    key={index}
                                    style={{ 
                                        backgroundImage:
                                        index === 0 ? 
                                        `linear-gradient(180deg, #13141600 20%, #1b1d22), 
                                        url("${article.image})`
                                        : 
                                        `linear-gradient(90deg, #13141600 10%, #1b1d22), 
                                        url("${article.image}")`
                                    }}
                                    >
                                        <Link
                                            className='post-link'
                                            to={'#'}
                                        >
                                            <div className='post-resume-content'>
                                                <p className='post-date'>
                                                    {article.data}
                                                </p>
                                                <h3 className='post-title'>{article.title}</h3>
                                                <ReactMarkdown className='post-resume' children={article.content.length > 80 ? article.content.substring(0, 160) + '...': article.content}>
                                                </ReactMarkdown>
                                            </div>
                                        </Link>
                                    </div>
                                ) : 
                                 //Article Side
                                <div className='latest-news-single'>
                                    <div className='img-post-container'>
                                        <img
                                        className='post-img'
                                        src={article.image}
                                        alt='image'
                                        />
                                    </div>
                                    <Link
                                        className='post'
                                    >
                                        <div
                                            className='post-resume-content'
                                            key={index}
                                        >
                                            <p className='post-date'>
                                                <Moment format="MMM Do YYYY">
                                                {article.data}
                                                </Moment>
                                            </p>
                                            <h3 className='post-title'>{article.title.length > 100 ? article.title.substring(0, 94) + '...': article.title}</h3>
                                            <p className='post-resume'>{article.content.length > 80 ? article.content.substring(0, 80) + '...': article.content}</p>
                                        
                                        </div>
                                    </Link>
                                </div>

                            ) : 
                            filter === 'All' ?
                            (index === 0  || index === 3 ? 
                                (
                                    <motion.div 
                                    className={index === 0 ? 'master':'last'} 
                                    key={index}
                                    initial={{ x: '-120px', opacity: 0 }}
                                    animate={controls}
                                    style={{ 
                                        backgroundImage:
                                        index === 0 ? 
                                        `linear-gradient(180deg, #13141600 20%, #1b1d22), 
                                        url("${article.image})`
                                        : 
                                        `linear-gradient(90deg, #13141600 10%, #1b1d22), 
                                        url("${article.image}")`
                                    }}
                                    >
                                        <Link
                                            className='post-link'
                                            to={'#'}
                                        >
                                            <div className='post-resume-content'>
                                                <p className='post-date'>
                                                    {article.data}
                                                </p>
                                                <h3 className='post-title'>{article.title}</h3>
                                                <ReactMarkdown className='post-resume' children={article.content.length > 80 ? article.content.substring(0, 160) + '...': article.content}>
                                                </ReactMarkdown>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ) : 
                                 //Article Side
                                <motion.div 
                                className='latest-news-single'
                                initial={{ opacity: 0, shadow: 'false' }}
                                animate={inView ? { opacity: 1, shadow: '3' } : {}}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                >
                                    <div className='img-post-container'>
                                        <img
                                        className='post-img'
                                        src={article.image}
                                        alt='image'
                                        />
                                    </div>
                                    <Link
                                        className='post'
                                    >
                                        <div
                                            className='post-resume-content'
                                            key={index}
                                        >
                                            <p className='post-date'>
                                                <Moment format="MMM Do YYYY">
                                                {article.data}
                                                </Moment>
                                            </p>
                                            <h3 className='post-title'>{article.title.length > 100 ? article.title.substring(0, 94) + '...': article.title}</h3>
                                            <p className='post-resume'>{article.content.length > 80 ? article.content.substring(0, 80) + '...': article.content}</p>
                                        
                                        </div>
                                    </Link>
                                </motion.div>
                            ) : null
                        )}
                    </div>
                    
                </motion.div>
                {/*<!-- BTN Show more -->*/}
                <Link to={''}  className="show-more">
                    Toutes les actus
                    <HiOutlineChevronRight className='bi'/>
                </Link>
            </div>
            <Games />
        </div>
    </div>
</div>
</>
)};

export default SectionActualite;
