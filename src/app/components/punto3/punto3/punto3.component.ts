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
  //declarando variables
  pasaje!: Pasaje;
  precioTotal!: number;
  pasajes!: Array<Pasaje>;
  action: string = "new";
  //configurando tabla
  dtOptions: object = {
    data: this.pasajes,
    language: {
      search: "Buscar",
      zeroRecords: "No hay pasajes cargados",
      info: "Mostrando _START_ a _END_ de _TOTAL_ pasajes",
      paginate: {
        first: "Primero",
        last: "Ultimo",
        next: "Siguiente",
        previous: "Anterior"
      },
      lengthMenu: "Mostrar _MENU_ pasajes"
    },
    lenghtChange: true,
    pageLength: 5,
    lengthMenu: [5, 10, 15, 20, 25],
    stateSave: true,
  }

  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasaje = new Pasaje();
    this.precioTotal = 0;
    this.pasajes = new Array<Pasaje>();
    this.pasajes = this.pasajeService.getPasajes();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == -1) {
        this.action = "new";
      } else {
        this.action = "edit";
        this.pasaje = this.pasajeService.readPasaje(params['id']);
        this.precioTotal = this.pasaje.precioPasaje;
      }
    })
  }
  //Metodos carga de pasajes
  public limpiarPasaje() {
    this.pasaje = new Pasaje();
  }

  public cancelarForm() {
    this.limpiarPasaje();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/punto3', -1]);
  }

  public guardarPasaje() {
    if (this.action == "new") {
      this.pasaje.fechaCompra = new Date();
      this.pasaje.precioPasaje = this.calcularPrecioTotal();
      this.pasajeService.createPasaje(this.pasaje);
    } else {
      this.pasaje.precioPasaje = this.calcularPrecioTotal();
      this.pasajeService.updatePasaje(this.pasaje);
    }
    this.cancelarForm()
  }

  calcularPrecioTotal(): number {
    let porcentaje = 0
    if (this.pasaje.categoriaPasajero == "Menor") porcentaje = 0.25;
    else if (this.pasaje.categoriaPasajero == "Jubilado") porcentaje = 0.5;
    return this.pasaje.precioPasaje - (this.pasaje.precioPasaje * porcentaje);
  }

  public cambiarValor() {
    this.precioTotal = this.calcularPrecioTotal();
  }

  //metodos tabla
  editarPasaje(pasaje: Pasaje) {
    this.router.navigate(['/punto3', pasaje.idPasaje]);
  }
  eliminarPasaje(pasaje: Pasaje) {
    this.pasajeService.deletePasaje(pasaje.idPasaje)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  desactivarPasaje(id: number): boolean {
    var disabled = false;
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == id) disabled = true;
      else disabled = false;
    })
    return disabled;
  }

  calcularMenores() {
    let cantidad = 0;
    let total = 0;
    this.pasajes.forEach(pasaje => {
      if (pasaje.categoriaPasajero === 'Menor') {
        cantidad++;
        total += pasaje.precioPasaje;
      }
    })
    return { cantidad, total };
  }

  calcularAdultos() {
    let cantidad = 0;
    let total = 0;
    this.pasajes.forEach(pasaje => {
      if (pasaje.categoriaPasajero === 'Adulto') {
        cantidad++;
        total += pasaje.precioPasaje;
      }
    })
    return { cantidad, total };
  }
  calcularJubilados() {
    let cantidad = 0;
    let total = 0;
    this.pasajes.forEach(pasaje => {
      if (pasaje.categoriaPasajero === 'Jubilado') {
        cantidad++;
        total += pasaje.precioPasaje;
      }
    })
    return { cantidad, total };
  }
}
