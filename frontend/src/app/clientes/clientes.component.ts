import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/ClienteModel';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/clienteservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente(0, '', '', 0, 0)
  campoProcura: FormControl = new FormControl('')


  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {
    clienteService.getClientes().subscribe(
      (value: Cliente[]) => {
        console.log(value);
        this.clientes = value;
      }
      , error => {

      }
      , () => {

      }
    );
  }

  ngOnInit(): void {
  }

  findById(): void {
    if (this.cliente && this.cliente.id) {
      this.clienteService.findById(this.cliente.id!).subscribe((resposta) => {
        this.cliente.nomeCli = resposta.nomeCli
        this.cliente.endCli = resposta.endCli
        this.cliente.limiteCred = resposta.limiteCred
        this.cliente.limiteParc = resposta.limiteParc
      })
    }
  }

  findByName(): void {

    this.clienteService.findByName(this.campoProcura.value).subscribe((resposta) => {
      this.clientes = resposta
      console.log(this.cliente)
    })
  }


  private getClientes() {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  delete(id: number) {
    this.clienteService.delete(id).subscribe(data => {
      this.getClientes();
    })
  }

  update(cliente: Cliente) {
    this.router.navigateByUrl('/clientedetalhes/' + cliente.id)
  }
}
