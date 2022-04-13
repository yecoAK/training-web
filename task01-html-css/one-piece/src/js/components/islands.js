const islandsListTemplate = document.createElement('template');

islandsListTemplate.innerHTML = `
  <div id="islands">
        <div class="row">
            <div class="col-6 text-start"><h4>Islands</h4></div>
            <div class="col-6 text-end"><a href="islands.html">See all</a></div>
        </div>

        <div class="row" id="list">
            <!--LIST OF ALL ISLAND-->
        </div>
    </div>
`;

const islandTemplate = document.createElement('template');

islandTemplate.innerHTML = ` 
     <div id="divMain" class="col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative d-none d-sm-block d-md-block">
        <div class="islandsText d-flex flex-column justify-content-center textGeneral">
            <div class="textDivImg"><span class="islandsTextHeader" id="name"></span></div>
            <div class="textDivImg">
                <img alt="Rectangle4" class="img-fluid" srcset="img/icon/geo.png" src="">
                <span id="Location"></span>
            </div>
        </div>
        <img id="img" alt="Rectangle8" class="img-fluid" srcset="" src="">
      </div>
`;

class islands extends HTMLElement {
    constructor() {
        super();
        const countElementsWeb = 3;
        const countElementsMovil = 2;
        this.createTemplate(countElementsWeb, countElementsMovil);
    }

    addStyle(init) {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const main = document.querySelector('link[href*="main"]');

        init.appendChild(bootstrap.cloneNode());
        init.appendChild(main.cloneNode());
    }

    createTemplate(countElementsWeb, countElementsMovil) {
        const init = this.attachShadow({mode: 'closed'});
        this.addStyle(init);

        //read data
        json().readData().then(response => {
                const islands = json().getType('islands', response);

                islands.forEach(function (c) {
                    //validate number of element
                    if (countElementsWeb <= 0) {
                        return;
                    }
                    countElementsWeb--;

                    //responsive class
                    if (countElementsMovil <= 0) {
                        islandTemplate.content.getElementById("divMain").setAttribute("class", "col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative d-none d-sm-block d-md-block");
                    } else {
                        islandTemplate.content.getElementById("divMain").setAttribute("class", "col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative");
                    }
                    countElementsMovil--;

                    //edit and add element
                    islandTemplate.content.getElementById("name").textContent = c.name;
                    islandTemplate.content.getElementById("Location").textContent = c.Location;
                    islandTemplate.content.getElementById("img").srcset = c.img;
                    islandsListTemplate.content.getElementById("list").appendChild(islandTemplate.content.cloneNode(true));
                });


                //add template to customElements
                init.appendChild(islandsListTemplate.content);
            }
        ).catch(function (error) {
            console.log('Request failed', error);
        });
    }
}

customElements.define('islands-component', islands);
