import './Character.scss'

import Rectangle4 from '../../../assets/img/character/Rectangle4.png'
import Rectangle6 from '../../../assets/img/character/Rectangle6.png'
import Rectangle8 from '../../../assets/img/character/Rectangle8.png'
import Rectangle10 from '../../../assets/img/character/Rectangle10.png'


function Character(props: any) {

    return (
        <div id="divMain" className={props.class}>
            <div className="characterText textGeneral d-flex flex-column justify-content-center">
                <div id="name">{props.name}</div>
            </div>
            <div className="pickgradient">
                <img id="img" alt="Rectangle10" className="img-fluid" srcSet={Rectangle4} src=""/>
            </div>
        </div>
    )
}

export default Character;