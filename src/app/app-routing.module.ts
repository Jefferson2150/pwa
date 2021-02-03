import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioEspecialistaComponent } from './inicio-especialista/inicio-especialista.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { AddComponent } from './Usuario/add/add.component';
import { CorreoComponent } from './Usuario/correo/correo.component';
import { PerfilComponent } from './Usuario/perfil/perfil.component';
import { EditarPasswordComponent } from './usuarios/editar-password/editar-password.component';
import { LoginComponent } from './usuarios/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { MapaPrincipalComponent } from './mapa-principal/mapa-principal.component';
import { MapaUsuarioComponent } from './Usuario/add/mapa-usuario/mapa-usuario.component';
import { ServicioEspecialidadComponent } from './inicio/servicio-especialidad/servicio-especialidad.component';
import { EspecialistaEspecialidadComponent } from './inicio/especialista-especialidad/especialista-especialidad.component';
import { InformacionEspecialistaComponent } from './inicio/informacion-especialista/informacion-especialista.component';
import { SolicitudEspecialistaComponent } from './inicio/solicitud-especialista/solicitud-especialista.component';
import { MapaInfoEspComponent } from './inicio/informacion-especialista/mapa-info-esp/mapa-info-esp.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'add-usuario',component:AddComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'editar-password',component:EditarPasswordComponent},
  {path:'inicio',component:InicioComponent},
  {path:'correo',component:CorreoComponent},
  {path:'inicio-especialista',component:InicioEspecialistaComponent},
  {path:'',component:PrincipalComponent},
  {path:'mapa',component:MapaComponent},
  {path:'mapa-principal',component:MapaPrincipalComponent},
  {path:'mapa-usuario',component:MapaUsuarioComponent},
  {path:'servicio-especialidad',component:ServicioEspecialidadComponent},
  {path:'especialista-especialidad',component:EspecialistaEspecialidadComponent},
  {path:'informacion-especialista',component:InformacionEspecialistaComponent},
  {path:'solicitud-especialista',component:SolicitudEspecialistaComponent},
  {path:'mapa-info-esp/:id_1/:id_2',component:MapaInfoEspComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
