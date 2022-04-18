import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/fonts.scss'
import './App.module.scss'

import Home from "../pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import IslandsPage from "../pages/IslandsPage/IslandsPage";
import React from "react";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import MistObjectPage from "../pages/MistObjectPage/MistObjectPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="islandsPage" element={<IslandsPage/>}/>
            <Route path="charactersPage" element={<CharactersPage/>}/>
            <Route path="mistObjectPage" element={<MistObjectPage/>}/>
        </Routes>
    );
}

export default App;
