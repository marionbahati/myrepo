import { AfterViewInit, Component, ElementRef, OnChanges, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

@Component({
  selector: 'app-diagnostik',
  templateUrl: './diagnostik.component.html',
  styleUrl: './diagnostik.component.scss'
})
export class DiagnostikComponent  implements OnChanges{
  constructor(private router:Router,private translate:TranslateService){}

  chosenShows!: any[];
   // Get a handle to the player
   @ViewChild('player') videoPlayer: ElementRef;
   @ViewChild('btnPlayPause') btnPlayPause: HTMLButtonElement;
   @ViewChild('btnMute') btnMute: HTMLButtonElement;
   @ViewChild('progressBar') progressBar: ElementRef;
   @ViewChild('volumeBar') volumeBar: ElementRef;
  ngOnChanges(){
    
  }
  setVolume(){
    this.videoPlayer.nativeElement.volume = parseInt(this.volumeBar.nativeElement.value);
  }

  playPauseVideo() {
  	if (this.videoPlayer.nativeElement.paused || this.videoPlayer.nativeElement.ended) {
  		// Change the button to a pause button
  		this.changeButtonType(this.btnPlayPause, 'pause');
  		this.videoPlayer.nativeElement.play();
  	}
  	else {
  		// Change the button to a play button
  		this.changeButtonType(this.btnPlayPause, 'play');
  		this.videoPlayer.nativeElement.pause();
  	}
  }
  
  // Stop the current media from playing, and return it to the start position
  stopVideo() {
  	this.videoPlayer.nativeElement.pause();
  	if (this.videoPlayer.nativeElement.currentTime) this.videoPlayer.nativeElement.currentTime = 0;
  }
  
  // Toggles the media player's mute and unmute status
  muteVolume() {
  	if (this.videoPlayer.nativeElement.muted) {
  		// Change the button to a mute button
  		this.changeButtonType(this.btnMute, 'mute');
  		this.videoPlayer.nativeElement.muted = false;
  	}
  	else {
  		// Change the button to an unmute button
  		this.changeButtonType(this.btnMute, 'unmute');
  		this.videoPlayer.nativeElement.muted = true;
  	}
  }
  
  // Replays the media currently loaded in the player
  replayVideo() {
  	this.resetPlayer();
  	this.videoPlayer.nativeElement.play();
  } 
  
  // Update the progress bar
  updateProgressBar() {
  	// Work out how much of the media has played via the duration and currentTime parameters
  	var percentage = Math.floor((100 / this.videoPlayer.nativeElement.duration) * this.videoPlayer.nativeElement.currentTime);
  	// Update the progress bar's value
  	this.progressBar.nativeElement.value = percentage;
  	// Update the progress bar's text (for browsers that don't support the progress element)
  	this.progressBar.nativeElement.innerHTML = percentage + '% played';
  }
  seek(e) {
      var percent = e.offsetX / this.progressBar.nativeElement.offsetWidth;
      this.videoPlayer.nativeElement.currentTime = percent * this.videoPlayer.nativeElement.duration;
      e.target.value = Math.floor(percent / 100);
      e.target.innerHTML = this.progressBar.nativeElement.value + '% played';
  }
  
  // Updates a button's title, innerHTML and CSS class
  changeButtonType(btn, value) {
  	btn.title     = value;
  	btn.innerHTML = value;
  	btn.className = value;
  }
  
  resetPlayer() {
  	let video:any=document.getElementById("video-element");
    video.currentTime=0;
  }  
  

  goToWelcomepage(){
    this.router.navigate(['/welcome']);
  }

  goToTHemen(){
    this.router.navigate(['/themen']);
  }
  goToWissenschaft(){
    this.router.navigate(['/wissenschaft']);
  }
  goToShow(){
    this.router.navigate(['/show']);
  }

  goToDiagnostik(){
    this.router.navigate(['/diagnostik']);
  }
 
  switchLanguage(language:string){
    this.translate.use(language);
    
}
goToMainmenu(){
  this.router.navigate(['/seite3']);
}


addedShow(){
  this.chosenShows.push(Object);
}

 

}
