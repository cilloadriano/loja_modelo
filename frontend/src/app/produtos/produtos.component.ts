import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from 'src/app/mock/produtos.mock';
import { Produto } from 'src/app/models/ProdutoModel';
import { ProdutoService } from '../service/produtoservice';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, } from 'rxjs';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos : Produto[] =  [];
  produto! : Produto
  

  constructor(private service: ProdutoService, private router: Router,private route: ActivatedRoute) { 
  service.getProdutos().subscribe(
    (value: Produto[]) => {
      console.log(value);
      this.produtos = value;
    }
    ,error =>{

    }
    ,() => {

    }
  );
}


  ngOnInit(): void {
   // this.produto.id = this.route.snapshot.paramMap.get('id')!
    //this.findById()

    //this.produto.nomeProd = this.route.snapshot.paramMap.get('nomeProd')!
    //this.findByName()
  }
//Buscas
  findById() : void {
    this.service.findById(this.produto.id!).subscribe((resposta)=> {
      this.produto.nomeProd = resposta.nomeProd
      this.produto.descProd = resposta.descProd
      this.produto.valorProd = resposta.valorProd
      
    })
  }
  findByName() : void {
    this.service.findByName(this.produto.nomeProd!).subscribe((resposta)=> {
      this.produto.nomeProd = resposta.nomeProd
      this.produto.descProd = resposta.descProd
      this.produto.valorProd = resposta.valorProd
      
    })
  }


//End Buscas

  private getProdutos(){
    this.service.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  delete(id: number){
    this.service.delete(id).subscribe( data => {
      console.log(data);
      this.getProdutos();
    })
  }

  update(id: number){
    this.router.navigate(['produtos-detalhes', id]);
  }
}