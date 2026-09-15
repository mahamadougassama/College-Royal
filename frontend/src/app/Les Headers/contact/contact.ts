import { Component } from '@angular/core';
import { ContactEntity } from '../../Entity/ContactEntity';
import {  FormsModule } from '@angular/forms';
import { ContactService } from '../../Services/contact-service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
contact:ContactEntity={
  nom:'',
  email:'',
  message:''
}
constructor(private contacteService:ContactService){}
envoyer(){
  this.contacteService.save(this.contact).subscribe({
    next:(reponse)=>{
      console.log(reponse);
       this.contact={
       nom:'',
       email:'',
       message:''
       }
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
