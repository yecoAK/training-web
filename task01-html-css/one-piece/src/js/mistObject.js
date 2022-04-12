const mistObjectTemplate = document.createElement('template');

mistObjectTemplate.innerHTML = `
    <div id="MistObjects">
        <div class="row">
            <div class="col-6 text-start"><h4>Mist Object</h4></div>
            <div class="col-6 text-end"><a href="mist-objects.html">See all</a></div>
        </div>

        <div class="row contentMistObjets">
            <div class="col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 position-relative">
                <div class="mistObjText">
                    <div class="textDivImg mt-2">Gomu Gomu No Mi</div>
                    <div class="mt-2"></div>
                    <div class="textDivImg">Is a Paramecia-type Devil Fruit that gives the user's
                        body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by
                        the series protagonist, Monkey D. Luffy.
                    </div>
                </div>
                <img alt="Rectangle4" class="img-fluid"
                     srcset="img/mistObjects/Rectangle12_3.png">
            </div>
            <span class="mt-4 d-block d-sm-none d-md-none"></span>
            <div class="col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 position-relative">
                <div class="mistObjText">
                    <div class="textDivImg mt-2">Gomu Gomu No Mi</div>
                    <div class="mt-2"></div>
                    <div class="textDivImg">Is a Paramecia-type Devil Fruit that gives the user's
                        body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by
                        the series protagonist, Monkey D. Luffy.
                    </div>
                </div>
                <img alt="Rectangle4" class="img-fluid"
                     srcset="img/mistObjects/Rectangle12_3.png" src="">
            </div>
        </div>
        <div class="mt-4"></div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 position-relative">
                <div class="mistObjText">
                    <div class="textDivImg mt-2">Gomu Gomu No Mi</div>
                    <div class="mt-2"></div>
                    <div class="textDivImg">Is a Paramecia-type Devil Fruit that gives the user's
                        body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by
                        the series protagonist, Monkey D. Luffy.
                    </div>
                </div>
                <img alt="Rectangle4" class="img-fluid" srcset="img/mistObjects/Rectangle12_3.png" src="">
            </div>

            <div class="col-12 col-md-6 col-xl-6 col-sm-6 col-lg-6 position-relative d-none d-sm-block d-md-block">
                <div class="mistObjText">
                    <div class="textDivImg mt-2">Gomu Gomu No Mi</div>
                    <div class="mt-2"></div>
                    <div class="textDivImg">Is a Paramecia-type Devil Fruit that gives the user's
                        body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by
                        the series protagonist, Monkey D. Luffy.
                    </div>
                </div>
                <img alt="Rectangle4" class="img-fluid" srcset="img/mistObjects/Rectangle12_3.png" src="">
            </div>
        </div>

    </div>
`;

class mistObject extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(bootstrap.cloneNode());
        shadowRoot.appendChild(main.cloneNode());

        shadowRoot.appendChild(mistObjectTemplate.content);
    }
}

customElements.define('mistobject-component', mistObject);
