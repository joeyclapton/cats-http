import { Component, inject } from '@angular/core';
import { SearchStatusComponent } from '../search-status/search-status.component';
import { ImageStatusComponent } from '../image-status/image-status.component';
import { CatsService } from '../../shared/services/cats/cats.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [SearchStatusComponent, ImageStatusComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass',
})
export class StatusComponent {
  catsService = inject(CatsService);

  status = '';

  updateStatus(value: string) {
    this.status = value;
    this.catsService.getStatus('401').subscribe((value) => {
      console.log('value subscribe', value);
    });
  }
}
