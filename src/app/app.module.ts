import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule  } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {HttpClientModule} from '@angular/common/http';

//Import sin usar, se pueden usar a futuro
// import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { IndiceComponent } from './componentes/indice/indice.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CrearForoComponent } from './componentes/crear-foro/crear-foro.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { PerfilEditarComponent } from './componentes/perfil-editar/perfil-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    ComunidadComponent,
    EncabezadoComponent,
    ForoComponent,
    IndiceComponent,
    IniciarSesionComponent,
    InicioComponent,
    NavbarComponent,
    RegistroComponent,
    SoporteComponent,
    PerfilComponent,
    PerfilEditarComponent,
    CrearForoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    NgbModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
