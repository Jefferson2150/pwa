import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/Clases/departamento';
import { Distrito } from 'src/app/Clases/distrito';
import { Provincia } from 'src/app/Clases/provincia';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/usuarios/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario  = new Usuario();
  departamentos:Departamento[] =[]
  provincias:Provincia[]=[];
  distritos:Distrito[]=[];
  provincia:Provincia = new Provincia();
  departamento:Departamento = new Departamento();
  distrito:Distrito = new Distrito();
  dni: String = "";
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
      this.cargarDatos();
      this.listarDeparmentos();
      if(!sessionStorage.getItem("variableInicio")){
        this.router.navigate([""]);
      }
  }

  
  cargarDatos(){
    this.service.get_userxid(Number.parseInt(sessionStorage.getItem("id_usuario")!))
    .subscribe(data=>{
      this.usuario=[data][0];
    })
  }

  Editar(){
    this.service.update_user(this.usuario)
    .subscribe(data=>{
      this.usuario=[data][0];
      swal.fire('Modificación', 'Usuario modificado correctamente', 'info');
      this.router.navigate([""]);
    })
  }

  listarDeparmentos(){
    this.service.listadoDepartamento()
    .subscribe((data:Departamento[])=>{
      this.departamentos = data;
    });
    //this.listarProvincias();
  }


  onSelect(code:any):void{
    this.service.listadoProvincias(code)
    .subscribe((data_provincias:Provincia[])=>{
      this.provincias = data_provincias;
    });
  }

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









}
