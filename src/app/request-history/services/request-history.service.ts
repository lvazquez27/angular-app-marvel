import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestHistory } from "../models/request-history.model";

@Injectable({
    providedIn: 'root'
  })
  export class RequestHistoryService {
    private apiUrl = 'http://localhost:8080/history/v1/history';
    private token = 'dXNlcjp1c2VyMTIz';

    constructor(private http: HttpClient) {}

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
          'Authorization': `Basic ${this.token}`
        });
      } 
  
    public getRequestHistory(): Observable<RequestHistory[]> {
        const headers = this.getHeaders();
      return this.http.get<RequestHistory[]>(this.apiUrl, { headers });;
    }
  }