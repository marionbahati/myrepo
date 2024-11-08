import { NgModule, Input, HostBinding} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxTouchKeyboardModule }  from 'ngx-touch-keyboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTouchKeyboardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
