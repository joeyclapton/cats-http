import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() statusChange = new EventEmitter<string>();

  onStatusChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const { value } = input;
    this.statusChange.emit(value);
  }
}
