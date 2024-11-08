import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {


  ngOnInit(){
    const developers=[{
      id:1,
      name:"ann",
      gender:"female"
    },{
      id:2,
      name:"Fred",
      gender:"male"
    },
  {
      id:3,
      name:"Daniel",
      gender:"male"
  },
  {
    id:4,
    name:"Marion",
    gender:"female"
  }
]

  }

}
