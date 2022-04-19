import { Component, OnInit } from '@angular/core';
import {getElementPage} from "../../api/createObj";
import OnePiceInformation from 'src/json/OnePiceInformation.json'

@Component({
  selector: 'app-mist-object',
  templateUrl: './mist-object.component.html',
  styleUrls: ['./mist-object.component.scss']
})
export class MistObjectComponent implements OnInit {

  constructor() { }

  mysticObjects: any;

  ngOnInit(): void {
    const config = {
      classDesktop: 'col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 position-relative',
      classMobile: 'col-12 col-md-6 col-xl-6 col-sm-6 col-lg-6 position-relative d-none d-sm-block d-md-block',
      countElementsWeb: 4,
      countElementsMovil: 3
    };

    this.mysticObjects = getElementPage(OnePiceInformation.mysticObjects, config);
  }

}
