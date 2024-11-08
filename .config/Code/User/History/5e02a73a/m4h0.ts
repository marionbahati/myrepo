import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-videos-individuell',
  templateUrl: './videos-individuell.component.html',
  styleUrl: './videos-individuell.component.scss'
})
export class VideosIndividuellComponent {
  constructor(private router:Router,private translate:TranslateService){
  }
  
  switchLanguage(language:string){
    this.translate.use(language);
    
}
}
