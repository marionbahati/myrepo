import { Component } from '@angular/core';


@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {


inView(ele:any){
  ele.scrollInoView({behavior:"smooth",block:"start",inline:"start"})

}

}
