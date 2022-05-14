import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje/pasaje';
import { PasajeService } from 'src/app/services/pasaje-service.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasaje!: Pasaje;
  precioTotal!: number;
  pasajes!: Array<Pasaje>;
  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasaje = new Pasaje();
    this.precioTotal = 0;
    this.pasajes = new Array<Pasaje>();
    this.pasajes = this.pasajeService.getPasajes();
  }
  ngOnInit(): void {
  }
  mostrarPasajes() {
    console.log(this.pasajes);
  }
}
