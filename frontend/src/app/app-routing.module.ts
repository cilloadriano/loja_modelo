import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ClientesDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutosDetalhesComponent } from './produtos/produtos-detalhes/produtos-detalhes/produtos-detalhes.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { 
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "clientes/:id", component: ClientesDetalheComponent },
  { path: "clientedetalhes", component: ClientesDetalheComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "produtosdetalhes", component: ProdutosDetalhesComponent },
  { path : "produtos/:id", component: ProdutosDetalhesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
