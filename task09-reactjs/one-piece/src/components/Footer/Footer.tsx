import './Footer.scss'

import pngwing1 from '../../assets/img/pngwing1.png'

function Footer() {
    return (
        <footer>
            <div className="d-none d-sm-none d-md-block">
                <div className="row">
                    <div className="col-5 text-end">
                        <img alt="Rectangle4" className="img-fluid" srcSet={pngwing1} src=""/>
                    </div>
                    <div className="col-5 text-start mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Velit at vel
                        congue scelerisque tortor tortor.
                    </div>
                </div>
            </div>


            <div className="d-block d-sm-block d-md-none">
                <div className="row">
                    <div className="col-12 col-md-5 col-xl-5 col-sm-5 col-lg-5 text-center">
                        <img alt="Rectangle4" className="img-fluid" srcSet={pngwing1} src=""/>
                    </div>
                    <div className="col-12 col-md-5 col-xl-5 col-sm-5 col-lg-5 text-center mt-3">Lorem ipsum dolor sit
                        amet,
                        consectetur adipiscing elit. Velit at vel
                        congue scelerisque tortor tortor.
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;