import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})

export class Punto2Component implements OnInit {
  letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  palabras: string[] = ['jaguar', 'cocodrilo', 'leon', 'gato', 'perro', 'jirafa', 'hipopotamo'];
  indice: number = 0;
  palabraSeleccionada!: string;
  intentos: number = 5;
  errores: number = 0;
  letrasEncontradas: string[] = [];
  str: string = '';
  constructor() {
    //categoria animales
    this.seleccionarPalabra();
    this.mostrarPalabra();
  }

  iniciar() {

  }
  seleccionarPalabra() {
    let total_palabras = this.palabras.length;
    this.indice = (Math.random() * (total_palabras - 0) + 0);
    this.indice = Math.floor(this.indice);
    this.palabraSeleccionada = this.palabras[this.indice];

  }
  mostrarPalabra() {

    let letras = this.palabraSeleccionada.split('');
    letras.forEach((l, i) => {

      if (this.letrasEncontradas.includes(l)) {
        this.str += `${l}`;
      }
      else {
        this.letrasEncontradas[i] = '_';
        this.str += `?`
      }
    });

  }
  ngOnInit(): void {
  }

}
