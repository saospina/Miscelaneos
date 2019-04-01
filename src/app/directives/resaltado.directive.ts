import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element: ElementRef) {
    console.log('calling to the directive');
    // element.nativeElement.style.backgroundColor = 'red';
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'blue');
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.resaltar(null);
    // this.element.nativeElement.style.backgroundColor = 'green';
  }
  private resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;

  }

}
