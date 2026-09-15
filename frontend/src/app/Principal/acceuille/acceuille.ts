import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-acceuille',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './acceuille.html',
  styleUrl: './acceuille.scss',
})
export class Acceuille {

}
