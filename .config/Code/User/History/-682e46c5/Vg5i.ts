import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  constructor(private route:Router){}

  navigateTohOME(){
    this.route.navigate(['Home']);

  }

}
