import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    title:String = 'Sistema Servicios Generales'

    constructor( private router:Router) { }

    ngOnInit(): void {
        //if(!sessionStorage.getItem("variableInicio")){
          //  this.router.navigate(["login"]);
        //}
    }

    Login(){
        this.router.navigate([""]);
        sessionStorage.removeItem("variableInicio");
    }

    Perfil(){
        this.router.navigate(["perfil"]);
        //console.log(localStorage.getItem('usua_email'))
    }
    nombreSesion = sessionStorage.getItem("variableInicio");

    UsuarioAdd(){
        this.router.navigate(["add-usuario"]);
      }
    
    

}