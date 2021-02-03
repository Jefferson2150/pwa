import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { Marcador } from '../marcador-ubicacion/marcador';
import { GeocoderLocationType } from '@agm/core';
import { Position } from '@angular/compiler';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  marcadores: Marcador[] = [];
  lat = 51.678418;
  lng = 7.809007;
  
  constructor(private service:ServiceService,private router:Router) { 

    //const nuevoMarcador = new Marcador(51.678418,7.809007);
    //this.marcadores.push(nuevoMarcador);
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')!);
    }

  }

  ngOnInit(): void {
    //this.service.listar();
    this.service.listarUbicacionActual();
    //this.service.listarUbicacion();
    
    //let google:any;
    //navigator.geolocation.getCurrentPosition(function(position){
      //var geolocate = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      //console.log(geolocate);
    //});

    // Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
  }


  agregarMarcador(evento:any){
    const coords: {lat:number,lng:number} = evento.coords;
    const nuevoMarcador = new Marcador( coords.lat,coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    //console.log(evento)
  }


  borrarMarcador(i:number){
    //console.log(i);
    this.marcadores.splice(i,1);
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  


}
