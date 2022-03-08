import { Component, OnInit } from '@angular/core';
import { CLIENTES } from 'src/app/mock/clientes.mock';
import { Cliente } from 'src/app/models/ClienteModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/clienteservice';


@Component({
  //moduleId: module.id,
  selector: 'app-clientes-detalhe',
  templateUrl: '../cliente-detalhe/cliente-detalhe.component.html',
  styleUrls: ['../cliente-detalhe/cliente-detalhe.component.scss']
})

export class ClientesDetalheComponent implements OnInit {

  cliente!: Cliente;

  clientes: Cliente = new Cliente(0,'','',0,0);
  
  clienteForm!: FormGroup;

  

constructor(private formBuilder: FormBuilder,
  private router: Router, public ClienteService: ClienteService,) { }

ngOnInit(): void {
  this.clienteForm = this.formBuilder.group(
    {
      nomeCli: ['', Validators.required],
      endCli: ['', Validators.required],
      limiteCred: ['', Validators.required],
      limiteParc: ['', Validators.required]
    }
  );
}

//create
create() :void {
      
  this.ClienteService.create(this.cliente).subscribe((data)=>{
    console.log(data)
    this.getClienteLista();
  },error => console.log(error));
}
    getClienteLista()
    {
      this.router.navigate(['/Cliente']); 
    }
}