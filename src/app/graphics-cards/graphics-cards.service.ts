import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GraphicCard } from './graphics-cards.model';

@Injectable({
  providedIn: 'root',
})
export class GraphicsCardsService {
  constructor(private httpClient: HttpClient) {}

  getGraphicsCards(): Observable<GraphicCard[]> {
    const url = 'assets/graphics-cards.json';
    return this.httpClient
      .get<GraphicCard[]>(url)
      .pipe(map((response: any) => response.data));
  }
}
