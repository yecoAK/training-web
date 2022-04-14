import './Islands.scss'

import Island from "./Island/Island";
import OnePiceInformation from '../../json/OnePiceInformation.json'
import {getElementPage} from '../createObj'

function Islands() {

    const config = {
        classDesktop: 'col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative',
        classMobile: 'col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative d-none d-sm-block d-md-block',
        countElementsWeb: 3,
        countElementsMovil: 2
    };


    let islands = getElementPage(OnePiceInformation.islands, config);


    return (

        <div id="islands">
            <div className="row">
                <div className="col-6 text-start"><h4>Islands</h4></div>
                <div className="col-6 text-end"><a href="islands.html">See all</a></div>
            </div>

            <div className="row" id="list">
                {
                    islands.map((item) => {
                        return <Island
                            key={item.name}
                            name={item.name}
                            Location={item.Location}
                            img={item.img.toString()}
                            class={item.class}/>
                    })
                }
            </div>
        </div>

    )
}

export default Islands;