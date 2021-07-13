import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() movies: Movie[] = [];

  swiper: Swiper;

  constructor() { }

  ngOnInit(): void 
  {
    console.log(this.movies);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
  
    });
  }

  onSlidePrev() {
    this.swiper.slidePrev();
  }

  onSlideNext() {
    this.swiper.slideNext();
  }

}
