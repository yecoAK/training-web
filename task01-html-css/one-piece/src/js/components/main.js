const mainTemplate = document.createElement('template');

mainTemplate.innerHTML = `

    
`;

class main extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(bootstrap.cloneNode());
        shadowRoot.appendChild(main.cloneNode());

        shadowRoot.appendChild(mainTemplate.content);
    }
}

customElements.define('main-component', main);
