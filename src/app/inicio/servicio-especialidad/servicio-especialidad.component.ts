import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/Clases/especialidad';
import { Servicio } from 'src/app/Clases/servicio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-servicio-especialidad',
  templateUrl: './servicio-especialidad.component.html',
  styleUrls: ['./servicio-especialidad.component.css']
})
export class ServicioEspecialidadComponent implements OnInit {

  servicio:Servicio= new Servicio();
  especialidad:Especialidad = new Especialidad();
  especialidades:Especialidad[]=[];
  nombre_usuario = sessionStorage.getItem("variableInicio");
  constructor(private router:Router, private service:ServiceService, private activatedRouter: ActivatedRoute) { }
  

  ngOnInit(): void {
    //Treaer el id de servicio por get para listar las especialidades
    //if(!sessionStorage.getItem("variableInicio")){
      //this.router.navigate([""]);
    //}
    this.activatedRouter.paramMap.subscribe(params=>{
      let id = Number(params.get('serv_id'));
      this.service.listxservicio(id).subscribe(especialidad=>{
          this.especialidades = especialidad;
        })
    })
  }

}
