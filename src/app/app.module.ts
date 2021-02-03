import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './usuarios/login.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './Usuario/add/add.component';
import { EditarPasswordComponent } from './usuarios/editar-password/editar-password.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CorreoComponent } from './Usuario/correo/correo.component';
import { PerfilComponent } from './Usuario/perfil/perfil.component';
import { InicioEspecialistaComponent } from './inicio-especialista/inicio-especialista.component';
import { ServiceService } from './Service/service.service';
import { AgregarEspecialistaComponent } from './Especialista/agregar-especialista/agregar-especialista.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { HeaderMovilComponent } from './header/header-movil/header-movil.component';
import { FooterMovilComponent } from './footer/footer-movil/footer-movil.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaPrincipalComponent } from './mapa-principal/mapa-principal.component';
import { MapaUsuarioComponent } from './Usuario/add/mapa-usuario/mapa-usuario.component';
import { HeaderMovilWebComponent } from './header/header-movil-web/header-movil-web.component';
import { HeaderRegistroComponent } from './header/header-registro/header-registro.component';
import { ServicioEspecialidadComponent } from './inicio/servicio-especialidad/servicio-especialidad.component';
import { EspecialistaEspecialidadComponent } from './inicio/especialista-especialidad/especialista-especialidad.component';
import { InformacionEspecialistaComponent } from './inicio/informacion-especialista/informacion-especialista.component';
import { SolicitudEspecialistaComponent } from './inicio/solicitud-especialista/solicitud-especialista.component';
import { MapaInfoEspComponent } from './inicio/informacion-especialista/mapa-info-esp/mapa-info-esp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddComponent,
    EditarPasswordComponent,
    InicioComponent,
    CorreoComponent,
    PerfilComponent,
    InicioEspecialistaComponent,
    AgregarEspecialistaComponent,
    PrincipalComponent,
    HeaderMovilComponent,
    FooterMovilComponent,
    MapaComponent,
    MapaPrincipalComponent,
    MapaUsuarioComponent,
    HeaderMovilWebComponent,
    HeaderRegistroComponent,
    ServicioEspecialidadComponent,
    EspecialistaEspecialidadComponent,
    InformacionEspecialistaComponent,
    SolicitudEspecialistaComponent,
    MapaInfoEspComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0xbF2frQ-_OwurNxnIUr3_EBJdnfBTBM'
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
