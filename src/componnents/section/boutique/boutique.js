import React from 'react';
import './boutique.scss';
import { Link } from 'react-router-dom';
import {HiChevronRight} from 'react-icons/hi';
import {HiChevronLeft} from 'react-icons/hi';
import {BsFillShareFill} from 'react-icons/bs';
import {BsCart, BsZoomIn} from 'react-icons/bs';


// Redux import 

// Hooks
import { useState } from 'react';


function Boutique(props){
// State
// New constantes
const products = [
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw14d8a3d7/images/large/mitchell_and_ness-NBA_NEW_JERSEY_NETS_1999_ALTERNATE_SWINGMAN_JERSEY_STEPHON_MARBURY-GREY-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw605b20e4/images/large/mcdavid-Hex_Shooter_Arm_Sleeve_Pair-scarlet-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwa196bad8/images/large/wilson-NBA_TEAM_MINI_HOOP_MIAMI_HEAT-red-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://boutique.osports.fr/JL-bourg/18232-home_default/maillot-betclic-homme-rouge.jpg',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwa57acbfd/images/large/mitchell_and_ness-NBA_CLEVELAND_CAVALIERS_2015_ALTERNATE_SWINGMAN_JERSEY_KEVIN_LOVE-navy-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw99709a3f/images/large/new_era-NBA_940_THE_LEAGUE_PHILADELPHIA_76ERS-royal_blue_red-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw33f9eb58/images/large/jordan-ULTIMATE_2_0_8P_GRAPHIC_Basketball-BLACK_BLACK_BLACK_WHITE-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw292550f3/images/large/jordan-Ultimate_2_0_Basketball-ICE_BLUE_WHITE_VACHETTA_TAN-1.jpg?sw=660&q=95',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw51fd9c56/images/large/jordan-Ultimate_2_0_Basketball-UNIVERSITY_RED_BLACK_WHITE_BLACK-1.jpg?sw=660&q=95',

    },
]
// Page load
// Events

// Variables
return (
<>
    <div className='section-shop'>
        <div className='section-shop-container'>
            <div className='shop-info'>
                <h2 className='shop-title'>Boutique</h2>
                <div className='shop-btn-naviguation'>
                    <Link to={'#'} className='arrow swiper-prev'>
                        <HiChevronLeft className="bi bi-chevron-left " />
                    </Link>
                    <Link to={'#'} className='arrow  swiper-next active'>
                        <HiChevronRight className='bi bi-chevron-right' />
                    </Link>
                </div>
            </div>
            <div className='shop-gallery-container'>
                <div className='shop-container-wrap'>
                    {
                        products && 
                        products.map((product, index) =>
                            <div className='shop s1'>
                                <div className='shop-img-box'>
                                    <img src={product.image} alt='nike shoes' />
                                </div>
                                <div className="shop-product-description">
                                    <span className="product-title">{product.title}</span>
                                    <span className="product-price">{product.price}</span>
                                </div>
                                <div className="product-action">
                                        <div className="p-a">
                                            <BsFillShareFill className="bi bi-share-fill" />
                                        </div>
                                        <div class="p-a">
                                            <BsCart className="bi bi-cart" />
                                        </div>
                                        <div class="p-a">
                                            <BsZoomIn className="bi bi-cart" />
                                        </div>
                                    </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Link to={'#'} className="show-more">
                Aller à la boutique
                <HiChevronRight className='bi bi-chevron-right' />
            </Link>
        </div>
    </div>
</>
)};

export default Boutique;
