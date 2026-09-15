import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from '../Entity/administrateur';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url='http://localhost:8080/Ecole/Admin'
  constructor(private http:HttpClient){}
  login(admin:Administrateur):Observable<Administrateur>{
       return this.http.post<Administrateur>(
        this.url+'/login',admin
       )
  }
}
