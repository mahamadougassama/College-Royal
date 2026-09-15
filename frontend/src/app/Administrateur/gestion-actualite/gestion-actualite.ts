import { Component } from '@angular/core';
import { Actuality } from '../../Entity/actuality';
import { FormsModule } from "@angular/forms";
import { ActualiteService } from '../../Services/actualite-service';

@Component({
  selector: 'app-gestion-actualite',
  imports: [FormsModule],
  templateUrl: './gestion-actualite.html',
  styleUrl: './gestion-actualite.scss',
})
export class GestionActualite {
  constructor(private actualiteServive:ActualiteService){}
   actualite:Actuality={
    id:0,
    titre:'',
    contenue:'',
    image:'',
   }
   fichier!:File;
selectionnerImage(event:any){
this.fichier=event.target.files[0];
}
publier(){
  const formData=new FormData();
  formData.append(
    'titre',this.actualite.titre
  ),
  formData.append(
    'contenue',this.actualite.contenue
  ),
  formData.append(
    'image',this.fichier
  )
  formData.append(
    'id',
    "1"
  )
  this.actualiteServive.save(formData).subscribe({
    next:(reponse)=>{
      console.log(reponse)
      this.actualite={
        id:0,
        titre:'',
        contenue:'',
        image:'',
      }
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
actualites:Actuality[]=[];
ngOnint(){
  this.actualiteServive.findAll().subscribe({
    next:(reponse)=>{
      this.actualites=reponse;
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
