import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel/hotel';
@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  hoteles!: Array<Hotel>;
  indice: number = 0;
  hotel!: Hotel;
  constructor() { }

  ngOnInit(): void {
  }

}
