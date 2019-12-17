import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { ForoComponent } from './foro/foro.component';
import { BuscadorComponent } from './buscador/buscador.component';
<<<<<<< HEAD
import { LoginGuard } from './login.guard';
=======
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
>>>>>>> c41b72be14fd2bbf0433f7bc20a43d42e71a4fbe



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },

  { path: 'login', component: LoginComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'quienessomos', component: NosotrosComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro', component: RegistroComponent },
<<<<<<< HEAD
  { path: 'foro', component: ForoComponent, /* canActivate: [LoginGuard]  */ },
  { path: 'buscador', component: BuscadorComponent }
=======
  { path: 'foro', component: ForoComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: '**', component: ErrorcomponentComponent }

>>>>>>> c41b72be14fd2bbf0433f7bc20a43d42e71a4fbe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
