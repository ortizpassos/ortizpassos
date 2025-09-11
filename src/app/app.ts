import { Component, signal } from '@angular/core';
import { Pagina } from "./pagina/pagina";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Pagina, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ortizpassos');
}
