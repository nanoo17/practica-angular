import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes!: Array<Pasaje>;
  constructor() {
    this.pasajes = new Array<Pasaje>();
  }

  getIdDisponible(): number {
    if (this.pasajes.length === 0) return 0;
    else return this.pasajes[this.pasajes.length - 1].idPasaje + 1;
  }
  getPasajes() {
    return this.pasajes;
  }
  //CRUD
  createPasaje(pasaje: Pasaje) {
    pasaje.idPasaje = this.getIdDisponible();
    this.pasajes.push(pasaje);
  }
  readPasaje(id: number): Pasaje {
    return this.pasajes[id]
  }
  updatePasaje(pasaje: Pasaje): void {
    this.pasajes[pasaje.idPasaje] = pasaje
  }
  deletePasaje(id: number): void {
    this.pasajes.forEach((pasaje, index) => {
      if (pasaje.idPasaje === id) {
        this.pasajes.splice(index, 1)
      }
    })
  }
}
