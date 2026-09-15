import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page } from "./page/page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Page],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Frontend');
}
