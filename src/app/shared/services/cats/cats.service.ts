import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  http = inject(HttpClient);

  url = environment.api.url;

  constructor() {}

  getStatus(status: string): Observable<Blob> {
    return this.http.get<Blob>(this.url);
  }
}
