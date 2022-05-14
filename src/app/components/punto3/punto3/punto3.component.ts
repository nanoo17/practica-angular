import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje/pasaje';
import { PasajeService } from 'src/app/services/pasaje-service.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasaje!: Pasaje
  precioTotal!: number

  constructor(private pasajeService: PasajeService) {
    this.pasaje = new Pasaje();
    this.precioTotal = 0;
  }

  ngOnInit(): void {

  }

}
