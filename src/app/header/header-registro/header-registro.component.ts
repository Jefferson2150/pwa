import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/usuarios/login.service';

@Component({
  selector: 'app-header-registro',
  templateUrl: './header-registro.component.html',
  styleUrls: ['./header-registro.component.css']
})
export class HeaderRegistroComponent implements OnInit {

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  UsuarioAdd(){
    this.router.navigate(["add-usuario"]);
    //this.Mostrar;

  }

  abrirModal(){
    this.loginService.abrirModal();
    this.router.navigate(["login"])
  }

}
