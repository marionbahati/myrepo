import { Component } from '@angular/core';
import { SubjectServiveService } from './subject-servive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[SubjectServiveService]
})
export class AppComponent {
  title = 'subjects';
  constructor( private dataservice:SubjectServiveService){}
}
