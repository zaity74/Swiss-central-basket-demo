import React from "react";
import { Link } from "react-router-dom";
import './nav.scss';
import { HiChevronDown} from 'react-icons/hi';
import { HiChevronUp } from 'react-icons/hi';
import { HiUser } from "react-icons/hi";
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {IoMdMenu} from 'react-icons/io';

// Redux import 

// Hooks


function Nav(props) {
    // State
    // New constantes
    // Page load
    // Events
    // Variables
        return (
            <>
                <nav>
                    <div className="container_nav">
                        {/*<!-- ====== Navbar desktop =======-->*/}
                            {/*<!-- ====== Navbar-bottom =======-->*/}
                            <div className="nav-bottom">
                                <Link to={'/'} className="logo">
                                    {/* Add img here */}
                                    <img src={'https://www.swisscentralbasketball.ch/wp-content/uploads/2018/08/Swiss_Central_Basketball_Logo_web.png'} alt=''/>
                                </Link>
                                <ul className="nav-link">
                                    {/*<!-- ====== Menu Link =======-->*/}
                                    <li className="link">
                                            {/*<!-- ====== Link action -> dropdown =======-->*/}
                                            <Link to={'/'} className="dropdown-link">
                                                Le club
                                                <HiChevronUp className="up" />
                                                <HiChevronDown className="down" />
                                            </Link>
                                                {/*<!-- ====== Display - container =======-->*/}
                                                <ul className="toggle-link">
                                                    <li className="hide-link">
                                                        <Link to={'/'}>A propos</Link>
                                                    </li>
                                                    <li className="hide-link">
                                                        <Link to={'/'}>Licences et tarifs</Link>
                                                    </li>
                                                    <li className="hide-link">
                                                        <Link to={'/'}>Les gymnases</Link>
                                                    </li>
                                                    <li className="hide-link">
                                                        <Link to={'/'}>La vie du club</Link>
                                                    </li>
                                                </ul>
                                    </li>
                                    <li className="link">
                                            {/*<!-- ====== Link action - dropdown =======-->*/}
                                            <Link to={'/'} className="dropdown-link">
                                                Les équipes
                                                <HiChevronUp className="up" />
                                                <HiChevronDown className="down" />
                                            </Link>
                                                {/*<!-- ====== display - container =======-->*/}
                                                <ul className="toggle-link">
                                                    <li className="hide-link">
                                                        <Link to={'/'}>Equipe A</Link>
                                                    </li>
                                                    <li className="hide-link">
                                                        <Link to={'/'}>Equipe B</Link>
                                                    </li>
                                                </ul>
                                    </li>
                                    <li className="link"><Link to={'/'} className="dropdown-link">Actualité</Link></li>
                                    <li className="link"><Link to={'/'} className="dropdown-link">Médias</Link></li>
                                    <li className="link">
                                            {/*<!-- ====== Link action - dropdown =======-->*/}
                                            <Link to={'/'} className="dropdown-link">
                                                Partenaires
                                                <HiChevronUp className="up" />
                                                <HiChevronDown className="down" />
                                            </Link>
                                                {/*<!-- ====== Display - container =======-->*/}
                                                <ul className="toggle-link">
                                                    <li className="hide-link">
                                                        <Link to={'/'}>Nos partenaires</Link>
                                                    </li>
                                                    <li className="hide-link">
                                                        <Link to={'/'}>Devenir partenaire</Link>
                                                    </li>
                                                </ul>
                                    </li>
                                    <li className="link">
                                        <Link to={'/'} 
                                        className="dropdown-link"
                                        style={{backgroundImage: 'linear-gradient(to right top, #e00d0d, #cd1112, #b91315, #a61616, #931717)', color: 'white'}}>
                                        Contact
                                        </Link>
                                    </li>
                                </ul>
                                <Link to={'#'} className="burger">
                                    <IoMdMenu className="icone_burger" />
                                </Link>
                                <div className="action">
                                    {/*<!-- ====== Login =======-->*/}
                                    <Link to={'/'} className="login">
                                        <HiUser/>
                                    </Link>
                                    {/*<!-- ====== Boutique =======-->*/}
                                    <Link to={'/'} className="action-link">
                                        <HiOutlineShoppingCart/>
                                    </Link>
                                    {/*<!-- ====== Search =======-->*/}
                                    <Link to={'/'} className="search btn size1">
                                    
                                    </Link>
                                </div>
                            </div>
                        
                    </div>
                </nav>
            </>
        )
}
export default Nav;