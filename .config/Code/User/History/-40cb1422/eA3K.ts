import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  employeename: string = "";
  email: string = "";
  password: string = "";
  constructor(private http: HttpClient) {
  }
  save() {

    let bodyData = {
      "employeename": this.employeename,
      "email": this.email,
      "password": this.password
    };
    this.http.post("http://localhost:8085/api/v1/employee/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee Registered Successfully");
    });
  }

}
