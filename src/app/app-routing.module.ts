import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MapaComponent } from './mapa/mapa.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },

  { path: 'login', component: LoginComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'quienessomos', component: NosotrosComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
