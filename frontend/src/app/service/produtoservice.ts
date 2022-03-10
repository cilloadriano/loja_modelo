import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Produto } from '../models/ProdutoModel';
import { Observable } from "rxjs";



@Injectable(
  {
    providedIn: "root"
  }
)


export class ProdutoService {

  public getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.baseURL}/produto`);
  }

  constructor(private httpClient: HttpClient) {

  }
  private readonly baseURL = environment["endPoint"];


  //buscas
  findById(id: Number): Observable<Produto> {
    const url = `${this.baseURL}/produto/${id}`
    return this.httpClient.get<Produto>(url);
  }

  findByName(nome: String): Observable<Produto[]> {
    const url = `${this.baseURL}/produto/name/${nome}`
    return this.httpClient.get<Produto[]>(url);
  }



  //Services CRUD
  create(produto: Produto): Observable<Produto> {
    const url = this.baseURL + "/produto"
    return this.httpClient.post<Produto>(url, produto);
  }

  delete(id: Number): Observable<void> {
    const url = `${this.baseURL}/produto/${id}`
    return this.httpClient.delete<void>(url)
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseURL}/produto/${produto.id}`
    return this.httpClient.put<Produto>(url, produto)
  }

  //End Servicer CRUD
}