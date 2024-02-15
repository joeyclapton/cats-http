import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchStatusComponent } from './components/search-status/search-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'cats-http';
}
