import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
//se lo suele mostrar como controlador de la vista
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //definiendo entidad Usuario
  usuario!: Usuario
  tituloForm!: string;
  //entidades mandadas hacia la vista
  //de manera unidireccional
  constructor() {
    this.tituloForm = "titulo definido por el usuario";
    this.usuario = new Usuario();
    // this.usuario.username = "nanop";
  }
  ngOnInit(): void {
  }
  createUser(): void {
    console.log(this.usuario);
  }
}

