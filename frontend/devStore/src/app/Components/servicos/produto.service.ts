import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8080/produto';

  constructor(private http:HttpClient) { }

  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl); 
  }
findById(id:number): Observable<Produto>{
  return this.http.get<Produto>(`$(this.apiUrl)/${id}`); 
}
add(produto:Produto):Observable<Produto>{
  return this.http.post<Produto>(this.apiUrl, produto);
}

update(produto: Produto): Observable<Produto>{
  return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);

}

delete(id:number):Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`); 
}
  
}
