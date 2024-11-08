import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user:any[]=[{
    name:'john',
    role:'admin'
  },
{
  name:'june',
  role:'user'
},
{
  name:'cate',
  role:'editor'
}]
}
