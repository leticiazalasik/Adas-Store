import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../servicos/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.scss'
})
export class CategoriaListaComponent {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.carregarCategorias();
    
  }

  carregarCategorias(): void {
    this.categoriaService.findAll().subscribe(retorno => {
      this.categorias = retorno;
    });
  }

  delete(id: number): void {
    this.categoriaService.delete(id).subscribe(() => {
      this.carregarCategorias();
    });
  }

}