import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra/palabra';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})

export class Punto2Component implements OnInit {
  palabras!: Array<Palabra>
  letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  indice: number = 0;
  palabra!: Palabra;
  constructor() {
    //categoria animales
    this.palabras = [{ palabra: ['j', 'a', 'g', 'u', 'a', 'r'], puntos: 10 }]
    this.iniciar();
  }

  iniciar() {
    if (this.indice < this.palabras.length) {
      this.palabra = this.palabras[this.indice];
    }
    // this.palabra.palabra.forEach(element => {
    //   console.log(element);
    // });
  }
  ngOnInit(): void {
  }

}
