import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { PaginaProtegiadaComponent } from './pagina-protegiada/pagina-protegiada.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "primeira-pagina", component: PrimeiraPaginaComponent },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: 'pagina-protegida', component: PaginaProtegiadaComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
