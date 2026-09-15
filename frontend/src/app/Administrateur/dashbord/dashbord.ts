import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-dashbord',
  imports: [Navbar, RouterOutlet, Sidebar],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.scss',
})
export class Dashbord {

}
