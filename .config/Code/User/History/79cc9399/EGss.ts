import { Component } from '@angular/core';
import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private video:VideoService){

  }
}
