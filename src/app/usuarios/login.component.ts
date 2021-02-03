import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import {LoginService} from './login.service';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo:String = 'INICIAR SESION:';
  usuario:Usuario;

  constructor( public loginService: LoginService , private router:Router, private service: ServiceService) { 
      this.usuario = new Usuario();
  }
  ngOnInit(): void {
    this.loginService.abrirModal();
    
  }
  UsuarioAdd(){
    this.router.navigate(["add-usuario"]);
  }
  EditarPassword(){
    this.router.navigate(["editar-password"]);
  }

  login(usuario: Usuario):void{
    //console.log(this.usuario);
    if(usuario.usua_email== null || usuario.usua_clave== null || usuario.usua_email== "" ||usuario.usua_clave == ""){
      swal.fire('Error de sesión', 'Usuario y contraseña vacíos', 'error');
      return;
    }else{
      //let nombre = this.usuario.usua_email;
      //CODIGO DE SISTEMA REAL
      this.service.getUsuarioLogin(usuario.usua_email,usuario.usua_estado,usuario.usua_clave)
      .subscribe(data=>{
        if(data.length==0){
          swal.fire('Error de sesión', 'Usuario no encontrado', 'error');
          return;
        }else{
          for ( let datos  of data){
            let nombre = datos["usua_nombres"];
            let id = datos["usua_id"];
            let tipo_usuario = datos["usua_tipo"]
            console.log(datos["usua_tipo"]);
            sessionStorage.setItem("variableInicio",JSON.parse(JSON.stringify(nombre)));
            sessionStorage.setItem("id_usuario",JSON.parse(JSON.stringify(id)));
            if(tipo_usuario == 3){
              this.router.navigate(["inicio"]);
            }else if (tipo_usuario == 2){
              this.router.navigate(["inicio-especialista"]);
            }
          }
        }
        console.log(data);
        
      })
      
    }

    /*this.loginService.login(this.usuario).subscribe(response =>{
      console.log(response);
      this.router.navigate(["inicio"]);
      swal.fire('Login', `Hola ${response.usuario}, has iniciado sesión con éxito!`, 'success');
    })
    */
  }

  cerrarModal(){
    this.loginService.cerrarModal();
  }

}
