import React from "react";
import Menu from "../../components/Menu/Menu";
import './Home.scss'
import Main from "../../components/Main/Main";
import Search from "../../components/Search/Search";
import Characters from "../../components/Characters/Characters";
import Islands from "../../components/Islands/Islands";
import MistObject from "../../components/MistObject/MistObject";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div className="container mt-3">
            <Menu></Menu>

            <div className="mt-4"/>

            <Main></Main>

            <div className="mt-5 d-none d-sm-none d-md-block"/>

            <Search></Search>


            <div className="mt-4"></div>


            <Characters></Characters>


            <div className="mt-5"></div>


            <Islands></Islands>


            <div className="mt-5"></div>


            <MistObject></MistObject>

            <div className="mt-5"></div>

            <Footer></Footer>

        </div>
    )
}

export default Home;