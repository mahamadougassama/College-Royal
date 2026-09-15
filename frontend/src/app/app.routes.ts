import { Routes } from '@angular/router';
import { Acceuille } from './Principal/acceuille/acceuille';
import { Admin } from './Administrateur/admin/admin';
import { Page } from './page/page';
import { Change } from './Principal/change/change';
import { Contact } from './Les Headers/contact/contact';
import { Ressource } from './Les Headers/ressource/ressource';
import { Login } from './Administrateur/login/login';
import { Dashbord } from './Administrateur/dashbord/dashbord';
import { Inscription } from './Les Headers/inscription/inscription';
import { Bienvenue } from './Administrateur/bienvenue/bienvenue';
import { GestionActualite } from './Administrateur/gestion-actualite/gestion-actualite';
import { GestionContact } from './Administrateur/gestion-contact/gestion-contact';
import { authGuard } from './Guards/auth-guard';
import { Apropos } from './Les Headers/apropos/apropos';

export const routes: Routes = [
   {
    path:'',
    component:Page,
    children:[
      {
        path:'',
        component:Acceuille,
        children:[
          {
            path:'',
            component:Change,
            

          },
          {
            path:'contact',
            component:Contact
          },
          {
            path:'ressource',
            component:Ressource
          },
          {
            path:'inscription',
            component:Inscription
          },
          {
            path:'apropos',
            component:Apropos
          }
        ]
      }
      ,
      {
        path:'admin',
        component:Admin,
        children:[
            {
                path:'',
                component:Login,
            },
            {
                path:'dashbord',
                component:Dashbord,
                canActivate:[authGuard],
                children:[
                  {
                    path:'',
                    component:Bienvenue
                  },
                  {
                    path:'actualite',
                    component:GestionActualite
                  },
                  {
                    path:'contact',
                    component:GestionContact
                  }
                ]
            }
        ]
      }
    ]
   }
];
