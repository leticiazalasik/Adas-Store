import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListaComponent } from './Components/categoria/categoria-lista/categoria-lista.component';
import { CategoriaDetalheComponent } from './Components/servicos/categoria-detalhe/categoria-detalhe.component';
import { CategoriaFormComponent } from './Components/categoria/categoria-form/categoria-form.component';
import { ProdutoListaComponent } from './Components/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './Components/produto/produto-form/produto-form.component';
import { ProdutoDetalheComponent } from './Components/produto/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriaListaComponent}, 
  {path: 'categoria/nova', component:CategoriaFormComponent},
  {path: 'categoria/editar/:id', component:CategoriaFormComponent},
  {path: 'categoria/:id', component: CategoriaDetalheComponent},
  {path: '', redirectTo: '/categorias', pathMatch: 'full'},
//produto 
{path: 'produtos', component: ProdutoListaComponent}, 
{path: 'produto/novo', component: ProdutoFormComponent}, 
{path: 'produto/editar/:id', component:ProdutoFormComponent },
{ path: 'produto/:id', component: ProdutoDetalheComponent},
{ path: '', redirectTo: '/produtos', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
