import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actuality } from '../Entity/actuality';

@Injectable({
  providedIn: 'root',
})
export class ActualiteService {
  constructor(private http:HttpClient){}
  url='http://localhost:8080/Ecole/Actualite'
  save(formData:FormData):Observable<Actuality>{
  return this.http.post<Actuality>(this.url+'/save',formData)
  }

  findAll():Observable<Actuality[]>{
    return this.http.get<Actuality[]>(this.url+'/findAll')
  }

  supprimer(id:number){
    return this.http.delete(this.url+'/delete?id='+id);
  }
}
