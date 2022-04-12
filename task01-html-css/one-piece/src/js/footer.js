const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <footer>
        <div class="d-none d-sm-none d-md-block">
            <div class="row">
                <div class="col-5 text-end">
                    <img alt="Rectangle4" class="img-fluid" srcset="img/pngwing1.png" src="">
                </div>
                <div class="col-5 text-start mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel
                    congue scelerisque tortor tortor.
                </div>
            </div>
        </div>


        <div class="d-block d-sm-block d-md-none">
            <div class="row">
                <div class="col-12 col-md-5 col-xl-5 col-sm-5 col-lg-5 text-center">
                    <img alt="Rectangle4" class="img-fluid" srcset="img/pngwing1.png" src="">
                </div>
                <div class="col-12 col-md-5 col-xl-5 col-sm-5 col-lg-5 text-center mt-3">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Velit at vel
                    congue scelerisque tortor tortor.
                </div>
            </div>
        </div>

    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(bootstrap.cloneNode());
        shadowRoot.appendChild(main.cloneNode());

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
