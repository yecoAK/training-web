import { Component, OnInit } from '@angular/core';
import {getElementPage} from "../../api/createObj";
import OnePiceInformation from "../../../json/OnePiceInformation.json";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  characters: any;

  ngOnInit(): void {

    const config = {
      classDesktop: 'col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative',
      classMobile: 'col-6 col-sm-3 col-md-3 col-xl-3 col-lg-3 position-relative d-none d-sm-block d-md-block',
      countElementsWeb: 4,
      countElementsMovil: 2
    };

    this.characters = getElementPage(OnePiceInformation.characters, config);
  }

}
