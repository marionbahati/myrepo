import { Component } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'searchPgn';

  constructor(private tableservice:TableService){

    this.tableservice.getData().subscribe(data=>{
      console.log(data);
    })

  }
  





}
