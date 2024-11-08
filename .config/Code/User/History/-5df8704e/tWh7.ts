import { Component } from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'searchPgn';
  displayedColumns:string[]=['id','userId','title','body']

  constructor(private tableservice:TableService){

    this.tableservice.getData().subscribe(data=>{
      console.log(data);
    });

  }
  





}
