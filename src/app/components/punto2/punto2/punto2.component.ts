import { Component, OnInit } from '@angular/core';
import { Palo } from 'src/app/models/palo/palo';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})

export class Punto2Component implements OnInit {
  opciones: Array<{ letra: string, clase: string }> = [{ letra: 'a', clase: "bg-info" }, { letra: 'b', clase: "bg-info" }, { letra: 'c', clase: "bg-info" }, { letra: 'd', clase: "bg-info" }, { letra: 'e', clase: "bg-info" }, { letra: 'f', clase: "bg-info" }, { letra: 'g', clase: "bg-info" }, { letra: 'h', clase: "bg-info" }, { letra: 'i', clase: "bg-info" }, { letra: 'j', clase: "bg-info" }, { letra: 'k', clase: "bg-info" }, { letra: 'l', clase: "bg-info" }, { letra: 'm', clase: "bg-info" }, { letra: 'n', clase: "bg-info" }, { letra: 'ñ', clase: "bg-info" }, { letra: 'o', clase: "bg-info" }, { letra: 'p', clase: "bg-info" }, { letra: 'q', clase: "bg-info" }, { letra: 'r', clase: "bg-info" }, { letra: 's', clase: "bg-info" }, { letra: 't', clase: "bg-info" }, { letra: 'u', clase: "bg-info" }, { letra: 'v', clase: "bg-info" }, { letra: 'w', clase: "bg-info" }, { letra: 'x', clase: "bg-info" }, { letra: 'y', clase: "bg-info" }, { letra: 'z', clase: "bg-info" }];
  palabras: string[] = ['jaguar', 'cocodrilo', 'leon', 'gato', 'perro', 'jirafa', 'hipopotamo', 'cangrejo', 'rata', 'paloma'];
  indice: number = 0;
  palos!: Array<Palo>;
  palabraSeleccionada!: string;
  intentos: number = 5;
  aciertos: number = 0;
  letrasEncontradas: string[] = [];
  str: string = '';
  palo!: Palo;
  indicePalo: number = 0;
  constructor() {
    //categoria animales
    this.palos = [{ img: "0.png" }, { img: "1.png" }, { img: "2.png" }, { img: "3.png" }, { img: "4.png" }, { img: "5.png" }]
    this.seleccionarPalabra();
    this.mostrarPalabra();
    this.iniciar();
  }
  recargar() {
    window.location.reload();
  }
  iniciar() {
    if (this.indicePalo < this.palos.length) {
      this.palo = this.palos[this.indicePalo];
    }
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
    let color = false;
    palabra.forEach((e, i) => {
      if (e == opt!.letra) {
        this.letrasEncontradas[i] = e;
        this.mostrarPalabra();
        color = true;
        this.aciertos = this.aciertos + 1;
      }
    });
    if (color == false) {
      opt!.clase = "bg-danger";
      this.intentos = this.intentos - 1;

      this.indicePalo = this.indicePalo + 1;
      if (this.indicePalo < this.palos.length) {
        this.palo = this.palos[this.indicePalo];
      }


    }
    else {
      opt!.clase = "bg-success";
    }
    if (this.intentos <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Has Perdido!!!!',
        confirmButtonText: 'Ok',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await Swal.fire('Cambiando Palabra...', '', 'question');
          this.recargar();
        }
      })
    }
    else if (this.aciertos == this.palabraSeleccionada.length) {
      Swal.fire({
        icon: 'success',
        title: 'GANASTE!!!!',
        confirmButtonText: 'Ok',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await Swal.fire('Cambiando Palabra...', '', 'question');
          this.recargar();
        }
      })
    }
  }


  ngOnInit(): void {
  }

}
