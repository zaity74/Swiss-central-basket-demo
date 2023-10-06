import React from 'react';
import '../actualite.scss';
import { Link } from 'react-router-dom';
import Moment from "react-moment";
import {HiChevronRight} from 'react-icons/hi';
import {HiChevronLeft} from 'react-icons/hi';

// Redux import 

// Hooks
import { useState } from 'react';


function Games(props){
// State
// New constantes
const games = [
    {
        "team1":"SCB",
        "logoTeam1":"https://www.proballers.com/api/getTeamLogo?id=2765&width=300",
        "team2": 'BBC Nyon',
        "logoTeam2": "https://www.proballers.com/api/getTeamLogo?id=642&width=160",

    },
    {
        "team1":"SCB",
        "logoTeam1":"https://www.proballers.com/api/getTeamLogo?id=2765&width=300",
        "team2": 'BBC Nyon',
        "logoTeam2": "https://www.proballers.com/api/getTeamLogo?id=642&width=160",

    },
    {
        "team1":"SCB",
        "logoTeam1":"https://www.proballers.com/api/getTeamLogo?id=2765&width=300",
        "team2": 'BBC Nyon',
        "logoTeam2": "https://www.proballers.com/api/getTeamLogo?id=642&width=160",

    },
    {
        "team1":"SCB",
        "logoTeam1":"https://www.proballers.com/api/getTeamLogo?id=2765&width=300",
        "team2": 'BBC Nyon',
        "logoTeam2": "https://www.proballers.com/api/getTeamLogo?id=642&width=160",

    },
]
// Page load
// Events

// Variables
return (
<>
    <div className="bloc-right">
        {/* Section title */}
        <div className='match-info'>
            <h2 className='next-match'> Match à venir </h2>
        </div>
        {/* Card */}
        <div className='game-info'>
            <div className='game-wrap swiper'>
                <div className='saison-info'>
                    Saisson 2023-2024
                    <Link className='arrow swiper-prev'>
                        <HiChevronLeft className='bi bi-chevron-left' />
                    </Link>
                    <Link className='arrow swiper-next active'>
                        <HiChevronRight className='bi bi-chevron-right' />
                    </Link>
                </div>
                {/* Carroussel */}
                <div className='game-info-container swiper-wrapper'>
                    {
                        games && games.map((game, index) =>
                            <div className="game-list-1 swiper-slide"
                            key={index}
                            >
                                <div className="team-container">
                                    <div className="tm-1">
                                        <img src={game.logoTeam1}/>
                                        <span className="team-name">{game.team1}</span>
                                    </div>
                                    <div className="versus">
                                        vs
                                    </div>
                                    <div className="tm-1 reverse">
                                        <span className="team-name">{game.team2}</span>
                                        <img src={game.logoTeam2}/>
                                    </div>
                                </div>
                                        <p class="game-description">
                                            NBA FINALS SEPTEMBER 25, 2022 - 8:00 PM <br></br>Kensington
                                        </p>

                            </div>
                        )
                    }
                </div>
            </div>
            {/* game table */}
            <h2 class="previous-match">Résultats des matchs précédents</h2>
            <iframe class="game-results" 
            src="https://swiss.basketball/embed/standings?league=LNAM&amp;highlight=Swiss%20Central%20Basketball" 
            style={{border: 0, width: 100 + '%', height: 700 + 'px'}}>
                Your browser doesn't support iFrames.
            </iframe>
        </div>
    </div>
</>
)};

export default Games;
