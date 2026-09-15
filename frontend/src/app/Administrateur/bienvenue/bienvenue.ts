import { Component } from '@angular/core';
import { Actuality } from '../../Entity/actuality';
import { ActualiteService } from '../../Services/actualite-service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenue',
  imports: [FormsModule,CommonModule],
  templateUrl: './bienvenue.html',
  styleUrl: './bienvenue.scss',
})
export class Bienvenue {
  constructor(private actualiteService:ActualiteService){}
 bienvenueActualite:Actuality[]=[];
 ngOnInit(){
 this.charger();
 }
 
 charger(){
  this.actualiteService.findAll().subscribe({
    next:(reponse)=>{
      this.bienvenueActualite=reponse
    },
    error:(err)=>{
      console.log(err);
    }
  })
 }
 supprimer(id:number){
  this.actualiteService.supprimer(id).subscribe({
    next:(data)=>{
      alert("actualite Supprimer");
     this.charger();
    },
    error:(err)=>{
      console.log(err);
    }
  })
 }
}
