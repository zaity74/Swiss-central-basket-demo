import React from 'react';
import './players.scss';
import { Link } from 'react-router-dom';
import { HiChevronDoubleLeft} from 'react-icons/hi';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import Background from '../../../images/background-txt.jpg';
import { motion, useAnimation } from 'framer-motion';

// Redux import 
//Hooks
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function PLAYERS_LIST(props){
// State
const [isDrag, setIsDrag] = useState(false);
const [isCard, setIsCard] = useState(0);
// New constantes
const [tag, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
const players = [
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Haile-Kebron.png',
        'name' : 'Kebron Haile',
        'position' : '1,2,3',
        'number' : '2',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Kofal-Lou-Allen.png',
        'name' : 'Lou Allen Kofal',
        'position' : '1,2,3',
        'number' : '4',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Hobbins-Silvan.png',
        'name' : 'Silvan Hobins',
        'position' : '1,2,3',
        'number' : '28',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Jadama-Tisan.png',
        'name' : 'Tisan Jadama',
        'position' : '1,2,3',
        'number' : '8',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Liembd-Yannick.png',
        'name' : 'Yannick Liebd',
        'position' : '1,2,3',
        'number' : '14',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Bucher-Malwin.png',
        'name' : 'Malwin Bucher',
        'position' : '1,2,3',
        'number' : '0',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-Hoxhaj-Ledion.png',
        'name' : 'Ledion Hoxhaj',
        'position' : '1,2,3',
        'number' : '34',
        'nationality' : 'SUI',
        'note' : ''
    },
    {
        'image' : 'https://www.swisscentralbasketball.ch/wp-content/uploads/2022/09/Swiss_central_basket_2022_23-HU18-De-Leon-Luis.png',
        'name' : 'Luis De Leon',
        'position' : '1,2,3',
        'number' : '1',
        'nationality' : 'SUI',
        'note' : ''
    },
]
const TEAM = players.map((post,index)  =>  
       <>
           <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5 }}
           className={'team t' + (index + 1) } 
           style={{transition: '0.9s',}}
           >
                       <img className="media-img" src={post.image}/>
                       <div className="media-text">
                            {post.note}
                       </div>
                       <div className="player-description">
                           <p className="player-name">{post.name}</p>
                           <span className="post-player">{'POS:'+ '' + post.position}</span>
                           <span className="post-player">{'NAT:'+ '' + post.nationality}</span>
                           <span className="player-number">{post.number}</span>
                       </div>
                       <span className="name-extra">{post.name}</span>
            </motion.div>        
       </> 
    );
// Page load
useEffect(() => {
},[]);
// Events
// Variables

return(
<>
    <div className="section-team">  
        <img
        className='textured-background'
        src={Background}
        alt=''
        />
       <div className='overlay-background'></div>
       <div className="section-team-container">
           <div className="team-info">
               <h2 className="team-title">effectif</h2>
           </div>        
           <div className="team-container">
               {/*<!-- Logo middle -->*/}
               <motion.div
               className="team-container-wrap"
               ref={tag}
               >
                  {TEAM}
                </motion.div>
           </div>
           <Link to={'/'} className="show-more">
               Découvrez tous nos médias
           </Link>
       </div>
   </div>
</>
)}

export default PLAYERS_LIST;
