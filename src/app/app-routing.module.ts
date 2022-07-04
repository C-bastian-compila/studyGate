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
import { CrearForoComponent } from './componentes/crear-foro/crear-foro.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { PerfilEditarComponent } from './componentes/perfil-editar/perfil-editar.component';

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
    { path: 'perfil', component: PerfilComponent },
    { path: 'crear-foro', component: CrearForoComponent},
    { path: 'pie-pagina', component: PiePaginaComponent},
    { path: 'perfil-editar', component: PerfilEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
