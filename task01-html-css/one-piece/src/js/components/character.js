const characterListTemplate = document.createElement('template');

characterListTemplate.innerHTML = `
   <div id="character">
        <div class="row">
            <div class="col-6 text-start"><h4>Character</h4></div>
            <div class="col-6 text-end"><a href="characters.html">See all</a></div>
        </div>
        <div class="row" id="list">
                <!--LIST OF ALL CHARACTER-->
        </div>
    </div>
`;

const characterTemplate = document.createElement('template');

characterTemplate.innerHTML = ` 
    <div id="divMain" class="">
        <div class="characterText textGeneral d-flex flex-column justify-content-center">
            <div id="name"></div>
        </div>
        <div class="pickgradient">
            <img id="img" alt="Rectangle10" class="img-fluid" srcset="" src="">
        </div>
    </div>
`;


class Character extends HTMLElement {
    init;

    constructor() {
        super();
        const countElementsWeb = 4;
        const countElementsMovil = 2;
        this.createTemplate(countElementsWeb, countElementsMovil);
    }

    createTemplate(countElementsWeb, countElementsMovil) {
        this.init = this.attachShadow({mode: 'closed'});
        this.addStyle(this.init);

        let characters = getTypeData.characters;
        this.createTemplateGeneral(countElementsWeb, countElementsMovil, this.init, characters).then(response => {
            this.init = response;
        });
    }

    addStyle(init) {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        init.appendChild(bootstrap.cloneNode());
        init.appendChild(main.cloneNode());
    }

    async createTemplateGeneral(countElementsWeb, countElementsMovil, init, getTypeData) {
        await json().readData().then(response => {
                const characters = json().getType(getTypeData, response);

                characters.forEach(function (c) {
                    //validate number of element
                    if (countElementsWeb <= 0) {
                        return;
                    }
                    countElementsWeb--;

                    //responsive class
                    if (countElementsMovil <= 0) {
                        characterTemplate.content.getElementById("divMain").setAttribute("class", "col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative d-none d-sm-block d-md-block");
                    } else {
                        characterTemplate.content.getElementById("divMain").setAttribute("class", "col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative");
                    }
                    countElementsMovil--;

                    //edit and add element
                    characterTemplate.content.getElementById("name").textContent = c.name;
                    characterTemplate.content.getElementById("img").srcset = c.img;
                    characterListTemplate.content.getElementById("list").appendChild(characterTemplate.content.cloneNode(true));
                });


                //add template to customElements
                init.appendChild(characterListTemplate.content);
            }
        ).catch(function (error) {
            console.log('Request failed', error);
        });
        return init;
    }
}

customElements.define('character-component', Character);
