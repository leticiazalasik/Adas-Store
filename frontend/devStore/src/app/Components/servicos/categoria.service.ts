import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/categoria';

  findAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiUrl); 
  }

  findById(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`); 
  }

  add(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.apiUrl,categoria);
  }

  update(categoria:Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.apiUrl}/${categoria.id}`, categoria);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
}
