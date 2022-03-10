import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/ProdutoModel';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/service/produtoservice';

@Component({
  
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.scss']
})
export class ProdutosDetalhesComponent implements OnInit {
  public produto: Produto = new Produto(0, "", "", 0);

  nomeproduto: string = ""
  descproduto: string = ""
  valorproduto: number = 0
  formgroup: any


  constructor(
    private router: Router,
    public ProdutoService: ProdutoService,
    private _cdr: ChangeDetectorRef,
    private fB: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formgroup = this.fB.group({
      nomeproduto: new FormControl(),
      descproduto: new FormControl(),
      valorproduto: new FormControl(),
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      if (data.has('id')) {
        let id = <any>data.get('id') || undefined
        this.verificarIdProduto(id)
        console.log(data);
      }
    })
  }


  //verificar Produto Existente
  verificarIdProduto(id?: number) {
    if (id) {
      this.ProdutoService.findById(id).subscribe(valor => {
        console.log(valor)
        this.produto.id = valor.id
        this.formgroup.setValue({
          nomeproduto: valor.nomeProd,
          descproduto: valor.descProd,
          valorproduto: valor.valorProd,
        })
        this._cdr.detectChanges()
      })
    }
  }

  //create
  create(): void {
    if (this.produto.id) {
      this.produto.nomeProd = this.formgroup.get('nomeproduto').value
      this.produto.descProd = this.formgroup.get('descproduto').value
      this.produto.valorProd = this.formgroup.get('valorproduto').value
      this.ProdutoService.update(this.produto).subscribe(() => { this.router.navigateByUrl('/produtos') })
    }
    else {
      console.log('dado:', this.produto);
      this.ProdutoService.create(this.produto).subscribe(
        (data) => {
          console.log(data);
          this.getProdutoLista();
          this.router.navigateByUrl('/produtos');
        },
        (error) => console.log(error)
      );

    }
  }

  getProdutoLista() {
    this.router.navigate(["/Produtos"]);
  }
}