import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    readAll(): void {
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let btnText = document.getElementById("myBtn");

        if (dots!.style.display === "none") {
            dots!.style.display = "inline";
            btnText!.innerHTML = "Read All";
            moreText!.style.display = "none";
        } else {
            dots!.style.display = "none";
            btnText!.innerHTML = "Read Less";
            moreText!.style.display = "inline";
        }
    }

}
