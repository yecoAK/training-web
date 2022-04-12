const characterTemplate = document.createElement('template');

characterTemplate.innerHTML = `
   <div id="character">
        <div class="row">
            <div class="col-6 text-start"><h4>Character</h4></div>
            <div class="col-6 text-end"><a href="characters.html">See all</a></div>
        </div>

        <div class="row">
            <div class="col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative">
                <div class="characterText textGeneral d-flex flex-column justify-content-center">
                    <div>Monkey D. Luffy</div>
                </div>
                <div class="pickgradient">
                    <img alt="Rectangle4" class="img-fluid" srcset="img/character/Rectangle4.png" src="">
                </div>

            </div>
            <div class="col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3  position-relative">
                <div class="characterText textGeneral d-flex flex-column justify-content-center">
                    <div>Portgas D. Ace</div>
                </div>
                <div class="pickgradient">
                    <img alt="Rectangle6" class="img-fluid" srcset="img/character/Rectangle6.png" src="">
                </div>
            </div>
            <div class="col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative d-none d-sm-block d-md-block">
                <div class="characterText textGeneral d-flex flex-column justify-content-center">
                    <div>Roronoa Zoro</div>
                </div>
                <div class="pickgradient">
                    <img alt="Rectangle8" class="img-fluid" srcset="img/character/Rectangle8.png" src="">
                </div>
            </div>
            <div class="col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative d-none d-sm-block d-md-block">
                <div class="characterText textGeneral d-flex flex-column justify-content-center">
                    <div>Nico Robin</div>
                </div>
                <div class="pickgradient">
                    <img alt="Rectangle10" class="img-fluid" srcset="img/character/Rectangle10.png" src="">
                </div>
            </div>

        </div>
    </div>
`;

class Character extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(bootstrap.cloneNode());
        shadowRoot.appendChild(main.cloneNode());

        shadowRoot.appendChild(characterTemplate.content);
    }
}

customElements.define('character-component', Character);
