import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/ProdutoModel';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produtoservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})

export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  produto: Produto = new Produto(0, '', '', 0)
  campoProcura: FormControl = new FormControl('')


  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) {
    produtoService.getProdutos().subscribe(
      (value: Produto[]) => {
        console.log(value);
        this.produtos = value;
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
    if (this.produto && this.produto.id) {
      this.produtoService.findById(this.produto.id!).subscribe((resposta) => {
        this.produto.nomeProd = resposta.nomeProd
        this.produto.descProd = resposta.descProd
        this.produto.valorProd = resposta.valorProd
        })
    }
  }

  findByName(): void {

    this.produtoService.findByName(this.campoProcura.value).subscribe((resposta) => {
      this.produtos = resposta
      console.log(this.produto)
    })
  }


  private getProdutos() {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  delete(id: number) {
    this.produtoService.delete(id).subscribe(data => {
      this.getProdutos();
    })
  }

  update(produto: Produto) {
    this.router.navigateByUrl('/produtodetalhes/' + produto.id)
  }
}
