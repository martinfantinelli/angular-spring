import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Manga } from './../model/manga';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  private readonly API = 'api/mangas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Manga[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(mangas => console.log(mangas))
    );
  }

  save(record: Manga) {
    return this.httpClient.post<Manga>(this.API, record);
  }
}
