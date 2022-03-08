import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../models/ClienteModel';
import { CLIENTES } from '../mock/clientes.mock';
import { Observable } from "rxjs";



@Injectable(
    {
        providedIn: "root"
    }
)


export class ClienteService {

    public getClientes() : Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}/cliente`);
    }
    
    constructor(private httpClient: HttpClient) {

    }
    private readonly baseURL = environment["endPoint"];


    //buscas
    findById(id: Number) :Observable<Cliente>{
      const url = `${this.baseURL}/cliente/${id}`
      return this.httpClient.get<Cliente>(url);
    } 

    findByName(nomeCli: String) :Observable<Cliente>{
      const url = `${this.baseURL}/cliente/${nomeCli}`
      return this.httpClient.get<Cliente>(url);
    } 

    //Services CRUD
    create(cliente: Cliente): Observable<Cliente>{
      const url = this.baseURL + "/cliente"
      return this.httpClient.post<Cliente>(url, cliente);
    }

    delete(id: Number): Observable<void> {
      const url = `${this.baseURL}/cliente/${id}`
      return this.httpClient.delete<void>(url)
    }

    update(id: number, cliente: Cliente): Observable<void>{
      const url = `${this.baseURL}/cliente/${cliente}`
      return this.httpClient.put<void>(url,cliente)
    }

    //End Servicer CRUD
}