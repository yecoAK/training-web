const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
      <header>
        <div class="row">
            <div class="col-12 d-flex justify-content-start">

                <input class="side-menu" type="checkbox" id="side-menu"/>
                <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

                <a href="index.html">
                    <img alt="logo1" class="d-none d-sm-none d-md-block" srcset="img/logo/One-Piece-Logo1.png"
                         src="">
                    <img alt="logo1" class="mainIcon d-block d-sm-block d-md-none"
                         srcset="img/logo/One-Piece-Logo2.png" src="">
                </a>

                <nav class="nav">
                    <ul class="menu">
                        <li><a href="index.html" class="menu active">Home</a></li>
                        <li><a href="characters.html">Character</a></li>
                        <li><a href="islands.html">Inslands</a></li>
                        <li><a href="mist-objects.html">Mist Object</a></li>

                        <div class="ps-2 d-flex justify-content-center">
                            <div class="languageMovile active text-center d-block d-sm-block d-md-none">
                                English
                                <img alt="logo1" srcset="img/flagEnglish.png" src=""></div>
                            <div class="languageMovile text-center d-block d-sm-block d-md-none">
                                Spanish
                                <img alt="logo1" srcset="img/flagSpanish.png" src="">
                            </div>
                        </div>
                    </ul>
                </nav>


                <div class="ps-2 d-flex justify-content-end">
                    <div class="language active text-center d-none d-sm-none d-md-block">
                        <img alt="logo1" srcset="img/flagEnglish.png" src=""></div>
                    <div class="language text-center d-none d-sm-none d-md-block">
                        <img alt="logo1" srcset="img/flagSpanish.png" src="">
                    </div>
                </div>


            </div>
        </div>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(bootstrap.cloneNode());
        shadowRoot.appendChild(main.cloneNode());

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
