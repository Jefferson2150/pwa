import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/usuarios/login.service';

@Component({
  selector: 'app-header-movil-web',
  templateUrl: './header-movil-web.component.html',
  styleUrls: ['./header-movil-web.component.css']
})
export class HeaderMovilWebComponent implements OnInit {

  constructor(private router:Router, private loginService:LoginService) { }

  habilitarBoton: boolean = true;
  habilitarBotonIngresa: boolean = true;
  ngOnInit(): void {
  }

  Mostrar(){
    if(this.router.navigate(["add-usuario"])){
      this.habilitarBoton = false;
      this.habilitarBotonIngresa = false;
    }else{
      this.habilitarBoton = true;
      this.habilitarBotonIngresa = true;
    }
}

  UsuarioAdd(){
    this.router.navigate(["add-usuario"]);
    this.Mostrar;

  }

  abrirModal(){
    this.loginService.abrirModal();
    this.router.navigate(["login"])
  }

}
