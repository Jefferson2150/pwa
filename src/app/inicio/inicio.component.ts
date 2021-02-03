import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Especialidad } from '../Clases/especialidad';
import { Servicio } from '../Clases/servicio';
import { HeaderMovilComponent } from '../header/header-movil/header-movil.component';
import { ServiceService } from '../Service/service.service';
import { Opcion_menu } from './opcion-menu';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  opcion_menu: Opcion_menu = new Opcion_menu();
  opcion_menu_navbar: Opcion_menu[]=[];
  opcion_servicios: Opcion_menu[]=[];
  opcion_menu_boton: Opcion_menu[]=[];
  servicios:Servicio[]=[];
  mostrar=true;
  mostrar_2=true;
  //serv_id_especialidad:number=0;
  @Input() serv_id_especialidad:number=0;
  especialidad:Especialidad = new Especialidad();
  nombre_usuario = sessionStorage.getItem("variableInicio");
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    //HeaderMovilComponent.arguments.Mostrar;
    //if(!sessionStorage.getItem("variableInicio")){
      //this.router.navigate([""]);
    //}
    //AGREGAR LA VARIBLE DE SESION
    this.ListarOpcionesNavbar();
    this.ListarOpcionesServicios();
    this.ListarOpcionesMenuBoton();
  }

  //Listando opciones para menu navbar por tipo=0
  ListarOpcionesNavbar():void{
    this.service.opcionesxid(JSON.parse(JSON.stringify(sessionStorage.getItem("id_usuario"))),0)
    .subscribe((data:Opcion_menu[])=>{
      this.opcion_menu_navbar = data;
    })
  }

  //Listando opciones para las opciones de servicios por tipo=2
  //ListarOpcionesServicios():void{
    //this.service.opcionesxid(JSON.parse(JSON.stringify(sessionStorage.getItem("id_usuario"))),2)
    //.subscribe((data:Opcion_menu[])=>{
      //this.opcion_servicios = data;
    //})
 // }

    //Listando opciones totales de los servicios
    ListarOpcionesServicios():void{
      this.service.list_all()
      .subscribe((data:Servicio[])=>{
        this.servicios = data;
      })
    }


  //Listando opciones para los botones de usuarios por tipo=1
  ListarOpcionesMenuBoton():void{
    this.service.opcionesxid(JSON.parse(JSON.stringify(sessionStorage.getItem("id_usuario"))),1)
    .subscribe((data:Opcion_menu[])=>{
      this.opcion_menu_boton = data;
    })
  }

  //Trayendo el servi_id del html
  listarEspecilidad(id_servicio:number){
    this.serv_id_especialidad=id_servicio;
    console.log(id_servicio)
    this.router.navigate(["servicio-especialidad"]);
  }

  ActualizarPerfil(){
    this.router.navigate(["perfil"]);
  }



}
