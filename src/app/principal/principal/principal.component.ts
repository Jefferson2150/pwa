import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router:Router, private service: ServiceService) {
    this.usuario = new Usuario();
   }

   titulo:String = 'Bienvenido a:';
   usuario:Usuario;

  ngOnInit(): void {
  }

  UsuarioAdd(){
    this.router.navigate(["add-usuario"]);
  }
  EditarPassword(){
    this.router.navigate(["editar-password"]);
  }

  InicioSesion(){
    this.router.navigate(["login"]);
  }

}
