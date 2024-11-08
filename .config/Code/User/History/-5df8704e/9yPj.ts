import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


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

export class AppComponent implements AfterViewInit{
  title = 'searchPgn';

  displayedColumns:string[]=['id','userId','title','body'];
  dataSource!:MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;



  post:any
  constructor(private tableservice:TableService){

    this.tableservice.getData().subscribe(data=>{
      //console.log(data);
      this.post=data;
      this.dataSource=new MatTableDataSource(this.post);
      if(this.paginator === undefined){
        console.warn("Paginator undefined!");
      }
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });

  }
  ngAfterViewInit(){
    console.log( this.paginator===undefined?'undefined':'defined!');
  }
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
}




}
