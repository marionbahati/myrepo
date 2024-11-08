import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {

  searchText:any;

  heroes=[
    {id:11,name:'David',country:'kenya'},
    {id:12,name:'Marion',country:'Swiss'},
    {id:7,name:'Daniel',country:'USA'},
    {id:14,name:'holen',country:'UK'},
    {id:16,name:'Fin',country:'Germany'},
    {id:18,name:'Moses',country:'Uganda'},


  ]



  ngOnInit(): void {
    
  }

}
