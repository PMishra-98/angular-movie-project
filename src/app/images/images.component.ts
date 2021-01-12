import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],

 providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {

  ngOnInit() {
   
  }
  constructor(private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
 
    this.config.interval = 2000;

  this.config.wrap =true;
  this.config.keyboard = false;
  this.config.pauseOnHover = false;
  }
  }