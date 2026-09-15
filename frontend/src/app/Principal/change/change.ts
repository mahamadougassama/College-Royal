import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ActualiteService } from '../../Services/actualite-service';
import { Actuality } from '../../Entity/actuality';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change',
  imports: [RouterLink,CommonModule],
  templateUrl: './change.html',
  styleUrl: './change.scss',
})
export class Change  {
  
constructor(private aactualiteService:ActualiteService){}
derniereActualite?:Actuality;
ngOnInit(){
  this.afficher();
}
afficher(){
  this.aactualiteService.findAll().subscribe({
    next:(reponse)=>{
      if(reponse.length>0){
        this.derniereActualite=reponse[reponse.length-1];
      }
      else if(reponse.length===0){
        this.derniereActualite=reponse[0]
      }
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
