import Rectangle12_3 from '../../../assets/img/mistObjects/Rectangle12_3.png'

function Object(props: any) {
    return (
        <div id="divMain" className={props.class}>
            <div className="mt-2"/>
            <div className="mistObjText">
                <div className="textDivImg mt-2" id="name">{props.name}</div>
                <div className="mt-2"/>
                <div className="textDivImg" id="desc">{props.description}</div>
            </div>
            <img alt="Rectangle4" id="img" className="img-fluid" srcSet={Rectangle12_3}
                 src=""/>
        </div>
    )
}

export default Object;