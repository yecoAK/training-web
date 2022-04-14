import React from "react";
// import {Link, Route, Routes} from "react-router-dom";
// import Home from "../pages";
// import Contact from "../pages/Contact";
// import About from "../pages/About";

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

                    <a href="index.html">
                        <img alt="logo1" className="d-none d-sm-none d-md-block" srcSet={logo1}
                             src=""/>
                        <img alt="logo1" className="mainIcon d-block d-sm-block d-md-none"
                             srcSet={logo2} src=""/>
                    </a>

                    <nav className="nav">
                        <ul className="menu">
                            <li><a href="index.html" className="menu active">Home</a></li>
                            <li><a href="characters.html">Character</a></li>
                            <li><a href="islands.html">Inslands</a></li>
                            <li><a href="mist-objects.html">Mist Object</a></li>

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

            {/*<nav>*/}
            {/*    <Link to="/home">home</Link> |{" "}*/}
            {/*    <Link to="/contact">contact</Link> |{" "}*/}
            {/*    <Link to="/about">about</Link>*/}
            {/*</nav>*/}

            {/*<Routes>*/}
            {/*    <Route path="home" element={<Home/>}/>*/}
            {/*    <Route path="contact" element={<Contact/>}/>*/}
            {/*    <Route path="about" element={<About/>}/>*/}
            {/*</Routes>*/}
        </div>
    )
}

export default Menu;