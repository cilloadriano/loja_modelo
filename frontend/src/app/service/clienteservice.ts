import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../models/ClienteModel';
import { Observable } from "rxjs";



@Injectable(
  {
    providedIn: "root"
  }
)


export class ClienteService {

  public getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}/cliente`);
  }

  constructor(private httpClient: HttpClient) {

  }
  private readonly baseURL = environment["endPoint"];


  //buscas
  findById(id: Number): Observable<Cliente> {
    const url = `${this.baseURL}/cliente/${id}`
    return this.httpClient.get<Cliente>(url);
  }

  findByName(nome: String): Observable<Cliente[]> {
    const url = `${this.baseURL}/cliente/name/${nome}`
    return this.httpClient.get<Cliente[]>(url);
  }



  //Services CRUD
  create(cliente: Cliente): Observable<Cliente> {
    const url = this.baseURL + "/cliente"
    return this.httpClient.post<Cliente>(url, cliente);
  }

  delete(id: Number): Observable<void> {
    const url = `${this.baseURL}/cliente/${id}`
    return this.httpClient.delete<void>(url)
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseURL}/cliente/${cliente.id}`
    return this.httpClient.put<Cliente>(url, cliente)
  }

  //End Servicer CRUD
}