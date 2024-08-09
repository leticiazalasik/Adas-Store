import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/compartilhados/header/header.component';

import { MenuGeralComponentComponent } from './Components/compartilhados/menu-geral-component/menu-geral-component.component';
import { CategoriaListaComponent } from './Components/categoria/categoria-lista/categoria-lista.component';
import { CategoriaDetalheComponent } from './Components/servicos/categoria-detalhe/categoria-detalhe.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriaFormComponent } from './Components/categoria/categoria-form/categoria-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuGeralComponentComponent,
    CategoriaListaComponent,
    CategoriaDetalheComponent,
    CategoriaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
