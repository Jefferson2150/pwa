import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-especialista',
  templateUrl: './solicitud-especialista.component.html',
  styleUrls: ['./solicitud-especialista.component.css']
})
export class SolicitudEspecialistaComponent implements OnInit {

  nombre_usuario = sessionStorage.getItem("variableInicio");
  constructor() { }

  ngOnInit(): void {
  }

}
