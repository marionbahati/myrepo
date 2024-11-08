import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{



  heroes=[
    {id:11,name:'David',country:'kenya'},
    {id:12,name:'Marion',country:'Kenya'},
    {id:7,name:'Daniel',country:'USA'},
    {id:14,name:'holen',country:'USA'},
    {id:16,name:'Fin',country:'Germany'},
    {id:18,name:'Moses',country:'Germany'},


  ]
  ngOnInit(): void {
    
  }

}
