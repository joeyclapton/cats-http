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

  getStatus(status: string): Observable<File> {
    console.log(this.http.get(`${this.url}/cat/says/hello`));
    return this.http.get<File>(`${this.url}/cat/says/hello`, {});
  }
}
