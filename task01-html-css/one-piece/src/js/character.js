const characterListTemplate = document.createElement('template');

characterListTemplate.innerHTML = `
   <div id="character">
        <div class="row">
            <div class="col-6 text-start"><h4>Character</h4></div>
            <div class="col-6 text-end"><a href="characters.html">See all</a></div>
        </div>
        <div class="row" id="listCharacter">
                <!--LIST OF ALL CHARACTER-->
        </div>
    </div>
`;

const characterTemplate = document.createElement('template');

characterTemplate.innerHTML = ` 
    <div class="col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative d-none d-sm-block d-md-block">
        <div class="characterText textGeneral d-flex flex-column justify-content-center">
            <div id="name"></div>
        </div>
        <div class="pickgradient">
            <img id="imgCharacter" alt="Rectangle10" class="img-fluid" srcset="" src="">
        </div>
    </div>
`;


class Character extends HTMLElement {

    constructor() {
        super();
        const countElements = 4;
        this.createTemplate(countElements);
    }

    addStyle(init) {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        init.appendChild(bootstrap.cloneNode());
        init.appendChild(main.cloneNode());
    }

    createTemplate(countElements) {
        //create element
        const init = this.attachShadow({mode: 'closed'});
        this.addStyle(init);

        //read data
        json().readData().then(response => {
                const characters = json().getType('characters', response);

                characters.forEach(function (c) {
                    //validate number of element
                    if (countElements <= 0) {
                        return;
                    }
                    countElements--;

                    //edit and add element
                    characterTemplate.content.getElementById("name").textContent = c.name;
                    characterTemplate.content.getElementById("imgCharacter").srcset = c.img;
                    characterListTemplate.content.getElementById("listCharacter").appendChild(characterTemplate.content.cloneNode(true));
                });


                //add template to customElements
                init.appendChild(characterListTemplate.content);
            }
        ).catch(function (error) {
            console.log('Request failed', error);
        });
    }
}

customElements.define('character-component', Character);