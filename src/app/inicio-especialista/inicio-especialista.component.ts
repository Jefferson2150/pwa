import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMovilComponent } from '../header/header-movil/header-movil.component';
import { Opcion_menu } from '../inicio/opcion-menu';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-inicio-especialista',
  templateUrl: './inicio-especialista.component.html',
  styleUrls: ['./inicio-especialista.component.css']
})
export class InicioEspecialistaComponent implements OnInit {

  opcion_menu: Opcion_menu = new Opcion_menu();
  opcion_menu_navbar: Opcion_menu[]=[];
  opcion_servicios: Opcion_menu[]=[];
  opcion_menu_boton: Opcion_menu[]=[];
  mostrar=true;
  nombre_usuario = sessionStorage.getItem("variableInicio");
  constructor(private service: ServiceService,private router:Router) { }

  ngOnInit(): void {
    //if(!sessionStorage.getItem("variableInicio")){
      //this.router.navigate([""]);
    //}
    //HeaderMovilComponent.arguments.Mostrar;
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
  ListarOpcionesServicios():void{
    this.service.opcionesxid(JSON.parse(JSON.stringify(sessionStorage.getItem("id_usuario"))),2)
    .subscribe((data:Opcion_menu[])=>{
      this.opcion_servicios = data;
    })
  }


  //Listando opciones para los botones de usuarios por tipo=1
  ListarOpcionesMenuBoton():void{
    this.service.opcionesxid(JSON.parse(JSON.stringify(sessionStorage.getItem("id_usuario"))),1)
    .subscribe((data:Opcion_menu[])=>{
      this.opcion_menu_boton = data;
    })
  }


}
