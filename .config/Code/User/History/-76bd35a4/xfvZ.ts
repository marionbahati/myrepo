import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cube-only-individuell',
  templateUrl: './cube-only-individuell.component.html',
  styleUrl: './cube-only-individuell.component.scss'
})
export class CubeOnlyIndividuellComponent {
  constructor(private router:Router,private translate:TranslateService){
  }

  isClicked:boolean=false;

  switchLanguage(language:string){
    this.translate.use(language);
    
}

clickedTrue(){
this.isClicked=true;
}

}
