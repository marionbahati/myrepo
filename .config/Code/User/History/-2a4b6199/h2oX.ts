import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }


  registerUser(userDetails:User){
     return this.http.post(`${this.baseUrl}/users`,userDetails);

  }
}
