import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Marcador } from 'src/app/marcador-ubicacion/marcador';
import { ServiceService } from 'src/app/Service/service.service';
import { map } from 'rxjs/operators';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-mapa-usuario',
  templateUrl: './mapa-usuario.component.html',
  styleUrls: ['./mapa-usuario.component.css']
})
export class MapaUsuarioComponent implements OnInit {

  marcadores: Marcador[] = [];
  marcador:Marcador = new Marcador(0,0);
  lat = Number(sessionStorage.getItem("latAddUsuario"));
  lng = Number(sessionStorage.getItem("longddUsuario"));
  descripcion = JSON.parse(JSON.stringify(sessionStorage.getItem("direccionAddUsuario")));
  nuevaDescripcion :any="";
  constructor(private service:ServiceService,private router:Router) {
    
    const nuevoMarcador = new Marcador(Number(sessionStorage.getItem("latAddUsuario")),Number(sessionStorage.getItem("longddUsuario")));
    this.marcadores.push(nuevoMarcador);
    //this.service.listarUbicacionActualEditar()
    console.log(Number(sessionStorage.getItem("latAddUsuario")));
   }

  ngOnInit(): void {
   // if(!sessionStorage.getItem("variableInicio")){
     // this.router.navigate([""]);
    //}
    //if(localStorage.getItem('marcadores')){
      //this.marcadores = JSON.parse(sessionStorage.getItem('marcadores')!);
    //}
  }



  agregarMarcador(evento:any){
    this.borrarMarcador(0);
    //this.descripcion=JSON.parse(JSON.stringify(sessionStorage.getItem("direccionAddUsuario")));
    const coords: {lat:number,lng:number} = evento.coords;
    const nuevoMarcador = new Marcador( coords.lat,coords.lng);
    this.marcadores.push(nuevoMarcador);

    sessionStorage.setItem("latAddUsuario",JSON.parse(JSON.stringify(coords.lat)));
    sessionStorage.setItem("longddUsuario",JSON.parse(JSON.stringify(coords.lng)));
    //sessionStorage.setItem("direccionAddUsuario",JSON.parse(JSON.stringify(sessionStorage.getItem("direccionAddUsuario"))));
    
    //sessionStorage.setItem("direccionAddUsuario",this.descripcion);
    //this.descripcion=JSON.parse(JSON.stringify(sessionStorage.getItem("direccionAddUsuario")));
    this.service.listarUbicacionActualEditar();
    this.descripcion = JSON.parse(JSON.stringify(sessionStorage.getItem("direccionAddUsuario")));
    this.guardarStorage();
    
    //console.log(evento)
  }

  borrarMarcador(i:number){
    //console.log(i);
    this.marcadores.splice(i,1);
    this.guardarStorage();
  }

  guardarStorage(){
    sessionStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  //El usuario edita su ubicación para el registro en BD 
  guardarNuevaUbicacion(){
    this.router.navigate(["add-usuario"]);
  }

}
