import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KundenDataService {
  private apiUrlNodes = 'https://api.your-backend.com/nodes'; // Replace with your nodes API URL
  private apiUrlLinks = 'https://api.your-backend.com/links'; // Replace with your links API URL

  constructor(private http: HttpClient) { }

  getNodes(parentCompany: string, connectionType: string, depth: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlNodes}?parentCompany=${parentCompany}&connectionType=${connectionType}&depth=${depth}`);
  }

  getLinks(parentCompany: string, connectionType: string, depth: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlLinks}?parentCompany=${parentCompany}&connectionType=${connectionType}&depth=${depth}`);
  }
}
