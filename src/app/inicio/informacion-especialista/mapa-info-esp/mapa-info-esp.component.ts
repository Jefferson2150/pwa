import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../Service/service.service';
import { Marcador } from '../../../marcador-ubicacion/marcador';

@Component({
  selector: 'app-mapa-info-esp',
  templateUrl: './mapa-info-esp.component.html',
  styleUrls: ['./mapa-info-esp.component.css']
})
export class MapaInfoEspComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat = -6.768742163968878;
  lng = -79.85478377990114;
  constructor(private router:Router, private service:ServiceService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarDireccion();
  }

  //Listando las direcciones del especialista, dirección, latitud y longitud
   listarDireccion(){
    this.activatedRouter.paramMap.subscribe(params=>{
      let id_longitud = Number(params.get('id_1'));
      let id_latitud = Number(params.get('id_2'));
      const nuevoMarcador = new Marcador(-6.768742163968878,-79.85478377990114);
      this.marcadores.push(nuevoMarcador);
    })
  }

}
