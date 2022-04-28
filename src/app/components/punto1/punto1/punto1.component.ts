import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia/noticia';
@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  noticias!: Array<Noticia>;
  indice: number = 0;
  noticia!: Noticia;
  constructor() {
    this.noticias = new Array<Noticia>();
    this.noticias = [{ codigo: 1, nombre: "Noticia 1", detalle: "Noticia Gobernador", img: "noticia1.jpg" },
    { codigo: 1, nombre: "Noticia 2", detalle: "Noticia Denuncia", img: "noticia2.jpg" },
    { codigo: 1, nombre: "Noticia 3", detalle: "Noticia Messi", img: "noticia3.jpg" }
    ];
    this.iniciar();
  }



  iniciar() {
    if (this.indice < this.noticias.length) {
      this.noticia = this.noticias[this.indice];
    }
  }

  siguiente() {
    this.indice = this.indice + 1;
    if (this.indice < this.noticias.length) {
      this.noticia = this.noticias[this.indice];
    }
  }


  anterior() {
    this.indice = this.indice - 1;
    if (this.indice < this.noticias.length) {
      this.noticia = this.noticias[this.indice];
    }

  }



  ngOnInit(): void {
  }

}
