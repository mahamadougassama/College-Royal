import { Component } from '@angular/core';
import { ActualiteService } from '../../Services/actualite-service';
import { Actuality } from '../../Entity/actuality';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ressource',
  imports: [CommonModule],
  templateUrl: './ressource.html',
  styleUrl: './ressource.scss',
})
export class Ressource {
constructor(private actualiteService:ActualiteService){}
list:Actuality[]=[];
ngOnInit(){
  this.afficher();
}


afficher(){
this.actualiteService.findAll().subscribe({
  next:(reponse:Actuality[])=>{
    this.list=reponse.sort((actualite1:Actuality,actualite2:Actuality)=>{
      return actualite2.id-actualite1.id;
    })
  },
  error:(err)=>{
    console.log(err);
  }
})
}
}
