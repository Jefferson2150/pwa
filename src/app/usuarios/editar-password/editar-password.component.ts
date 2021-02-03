import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from '../usuario';
import swal from 'sweetalert2';
import { HeaderMovilComponent } from 'src/app/header/header-movil/header-movil.component';

@Component({
  selector: 'app-editar-password',
  templateUrl: './editar-password.component.html',
  styleUrls: ['./editar-password.component.css']
})
export class EditarPasswordComponent implements OnInit {

  usuario: Usuario = new Usuario();
  titulo:String = '¿Olvidaste tu contraseña?';
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
    HeaderMovilComponent.arguments.Mostrar;
  }

  RecuperarPassword(){
    this.service.recover_password(this.usuario.usua_email)
      .subscribe(data=>{
          swal.fire('Mensaje', 'Email enviado correctamente', 'info');
          this.router.navigate(["login"]);
      }, err =>{
          swal.fire('Error', 'Email no identificado', 'error');
          this.usuario.usua_email = "";
        })
  }

}
