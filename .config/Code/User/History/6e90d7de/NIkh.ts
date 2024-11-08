import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  loggenIn:boolean=true;

  login(){
    this.loggenIn=true;
  }
  logout(){
    this.loggenIn=false;
  }
  isAuthenticated(){
    return this.loggenIn;
  }

  
}
