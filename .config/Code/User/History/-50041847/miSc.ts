import { Component,OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {

  constructor(private userService:UserServiceService){}

  users:{name:string,job:string,Gender:string,Country:string}[]=[];

  ngOnInit(): void{
this.users=this.userService.users;
  }
}
