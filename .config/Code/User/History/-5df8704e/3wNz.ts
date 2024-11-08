import { Component,ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData{
  id:string;
  userId:string;
  title:string;
  body:any;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'searchPgn';

  displayedColumns:string[]=['id','userId','title','body'];
  dataSource!:MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;



  post:any
  constructor(private tableservice:TableService){

    this.tableservice.getData().subscribe(data=>{
      console.log(data);
      this.post=data;
      this.dataSource=new MatTableDataSource(this.post);

      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });

  }
  
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()

    }
}




}
