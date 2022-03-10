import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from 'src/app/clientes/clientes.component'
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';
import { ProdutosDetalhesComponent } from './produtos/produtos-detalhes/produtos-detalhes/produtos-detalhes.component';

import { HomeComponent } from './home/home.component'
import { ClienteService } from './service/clienteservice';

const clienteRoutes: Routes =[
  {
      path : 'cliente',
      component: ClientesComponent
  },
  {
      path : 'clientesdetalhes',
      component: ClientesDetalheComponent
  },
  {
      path : 'clientessetalhes/:id',
      component: ClientesDetalheComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProdutosComponent,
    ProdutosDetalhesComponent,
    ClientesComponent,
    ClientesDetalheComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule, ClientesComponent],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }