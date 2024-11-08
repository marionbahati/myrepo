import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service';
import { Router } from 'express';


@Injectable({
  providedIn: 'root'
})
export class CourseGuardServiceService implements CanActivate{



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.authService.isAuthenticated()){
      return true;

    }else{
      this.router.navigate(['']);
      return false;

    }
   
  }
  constructor(private authService:AuthServiceService,private router:Router) { }
}
