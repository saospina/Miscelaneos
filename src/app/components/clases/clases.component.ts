import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alert: string = 'alert-danger';
  propiedades: object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

}
