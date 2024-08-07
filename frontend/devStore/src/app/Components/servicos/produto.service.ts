import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/produto';

  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl); 
  }

  
}
