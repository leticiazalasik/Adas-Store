import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.css'
})
export class CategoriaListaComponent {

  categorias: Categoria[] = []; 

  constructor(private categoriaService: CategoriaService){}

  ngOnInit():void{
    this.carregarCategorias(); 
  }

  carregarCategorias():void{
    this.categoriaService.findAll().subscribe(data=>{
      this.categorias = data; 
    }); 
  }

  delete(id:number):void{
    this.categoriaService.delete(id).subscribe(() => {
      this.carregarCategorias();
    })
  }

}
