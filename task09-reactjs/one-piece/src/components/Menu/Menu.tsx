import React from "react";
import {Link} from "react-router-dom";

import './Menu.scss'

import logo1 from '../../assets/img/logo/One-Piece-Logo1.png'
import logo2 from '../../assets/img/logo/One-Piece-Logo2.png'
import flagSpanish from '../../assets/img/flagSpanish.png'
import flagEnglish from '../../assets/img/flagEnglish.png'


function Menu() {
    return (
        <div>
            <div className="row">
                <div className="col-12 d-flex justify-content-start">

                    <input className="side-menu" type="checkbox" id="side-menu"/>
                    <label className="hamb" htmlFor="side-menu"><span className="hamb-line"/></label>

                    <Link to="/">
                        <img alt="logo1" className="d-none d-sm-none d-md-block" srcSet={logo1}
                             src=""/>
                        <img alt="logo1" className="mainIcon d-block d-sm-block d-md-none"
                             srcSet={logo2} src=""/>
                    </Link>

                    <nav className="nav">
                        <ul className="menu">
                            <li><Link to="/" className="menu active">Home</Link></li>
                            <li><Link to="/charactersPage">Character</Link></li>
                            <li><Link to="/islandsPage">Islands</Link></li>
                            <li><Link to="/mistObjectPage">Mist Object</Link></li>

                            <div className="ps-2 d-flex justify-content-center">
                                <div className="languageMovile active text-center d-block d-sm-block d-md-none">
                                    English
                                    <img alt="logo1" srcSet={flagEnglish} src=""/>
                                </div>
                                <div className="languageMovile text-center d-block d-sm-block d-md-none">
                                    Spanish
                                    <img alt="logo1" srcSet={flagSpanish} src=""/>
                                </div>
                            </div>
                        </ul>
                    </nav>


                    <div className="ps-2 d-flex justify-content-end">
                        <div className="language active text-center d-none d-sm-none d-md-block">
                            <img alt="logo1" srcSet={flagEnglish} src=""/>
                        </div>
                        <div className="language text-center d-none d-sm-none d-md-block">
                            <img alt="logo1" srcSet={flagSpanish} src=""/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Menu;