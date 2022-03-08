import { Component, OnInit } from '@angular/core';
import { CLIENTES } from 'src/app/mock/clientes.mock';
import { Cliente } from 'src/app/models/ClienteModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/clienteservice';
import { from, Observable, } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente! : Cliente


  constructor(private clienteService: ClienteService, private router: Router,private route: ActivatedRoute) {
    clienteService.getClientes().subscribe(
      (value: Cliente[]) => {
        console.log(value);
        this.clientes = value;
      }
      ,error =>{

      }
      ,() => {

      }
    );
  }

  ngOnInit(): void {
   this.findById()
    
   this.cliente.nomeCli = this.route.snapshot.paramMap.get('nomeCli')!
   this.findByName()
  }

  findById() : void {
    this.clienteService.findById(this.cliente.id!).subscribe((resposta)=> {
      this.cliente.nomeCli = resposta.nomeCli
      this.cliente.endCli = resposta.endCli
      this.cliente.limiteCred = resposta.limiteCred
      this.cliente.limiteParc = resposta.limiteParc
    })
  }

  findByName() : void {
    this.clienteService.findByName(this.cliente.nomeCli!).subscribe((resposta)=> {
      this.cliente.nomeCli = resposta.nomeCli
      this.cliente.endCli = resposta.endCli
      this.cliente.limiteCred = resposta.limiteCred
      this.cliente.limiteParc = resposta.limiteParc
      console.log(this.cliente)
    })
  }

  private getClientes(){
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  delete(id: number){
    this.clienteService.delete(id).subscribe( data => {
      console.log(data);
      this.getClientes();
    })
  }

  update(id: number){
    this.router.navigate(['clientes-detalhe', id]);
  }
}
