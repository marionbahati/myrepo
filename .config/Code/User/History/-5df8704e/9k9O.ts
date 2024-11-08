import { Component,ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData{
  id:string;
  userId:string;
  title:string;
  body:string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'searchPgn';
  displayedColumns:string[]=['id','userId','title','body']
  dataSource!:MatTableDataSource<UserData>
  post:any

  constructor(private tableservice:TableService){

    this.tableservice.getData().subscribe(data=>{
      console.log(data);
      this.post=data
      this.dataSource=new MatTableDataSource(this.post)
    });

  }
  





}
