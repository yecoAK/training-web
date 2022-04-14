import './Main.scss'

import DawnIsland from '../../assets/img/DawnIsland.png'
import DawnIsland2 from '../../assets/img/DawnIsland2.png'
import MainImg from "./MainImg/MainImg";
import MainSipnosis from "./MainSipnosis/MainSipnosis";
import MainSipnosisMobile from "./MainSipnosisMobile/MainSipnosisMobile";

function Main() {
    return (
        <div id="main">
            <div className="row">
                <MainImg/>
                <MainSipnosis/>
                <MainSipnosisMobile/>
            </div>
        </div>
    )
}


export default Main;