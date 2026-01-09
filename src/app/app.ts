import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WhatsappButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ortizpassos');
}
