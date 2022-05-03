import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})

export class Punto2Component implements OnInit {
  // letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  opciones: Array<{ letra: string, clase: string }> = [{ letra: 'a', clase: "bg-info" }, { letra: 'b', clase: "bg-info" }, { letra: 'c', clase: "bg-info" }, { letra: 'd', clase: "bg-info" }, { letra: 'e', clase: "bg-info" }, { letra: 'f', clase: "bg-info" }, { letra: 'g', clase: "bg-info" }, { letra: 'h', clase: "bg-info" }, { letra: 'i', clase: "bg-info" }, { letra: 'j', clase: "bg-info" }, { letra: 'k', clase: "bg-info" }, { letra: 'l', clase: "bg-info" }, { letra: 'm', clase: "bg-info" }, { letra: 'n', clase: "bg-info" }, { letra: 'ñ', clase: "bg-info" }, { letra: 'o', clase: "bg-info" }, { letra: 'p', clase: "bg-info" }, { letra: 'q', clase: "bg-info" }, { letra: 'r', clase: "bg-info" }, { letra: 's', clase: "bg-info" }, { letra: 't', clase: "bg-info" }, { letra: 'u', clase: "bg-info" }, { letra: 'v', clase: "bg-info" }, { letra: 'w', clase: "bg-info" }, { letra: 'x', clase: "bg-info" }, { letra: 'y', clase: "bg-info" }, { letra: 'z', clase: "bg-info" }];
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
    this.str = '';
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
  verificarLetra(value: any,) {
    //metodo para verificar letra
    let opt = this.opciones.find(elemento => elemento == value.letra);
    let palabra = this.palabraSeleccionada.split('');
    palabra.forEach((e, i) => {
      if (e == opt!.letra) {
        this.letrasEncontradas[i] = e;
        this.mostrarPalabra();
        opt!.clase = "bg-success";
      }
    });
    //cambiar color a la letra errada
    // opt!.clase = "bg-danger";
    console.log(opt);
  }


  ngOnInit(): void {
  }

}
