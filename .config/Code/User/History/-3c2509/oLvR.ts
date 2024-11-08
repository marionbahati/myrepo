import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent  implements OnInit{

  people=[
    {id:11,name:'David',country:'kenya',city:'Nairobi'},
    {id:12,name:'Marion',country:'Kenya',city:'Eldoret'},
    {id:7,name:'Daniel',country:'USA',city:'Dallas'},
    {id:14,name:'holen',country:'USA',city:'New York'},
    {id:16,name:'Fin',country:'Germany',city:'Wuppertal'},
    {id:18,name:'Moses',country:'Germany',city:'Frankfurt'},


  ]
  ngOnInit(): void {
    
  }
}
