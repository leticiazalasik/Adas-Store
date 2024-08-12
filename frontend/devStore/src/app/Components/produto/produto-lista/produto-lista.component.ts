import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})
export class ProdutoListaComponent {

  produtos: Produto[]=[]; 
  
  constructor(private produtoService: ProdutoService){}; 

  ngOnInit():void{
    this.carregarProdutos();
  }

  carregarProdutos():void{
    this.produtoService.findAll().subscribe(data=> {
      this.produtos=data; 
    }); 
  }

  delete(id:number):void{
    this.produtoService.delete(id).subscribe(()=>{
      this.carregarProdutos(); 
    })
  }
}
