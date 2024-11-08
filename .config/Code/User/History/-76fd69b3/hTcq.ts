import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service';


@Injectable({
  providedIn: 'root'
})
export class CourseGuardServiceService implements CanActivate{



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.authService.isAuthenticated()){
      return true;

    }
   
  }
  constructor(private authService:AuthServiceService) { }
}
