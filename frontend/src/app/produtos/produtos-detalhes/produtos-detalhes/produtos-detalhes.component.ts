import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from 'src/app/mock/produtos.mock';
import { Produto } from 'src/app/models/ProdutoModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produtoservice';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.scss']
})
export class ProdutosDetalhesComponent implements OnInit {

  Produto : Produto[] = PRODUTOS ;

  produto! : Produto

  produtoForm!: FormGroup;
  
  constructor (private formBuilder: FormBuilder,
    private router: Router, public ProdutoService: ProdutoService,)  { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group(
      {
        nomeProd: ['', Validators.required],
        descProd: ['', Validators.required],
        valorProd: ['', Validators.required],
        }
    );

  }

  create() :void {
      
    this.ProdutoService.create(this.produto).subscribe((resposta)=>{
      this.router.navigate(['/produtos'])
      //this.ClienteService.mensagem;
    },err =>{
      for(let i = 0; i < err.error.errors.length;i++){
       // this.ClienteService.mensagem(err.error.errors[i].message)
      }
      
    });
  }

}
