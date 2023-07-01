import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Character } from '../models/character.model';
import { RequestHistoryService } from 'src/app/request-history/services/request-history.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'http://localhost:8080/character/v1/character';
  private token = 'dXNlcjp1c2VyMTIz';

  constructor(private http: HttpClient,private requestHistoryService: RequestHistoryService) { }

   

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Basic ${this.token}`
    });
  }

  getCharacters(): Observable<Character[]> {
    const headers = this.getHeaders();
    return this.http.get<Character[]>(this.apiUrl, { headers });
  }

  getCharacterById(id: number): Observable<Character> {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.getHeaders();

    return this.http.get<Character>(url, { headers });
  }
}
