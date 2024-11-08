import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

@Component({
  selector: 'app-diagnostik',
  templateUrl: './diagnostik.component.html',
  styleUrl: './diagnostik.component.scss'
})
export class DiagnostikComponent {
  captionList = [{ url: 'your-caption-url', lang: 'en', label: 'English' }];
  videourl: any = "https://cdn.pixabay.com/vimeo/912684284/bird-200427.mp4?width=1280&hash=67fef5d5bd129d65e1bb235d5af18c429fd99732";

}
