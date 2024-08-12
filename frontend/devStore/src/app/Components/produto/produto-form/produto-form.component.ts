import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../servicos/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {
produto: Produto = {
  id: 0, 
  nome: '',
  preco:0, 
  quantidade:0
}; 

isEdicao: boolean = false; 

constructor(
  private produtoService: ProdutoService, 
  private route: ActivatedRoute, 
  private router: Router
){}

ngOnInit(): void{
  const id = Number(this.route.snapshot.paramMap.get('id')); 
  if (id && id !=0){
    this.isEdicao= true; 
    this.produtoService.findById(id).subscribe(data => {
      this.produto = data; 
    }); 
  }
}

salvar(): void {
  if(this.isEdicao){
    this.produtoService.update(this.produto).subscribe(() => {
      this.router.navigate(['/produtos']); 
    }); 
  } else { 
    this.produtoService.add(this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
    })
  }
  }
}
