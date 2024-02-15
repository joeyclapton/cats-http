import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-status',
  standalone: true,
  imports: [],
  templateUrl: './image-status.component.html',
  styleUrl: './image-status.component.sass',
})
export class ImageStatusComponent {
  @Input() src = '';
  @Input() alt = '';

  constructor() {}
}
