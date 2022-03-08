import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "src/app/models/ProdutoModel" 


@Injectable(
    {
        providedIn: "root"
    }
)

export class ProdutoService {

  getProdutos() : Observable<Produto[]>  
    {
    return this.httpClient.get<Produto[]>(`${this.baseURL}/produto`);
    }

    constructor(private httpClient: HttpClient) {

    }

    private readonly baseURL = environment["endPoint"];


    //buscas
    findById(id: Number) :Observable<Produto>{
        const url = `${this.baseURL}/produto/${id}`
        return this.httpClient.get<Produto>(url);
      } 
    
    findByName(nomeProd: String) :Observable<Produto>{
        const url = `${this.baseURL}/produto/${nomeProd}`
        return this.httpClient.get<Produto>(url);
      } 
    //SERVICES PRODUTO
    create(produto: Produto): Observable<Produto>{
      const url = this.baseURL + "produto"
      return this.httpClient.post<Produto>(url, produto);
  
    }

    delete(id: number): Observable<void> {
        const url = `${this.baseURL}/produto/${id}`
        return this.httpClient.delete<void>(url)
      }

    update(produto: Produto): Observable<void>{
        const url = `${this.baseURL}/produto/${produto.id}`
        return this.httpClient.put<void>(url,produto)
      }

      //END SERVICES PRODUTO

}