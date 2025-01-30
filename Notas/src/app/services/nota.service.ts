import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  url = 'http://localhost:4000/api/nota/';
  constructor(private http:HttpClient) { }

  getNotas():Observable<any>{
    return this.http.get(this.url);
  }
//para eliminar la nota
  eliminarNota(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  //para guardar las notas
  guardarNota(nota:Nota):Observable<any>{
    return this.http.post(this.url,nota);
  }

  obtenerNota(id:string):Observable<any>{
    return this.http.get(this.url+id);
  }

  editarNota(id:string,nota:Nota):Observable<any>{
    return this.http.put(this.url+id,nota);
  }
}
