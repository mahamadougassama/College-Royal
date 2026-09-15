import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContactService } from '../../Services/contact-service';
import { ContactEntity } from '../../Entity/ContactEntity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './gestion-contact.html',
  styleUrl: './gestion-contact.scss',
})
export class GestionContact {
constructor(private contactService:ContactService){}
list:ContactEntity[]=[]
ngOnInit(){
 this.charger();
}
charger(){
  this.contactService.findAll().subscribe({
    next:(reponse)=>{
      this.list=reponse;
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

supprimer(id:number){
  this.contactService.supprimer(id).subscribe({
    next:(reponse)=>{
      this.charger();
    },
    error:(err)=>{
console.log(err);
    }
  })
}

}
