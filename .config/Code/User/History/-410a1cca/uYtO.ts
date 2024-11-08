import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
 filteresString:string='';

 users = [{
  name: 'Lucy',
  gender: 'female'
},
{
  name: 'John',
  gender: 'male'
},
{
  name: 'Dan',
  gender: 'male'
},
{
  name: 'Marion',
  gender: 'female'
}


];


ngOnInit(): void {

}
}
