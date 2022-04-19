import {Component, OnInit} from '@angular/core';
import {getElementPage} from 'src/app/api/createObj'
import OnePiceInformation from 'src/json/OnePiceInformation.json'

// import img from 'src/assets/img/islands'

@Component({
    selector: 'app-islands',
    templateUrl: './islands.component.html',
    styleUrls: ['./islands.component.scss']
})
export class IslandsComponent implements OnInit {

    constructor() {
    }

    islands: any;

    ngOnInit(): void {
        const config = {
            classDesktop: 'col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative',
            classMobile: 'col-6 col-md-4 col-sm-4 col-xl-4 col-lg-4 position-relative d-none d-sm-block d-md-block',
            countElementsWeb: 3,
            countElementsMovil: 2
        };

        this.islands = getElementPage(OnePiceInformation.islands, config);
    }

}
