import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndiceComponent } from './componentes/indice/indice.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
    { path: '', component: IndiceComponent },
    { path: 'indice', component: IndiceComponent },
    { path: 'comunidad', component: ComunidadComponent },
    { path: 'encabezado', component: EncabezadoComponent },
    { path: 'foro', component: ForoComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'soporte', component: SoporteComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
