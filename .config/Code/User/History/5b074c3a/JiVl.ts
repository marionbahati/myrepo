import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {

  searchText:any;
  searchCountry:any;

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
  onCountryFilter(){
    this.searchCountry=this.searchText;

  }

}
