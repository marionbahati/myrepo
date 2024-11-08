import { NgModule, Input, HostBinding} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxTouchKeyboardModule }  from 'ngx-touch-keyboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTouchKeyboardModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
