import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes!: Array<any>;
  constructor() {
    this.pasajes = new Array<Pasaje>();
    this.pasajes = [
      {
        idPasaje: 1,
        dniPasajero: 3884142,
        precioPasaje: 3822,
        categoriaPasajero: "Menor",
        fechaCompra: Date.now(),
      },]
  }

  getIdDisponible(): number {
    if (this.pasajes.length === 0) return 0;
    else return this.pasajes[this.pasajes.length - 1].idPasaje + 1;
  }
  //CRUD
  getPasajes() {
    return this.pasajes;
  }
  addPasaje(pasaje: Pasaje) {
    pasaje.idPasaje = this.getIdDisponible();
    this.pasajes.push(pasaje);
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
