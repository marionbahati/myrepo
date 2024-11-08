import { Component,OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  constructor(private userService:UserServiceService){}

  user: {name:string,job:string,Gender:string,Country:string};
   
  ngOnInit(): void{
    this.userService.onShowDetailsClicked.subscribe((data:{name:string,job:string,Gender:string,Country:string})=>{
      this.user=data;

    });

  }

}
