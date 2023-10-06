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
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0019.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0007-1.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-00013.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0020.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0024.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0026.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0014.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-0004.png',

    },
    {
        "title":"Shoes Nike 2020",
        "price":"80 €",
        "image": 'http://all-sports-fund.ch/wp-content/uploads/2020/03/reference-00012.png',

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
