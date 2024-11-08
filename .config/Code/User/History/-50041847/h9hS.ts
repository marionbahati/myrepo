import { Component,OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent  implements OnInit{

  constructor(private userService:UserServiceService){}

  users:{name:string,job:string,Gender:string,Country:string}[]=[];

  ngOnInit(): void{
this.users=this.userService.users;
  }

  showUserDetails(user:{name:string,job:string,Gender:string,Country:string})
  {
    this.userService.showDetails(user);
  }
}
