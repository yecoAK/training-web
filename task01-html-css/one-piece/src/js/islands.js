const islandsTemplate = document.createElement('template');

islandsTemplate.innerHTML = `
  <div id="islands">
        <div class="row">
            <div class="col-6 text-start"><h4>Islands</h4></div>
            <div class="col-6 text-end"><a href="islands.html">See all</a></div>
        </div>

        <div class="row">
            <div class="col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative">
                <div class="islandsText d-flex flex-column justify-content-center textGeneral">
                    <div class="textDivImg"><span class="islandsTextHeader">Dawn Island</span></div>
                    <div class="textDivImg">
                        <img alt="Rectangle4" class="img-fluid" srcset="img/icon/geo.png" src="">
                        East Blue
                    </div>
                </div>
                <img alt="Rectangle4" class="img-fluid" srcset="img/islands/Rectangle12.png" src="">
            </div>
            <div class="col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative">
                <div class="islandsText d-flex flex-column justify-content-center textGeneral">
                    <div class="textDivImg"><span class="islandsTextHeader">Reverse Mountain</span></div>
                    <div class="textDivImg">
                        <img alt="Rectangle4" class="img-fluid" srcset="img/icon/geo.png" src="">
                        East Blue
                    </div>
                </div>
                <img alt="Rectangle6" class="img-fluid" srcset="img/islands/Rectangle121.png" src="">
            </div>
            <div class="col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative d-none d-sm-block d-md-block">
                <div class="islandsText d-flex flex-column justify-content-center textGeneral">
                    <div class="textDivImg"><span class="islandsTextHeader">Reverse Mountain</span></div>
                    <div class="textDivImg">
                        <img alt="Rectangle4" class="img-fluid" srcset="img/icon/geo.png" src="">
                        <span>East Blue</span>
                    </div>
                </div>
                <img alt="Rectangle8" class="img-fluid" srcset="img/islands/Rectangle121.png" src="">
            </div>
        </div>
    </div>
`;

class islands extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(bootstrap.cloneNode());
        shadowRoot.appendChild(main.cloneNode());

        shadowRoot.appendChild(islandsTemplate.content);
    }
}

customElements.define('islands-component', islands);
