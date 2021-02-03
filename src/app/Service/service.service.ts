import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Opcion_menu } from '../inicio/opcion-menu';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { Departamento } from '../Clases/departamento';
import { Provincia } from '../Clases/provincia';
import { Distrito } from '../Clases/distrito';
import { Servicio } from '../Clases/servicio';
import { Especialidad } from '../Clases/especialidad';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //Url = 'http://172.16.11.121:8081/api';
  Url = 'http://172.16.11.121:8081/api';
  private HttpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http:HttpClient) {
    
  }

  mensaje:any;


  //Url = 'http://localhost:8080/api';

  getUsuarioLogin(usua_email: String, usua_estado: number,usua_clave :String){
    return this.http.get<Usuario[]>(this.Url+"/user/get_userlogin/"+usua_email+"/"+0+"/"+usua_clave);
  }

  getDatosPerfil(usua_email: String, usua_estado: number,usua_clave :String){
    return this.http.get<Usuario[]>(this.Url+"/user/get_userlogin/"+usua_email+"/"+0+"/"+usua_clave);
  }

  add_usuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url+"/user/add_user",usuario);
  }

  get_userxid(usua_id:number){
    return this.http.get<Usuario>(this.Url+"/user/get_userxid/"+usua_id);
  }

  update_user(usuario:Usuario){
    return this.http.post<Usuario>(this.Url+"/user/update_user",usuario);
  }

  recover_password(usua_email:String){
    return this.http.get<String>(this.Url+"/user/recover_password/"+usua_email);
  }

  verificar_dni(usua_dni:String){
    return this.http.get(this.Url+"/user/verificar_dni/"+usua_dni).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  verificar_email(usua_email:String){
    return this.http.get(this.Url+"/user/verificar_email/"+usua_email).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  opcionesxid(id_usuario:number,opme_id: number){
    return this.http.get<Opcion_menu[]>(this.Url+"/opcion/opcionesxid/"+id_usuario+"/"+opme_id);
  }
  
  //ListarOpcionesUsuarios
  list_all(){
    return this.http.get<Servicio[]>(this.Url+"/servicio/list_all");
  }

  //ListarEspecialidesXServicios
  listxservicio(serv_id:number){
    return this.http.get<Especialidad[]>(this.Url+"/especialidad/listxservicio/"+serv_id);
  }

  //ListarEspecialistar por especialidad
  especialista(espe_id:number){
    return this.http.get<Usuario[]>(this.Url+"/user/especialistas/"+espe_id);
  }



  listar(){
  const lat = -6.7723514;
  const long = -79.8540947;
  const TU_LLAVE = 'AIzaSyD0xbF2frQ-_OwurNxnIUr3_EBJdnfBTBM';
  return this.http.get<{status: string, results: any[]}>(
       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`,
        {responseType: 'json'}
      ).subscribe(e => {
        if (e.status === 'OK') {
          console.log(e.results[0].formatted_address);
        }
      });
  }

  listarUbicacion(){
    let map: google.maps.Map, infoWindow: google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(pos)
          //infoWindow.setPosition(pos);
          //infoWindow.setContent("Location found.");
          //infoWindow.open(map);
          //map.setCenter(pos);
        },
        () => {
        }
      );
      
    } else {
      // Browser doesn't support Geolocation
    }
  }

  listarUbicacionActual(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(pos)
          sessionStorage.setItem("latAddUsuario",JSON.parse(JSON.stringify(position.coords.latitude)));
          sessionStorage.setItem("longddUsuario",JSON.parse(JSON.stringify(position.coords.longitude)));
          //infoWindow.setPosition(pos);
          //infoWindow.setContent("Location found.");
          //infoWindow.open(map);
          //map.setCenter(pos);
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          const TU_LLAVE = 'AIzaSyD0xbF2frQ-_OwurNxnIUr3_EBJdnfBTBM';
          return this.http.get<{status: string, results: any[]}>(
               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`,
                {responseType: 'json'}
              ).subscribe(e => {
                if (e.status === 'OK') {
                  console.log(e.results[0].formatted_address);
                  sessionStorage.setItem("direccionAddUsuario",JSON.parse(JSON.stringify(e.results[0].formatted_address)));
                }
              });
        },
        () => {
        }
      );
      
    } else {
      // Browser doesn't support Geolocation
    }
  }

  listarUbicacionActualEditar(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat:  position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(pos)
          //sessionStorage.setItem("latAddUsuario",JSON.parse(JSON.stringify(position.coords.latitude)));
          //sessionStorage.setItem("longddUsuario",JSON.parse(JSON.stringify(position.coords.longitude)));
          //infoWindow.setPosition(pos);
          //infoWindow.setContent("Location found.");
          //infoWindow.open(map);
          //map.setCenter(pos);
          const lat =  Number(sessionStorage.getItem("latAddUsuario"));
          const long =Number(sessionStorage.getItem("longddUsuario"));
          const TU_LLAVE = 'AIzaSyD0xbF2frQ-_OwurNxnIUr3_EBJdnfBTBM';
          return this.http.get<{status: string, results: any[]}>(
               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`,
                {responseType: 'json'}
              ).subscribe(e => {
                if (e.status === 'OK') {
                  console.log(e.results[0].formatted_address);
                  sessionStorage.setItem("direccionAddUsuario",JSON.parse(JSON.stringify(e.results[0].formatted_address)));
                }
              });
        },
        () => {
        }
      );
      
    } else {
      // Browser doesn't support Geolocation
    }
  }

  //Api para listar todos los departamentos
  listadoDepartamento(){
      return this.http.get<Departamento[]>(this.Url+"/departamento/list/");
    }

  //Api para listar todos los departamentos
  listadoProvincias(depa_id:any){
      return this.http.get<Provincia[]>(this.Url+"/provincia/list/"+depa_id);
    }

  //Api para listar todos los distritos
  listadoDistritos(prov_id:any){
    return this.http.get<Distrito[]>(this.Url+"/distrito/list/"+prov_id);
  }



}
