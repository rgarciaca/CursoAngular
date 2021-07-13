import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide-sow',
  templateUrl: './cast-slide-sow.component.html',
  styleUrls: ['./cast-slide-sow.component.css']
})
export class CastSlideSowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode : true,
      spaceBetween: 15
    });
  }

}
