import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano +'px'}">
      Este es un parrafo
    </p>
    <button class="btn btn-primary"(click)="tamano = tamano - 5">
    <i class= "fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 100;

  constructor() { }

  ngOnInit() {
  }

}
