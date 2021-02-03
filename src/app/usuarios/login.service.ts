import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  modal: boolean = false;
  constructor(private http: HttpClient) { }

  abrirModal(){
    this.modal = true;
  }

  cerrarModal(){
    this.modal = false;
  }

  /*
  login(usuario:Usuario):Observable<any>{
    const urlEndpoint = 'http://localhost:8080/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders =  new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Basic' + credenciales});
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('usuario', usuario.usuario);
    params.set('password', usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders}) ;
  }*/

  
}
