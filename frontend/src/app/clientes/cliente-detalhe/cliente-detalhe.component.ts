import { Component, OnInit } from "@angular/core";
import { CLIENTES } from "src/app/mock/clientes.mock";
import { Cliente } from "src/app/models/ClienteModel";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ClienteService } from "src/app/service/clienteservice";

@Component({
  //moduleId: module.id,
  selector: "app-clientes-detalhe",
  templateUrl: "../cliente-detalhe/cliente-detalhe.component.html",
  styleUrls: ["../cliente-detalhe/cliente-detalhe.component.scss"],
})
export class ClientesDetalheComponent implements OnInit {
  public cliente: Cliente = new Cliente(0, "","",0,0);

  constructor(
    private router: Router,
    public ClienteService: ClienteService
  ) {}

  ngOnInit(): void {
  }

  //create
  create(): void {
    console.log('dado:',this.cliente);

    this.ClienteService.create(this.cliente).subscribe(
      (data) => {
        console.log(data);
        this.getClienteLista();
        this.router.navigateByUrl('/clientes');
      },
      (error) => console.log(error)
    );

  }
  getClienteLista() {
    this.router.navigate(["/Cliente"]);
  }
}
