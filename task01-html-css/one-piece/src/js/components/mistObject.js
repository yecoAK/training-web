const mistObjectListTemplate = document.createElement('template');

mistObjectListTemplate.innerHTML = `
    <div id="MistObjects">
        <div class="row">
            <div class="col-6 text-start"><h4>Mist Object</h4></div>
            <div class="col-6 text-end"><a href="mist-objects.html">See all</a></div>
        </div>

        <div class="row contentMistObjets" id="list">
        </div>
    </div>
`;


const mistObjectTemplate = document.createElement('template');

mistObjectTemplate.innerHTML = `
    <div id="divMain" class="">
        <div class="mt-2"></div>
        <div class="mistObjText">
            <div class="textDivImg mt-2" id="name">Gomu Gomu No Mi</div>
            <div class="mt-2"></div>
            <div class="textDivImg" id="desc">Is a Paramecia-type Devil Fruit that gives the user's
                body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by
                the series protagonist, Monkey D. Luffy.
            </div>
        </div>
        <img alt="Rectangle4" id="img" class="img-fluid" srcset="img/mistObjects/Rectangle12_3.png" src="">
    </div>
`;

class mistObject extends HTMLElement {
    init;

    constructor() {
        super();
        const countElementsWeb = 4;
        const countElementsMovil = 3;
        this.createTemplate(countElementsWeb, countElementsMovil);
    }

    createTemplate(countElementsWeb, countElementsMovil) {
        //create element
        this.init = this.attachShadow({mode: 'closed'});
        this.addStyle(this.init);

        let mysticObjects = getTypeData.mysticObjects;
        this.createTemplateGeneral(countElementsWeb, countElementsMovil, this.init, mysticObjects).then(response => {
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
            const mysticObjects = json().getType(getTypeData, response);

            mysticObjects.forEach(function (c) {
                //validate number of element
                if (countElementsWeb <= 0) {
                    return;
                }
                countElementsWeb--;

                //responsive class
                if (countElementsMovil <= 0) {
                    mistObjectTemplate.content.getElementById("divMain").setAttribute("class", "col-12 col-md-6 col-xl-6 col-sm-6 col-lg-6 position-relative d-none d-sm-block d-md-block");
                } else {
                    mistObjectTemplate.content.getElementById("divMain").setAttribute("class", "col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 position-relative");
                }
                countElementsMovil--;

                //edit and add element
                mistObjectTemplate.content.getElementById("name").textContent = c.name;
                mistObjectTemplate.content.getElementById("img").srcset = c.img;
                mistObjectTemplate.content.getElementById("desc").textContent = c.description;
                mistObjectListTemplate.content.getElementById("list").appendChild(mistObjectTemplate.content.cloneNode(true));
            });


            //add template to customElements
            init.appendChild(mistObjectListTemplate.content);
            }
        ).catch(function (error) {
            console.log('Request failed', error);
        });
        return init;
    }

}

customElements.define('mistobject-component', mistObject);
