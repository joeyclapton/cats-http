import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-status',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-status.component.html',
  styleUrl: './search-status.component.sass',
})
export class SearchStatusComponent {
  status = new FormControl('');
}
