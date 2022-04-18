import geo from '../../../assets/img/icon/geo.png'

function Island(props: any) {
    return (
        <div id="divMain"
             className={props.class}>
            <div className="islandsText d-flex flex-column justify-content-center textGeneral">
                <div className="textDivImg"><span className="islandsTextHeader" id="name">{props.name}</span></div>
                <div className="textDivImg">
                    <img alt="Rectangle4" className="img-fluid" srcSet={geo} src=""/>
                    <span id="Location"> {props.Location}</span>
                </div>
            </div>
            <img id="img" alt="Rectangle8" className="img-fluid" srcSet={require('../../../assets/img/islands/' + props.img)} src=""/>

        </div>
    )
}

export default Island;