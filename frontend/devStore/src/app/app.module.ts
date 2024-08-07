import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { TitleComponentComponent } from './Components/title-component/title-component.component';
import { MenuProdutoComponentComponent } from './Components/menu-produto-component/menu-produto-component.component';
import { MenuGeralComponentComponent } from './Components/menu-geral-component/menu-geral-component.component';
import { TelaResultadosComponentComponent } from './Components/tela-resultados-component/tela-resultados-component.component';
import { CategoriaListaComponent } from './Components/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './Components/servicos/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './Components/servicos/categoria-detalhe/categoria-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponentComponent,
    MenuProdutoComponentComponent,
    MenuGeralComponentComponent,
    TelaResultadosComponentComponent,
    CategoriaListaComponent,
    CategoriaFormComponent,
    CategoriaDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
