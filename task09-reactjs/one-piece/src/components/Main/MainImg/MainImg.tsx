import DawnIsland from '../../../assets/img/DawnIsland.png'
import DawnIsland2 from '../../../assets/img/DawnIsland2.png'

function MainImg() {
    return (

        <div className="col-12 col-sm-12 col-md-9 col-xl-9 col-lg-9">
            <img alt="logo1" className="img-fluid d-none d-sm-none d-md-block mainImg"
                 srcSet={DawnIsland}
                 src=""/>
            <img alt="logo1" className="img-fluid d-block d-sm-block d-md-none"
                 srcSet={DawnIsland2}
                 src=""/>
        </div>
    )
}

export default MainImg;