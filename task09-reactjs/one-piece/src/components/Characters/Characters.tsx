import './Characters.scss'

import Character from "./Character/Character";
import OnePiceInformation from '../../json/OnePiceInformation.json'
import {getElementPage} from '../createObj'

function Characters() {

    const config = {
        classDesktop: 'col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative',
        classMobile: 'col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative d-none d-sm-block d-md-block',
        countElementsWeb: 4,
        countElementsMovil: 2
    };

    let characters = getElementPage(OnePiceInformation.characters, config);

    return (
        <div id="character">
            <div className="row">
                <div className="col-6 text-start"><h4>Character</h4></div>
                <div className="col-6 text-end"><a href="characters.html">See all</a></div>
            </div>
            <div className="row" id="list">
                {
                    characters.map((item) => {
                        return <Character
                            key={item.name}
                            name={item.name}
                            img={item.img.toString()}
                            class={item.class}/>
                    })
                }
            </div>
        </div>
    )
}

export default Characters;