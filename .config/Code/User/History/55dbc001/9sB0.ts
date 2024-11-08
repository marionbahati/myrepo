import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[UserServiceService]
})
export class AppComponent {
  title = 'dependancyService';

  constructor(private userService:UserServiceService){
    
  }
}
