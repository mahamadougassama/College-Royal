import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactEntity } from '../Entity/ContactEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http:HttpClient){}
  
  url='http://localhost:8080/Ecole/Contact'
  save(contact:ContactEntity):Observable<ContactEntity>{
    return this.http.post<ContactEntity>(this.url+'/save',contact);
  }


  findAll():Observable<ContactEntity[]>{
    return this.http.get<ContactEntity[]>(this.url+'/findAll');
  }

  supprimer(id:number){
    return this.http.delete(this.url+'/delete?id='+id);
  }
}
