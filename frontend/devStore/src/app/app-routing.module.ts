import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListaComponent } from './Components/categoria/categoria-lista/categoria-lista.component';
import { CategoriaDetalheComponent } from './Components/servicos/categoria-detalhe/categoria-detalhe.component';
import { CategoriaFormComponent } from './Components/categoria/categoria-form/categoria-form.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriaListaComponent}, 
  {path: 'categoria/nova', component:CategoriaFormComponent},
  {path: 'categoria/edita:id', component:CategoriaFormComponent},
  {path: 'categoria/:id', component: CategoriaDetalheComponent},
  {path: '', redirectTo: '/categorias', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
