import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { CategoriaService } from '../../servicos/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.scss'
})
export class CategoriaFormComponent {

  categoria: Categoria = {
    id: 0,
    nome: '',
    status: false
  };

  isEdicao: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id != 0) {
      this.isEdicao = true;
      this.categoriaService.findById(id).subscribe(retorno => {
        this.categoria = retorno;
      });
    }
  }

  salvar(): void {
    console.log(this.categoria)
    if (this.isEdicao) {
      this.categoriaService.update(this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
      });
    } else {
      this.categoriaService.add(this.categoria).subscribe(() => {
        this.router.navigate(['/categorias']);
      });
    }
  }

}