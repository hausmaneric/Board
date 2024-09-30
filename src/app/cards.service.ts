import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cardsUrl = 'assets/cards.json';

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.cardsUrl);
  }
}
