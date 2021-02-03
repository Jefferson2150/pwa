import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../../Clases/provincia';
import { HeaderMovilComponent } from 'src/app/header/header-movil/header-movil.component';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/usuarios/usuario';
import swal from 'sweetalert2';
import { Departamento } from '../../Clases/departamento';
import { Distrito } from '../../Clases/distrito';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ServiceService]
})
export class AddComponent implements OnInit {

  usuario:Usuario = new Usuario();
  departamentos:Departamento[] =[]
  provincias:Provincia[]=[];
  distritos:Distrito[]=[];
  provincia:Provincia = new Provincia();
  departamento:Departamento = new Departamento();
  distrito:Distrito = new Distrito();
  constructor(private router:Router, private service: ServiceService) { 
    
  }

  ngOnInit(): void {
  //////// HeaderMovilComponent.arguments.Mostrar;
  //Listar todos los departamentos en el combox:
  this.listarDeparmentos();
  //Traer mi ubicacion actual para direecion y mapa:
  this.service.listarUbicacionActual();
  //cargar la direccion de usuario desde la ubicacion:
  this.usuario.usua_direccion=JSON.parse(JSON.stringify(sessionStorage.getItem("direccionAddUsuario")));
  this.usuario.usua_latitud=Number(sessionStorage.getItem("latAddUsuario"));
  this.usuario.usua_longitud=Number(sessionStorage.getItem("longddUsuario"));
  //this.usuario.usua_ubigeo="010101"
  }

  GuardarUsuario(usuario:Usuario){
    this.service.add_usuario(usuario)
    .subscribe(data=>{
      swal.fire('Registro', 'Usuario registrado correctamente', 'info');
      this.router.navigate([""]);
    })
  }

  validarDni(){
    this.service.verificar_dni(this.usuario.usua_dni)
    .subscribe(data=>{
     }, err =>{
          this.usuario.usua_dni = "";
        })
  }

  validarEmail(){
    this.service.verificar_email(this.usuario.usua_email)
    .subscribe(data=>{
     }, err =>{
          this.usuario.usua_email = "";
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
      this.usuario.usua_ubigeo=this.distrito.dist_codigo
    });
  }

  //Abriendo el mapa con la direccion del usuario
  MapaUsuario(){
    this.router.navigate(["mapa-usuario"]) ;
  }
}
