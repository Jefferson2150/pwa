import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/Clases/especialidad';
import { Servicio } from 'src/app/Clases/servicio';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-especialista-especialidad',
  templateUrl: './especialista-especialidad.component.html',
  styleUrls: ['./especialista-especialidad.component.css']
})
export class EspecialistaEspecialidadComponent implements OnInit {

  especialistas:Usuario[]=[];
  nombre_usuario = sessionStorage.getItem("variableInicio");
  constructor(private router:Router, private service:ServiceService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    //Treaer el id de especialidad por get para listar los especialista por especialidad
    //if(!sessionStorage.getItem("variableInicio")){
      //this.router.navigate([""]);
    //}
    this.activatedRouter.paramMap.subscribe(params=>{
      let id = Number(params.get('espe_id'));
      this.service.especialista(id).subscribe(especialidad=>{
          this.especialistas = especialidad;
        })
    })
  }

}
