import './MistObject.scss'

import Object from "./Object/Object";
import {getElementPage} from "../createObj";
import OnePiceInformation from "../../json/OnePiceInformation.json";


function MistObject() {

    const config = {
        classDesktop: 'col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 position-relative',
        classMobile: 'col-12 col-md-6 col-xl-6 col-sm-6 col-lg-6 position-relative d-none d-sm-block d-md-block',
        countElementsWeb: 4,
        countElementsMovil: 3
    };

    let mysticObjects = getElementPage(OnePiceInformation.mysticObjects, config);

    return (
        <div id="MistObjects">
            <div className="row">
                <div className="col-6 text-start"><h4>Mist Object</h4></div>
                <div className="col-6 text-end"><a href="mist-objects.html">See all</a></div>
            </div>

            <div className="row contentMistObjets" id="list">
                {
                    mysticObjects.map((item) => {
                        return <Object
                            key={item.name}
                            name={item.name}
                            description={item.description}
                            img={item.img.toString()}
                            class={item.class}/>
                    })
                }
            </div>
        </div>
    )
}

export default MistObject;