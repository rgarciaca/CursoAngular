import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;

  constructor( private el: ElementRef) { 
    
  }

  @HostListener('mouseenter') mouseEnter() {
    console.log(this.nuevoColor);
    this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  @HostListener('mouseleave') mouseExit() {
    this.el.nativeElement.style.backgroundColor = "white";
  }

}
