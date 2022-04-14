function MainSipnosisMobile() {
    return (

        <div className="col-12 col-sm-12 col-md-12 col-xl-3 col-lg-3 d-block d-sm-block d-md-none">
            <div className="row">
                <div className="col-12">
                    <div className="boxSipnosisMovil">
                        <h5><strong>Sipnosis</strong></h5>
                        <p>Dawn Island is an island located in the East Blue and where the Goa Kingdom is
                            situated.
                            <span id="dots">...</span>
                            <span id="more">
                                    This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo
                                        and his family.
                                    Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is
                                        one of the two known entrances to the Grand Line.
                                    It is located in the Red Line and is the geographical antipode of Mary Geoise.
                                </span>
                        </p>
                        <hr/>
                        <div className="row text-center">
                            <p className="boxSipnosisMovilBtn m-0" id="myBtn" onClick={readAll}>Read All</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}


function readAll() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots!.style.display === "none") {
        dots!.style.display = "inline";
        btnText!.innerHTML = "Read All";
        moreText!.style.display = "none";
    } else {
        dots!.style.display = "none";
        btnText!.innerHTML = "Read Less";
        moreText!.style.display = "inline";
    }
}

export default MainSipnosisMobile;