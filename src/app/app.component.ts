import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusComponent } from './components/status/status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'cats-http';
}
