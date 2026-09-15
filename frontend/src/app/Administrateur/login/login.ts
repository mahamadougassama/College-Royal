import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Administrateur } from '../../Entity/administrateur';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../Services/admin-service';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
admin:Administrateur={
  id:0,
  nom:'',
  motDePasse:'',
}
constructor( private adminiService:AdminService,private route:Router){}
connexion(){

  this.adminiService.login(this.admin).subscribe({

    next:(reponse)=>{

      console.log(reponse);

      if(reponse != null){

        console.log('Connexion réussie');
        localStorage.setItem("admin", JSON.stringify(reponse));

        this.route.navigate(['/admin/dashbord']);

      }
      else{

        console.log('Nom ou mot de passe incorrect');

        alert('Nom ou mot de passe incorrect');

      }

    },

    error:(err)=>{

      console.log("Erreur");
      console.log(err);

    }

  });

}
  
}
