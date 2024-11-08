import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent {
  http = inject(HttpClient);
  data: any;
  getnodes() {
    this.http.get("http://localhost:8080/api/v1/nodes/allNodes")
      .subscribe((resultData: any) => {
        console.log(resultData)
      }
      );


  }
}
