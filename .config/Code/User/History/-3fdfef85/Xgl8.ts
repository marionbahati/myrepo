import { Component } from '@angular/core';
import { CourseGuardServiceService } from './course-guard-service.service';
import { AuthServiceService } from './auth.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trial';

  constructor(private authService:AuthServiceService,courseservice:CourseGuardServiceService){}


  login(){
    this.authService.login;

  }
  logout(){
    this.authService.logout;

  }
}
