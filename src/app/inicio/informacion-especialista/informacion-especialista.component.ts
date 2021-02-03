import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/Clases/departamento';
import { Distrito } from 'src/app/Clases/distrito';
import { Provincia } from 'src/app/Clases/provincia';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/usuarios/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-informacion-especialista',
  templateUrl: './informacion-especialista.component.html',
  styleUrls: ['./informacion-especialista.component.css']
})
export class InformacionEspecialistaComponent implements OnInit {

  usuario: Usuario  = new Usuario();
  especialistas:Usuario[] =[];
  departamentos:Departamento[] =[]
  provincias:Provincia[]=[];
  distritos:Distrito[]=[];
  provincia:Provincia = new Provincia();
  departamento:Departamento = new Departamento();
  distrito:Distrito = new Distrito();
  dni: String = "";
  nombre_usuario = sessionStorage.getItem("variableInicio");
  constructor(private router:Router, private service:ServiceService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
 
    this.listarDeparmentos();
    this.activatedRouter.paramMap.subscribe(params=>{
      let id = Number(params.get('user_id'));
      this.service.get_userxid(id).subscribe(especialista=>{
          this.usuario = especialista;
        })
    })
  }
  
  //Listando las direcciones del especialista, dirección, latitud y longitud
  listarDireccion(){
    
  }

  Editar(){
    this.service.update_user(this.usuario)
    .subscribe(data=>{
      this.usuario=[data][0];
      swal.fire('Modificación', 'Usuario modificado correctamente', 'info');
      this.router.navigate([""]);
    })
  }

  //Listando los departamentos
  listarDeparmentos(){
    this.service.listadoDepartamento()
    .subscribe((data:Departamento[])=>{
      this.departamentos = data;
    });
    //this.listarProvincias();
  }


  //Listando las provincias por departamento
  onSelect(code:any):void{
    this.service.listadoProvincias(code)
    .subscribe((data_provincias:Provincia[])=>{
      this.provincias = data_provincias;
    });
  }

  //Listando los distritos por provincia
  onSelectDistritos(prov_id:any):void{
    this.service.listadoDistritos(prov_id)
    .subscribe((data_distritos:Distrito[])=>{
      this.distritos = data_distritos;
    });
  }

    //Abriendo el mapa con la direccion del usuario
    MapaUsuario(){
      this.router.navigate(["mapa-usuario"]) ;
    }

    //Abriendo intrefaz para envio de solicitud
    EnviarSolicitud(){
      this.router.navigate(["solicitud-especialista"]);
    }

}
