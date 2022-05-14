import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes!: Array<any>;
  constructor() {
    //inicializamos el array y le asignamos unos datos para poder consultar.
    this.pasajes = new Array<Pasaje>();
    this.pasajes = [
      {
        idPasaje: 1,
        dniPasajero: 3884149299,
        precioPasaje: 3886839322,
        categoriaPasajero: "Menor",
        fecha: "2014-01-01T23:28:56.782Z",
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
