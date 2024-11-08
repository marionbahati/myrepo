import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import {  MatKeyboardModule } from '@ngx-material-keyboard/core';
import { KeayboardComponent } from './keayboard/keayboard.component';
import { KeyboardService } from './keyboard.service';




@NgModule({
  declarations: [
    AppComponent,
    KeayboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // Material modules
   
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    
    
    MatSlideToggleModule,
    MatTabsModule,
   
   

  ],
  
  providers: [
    KeyboardService,
    provideClientHydration(),
    provideAnimationsAsync(),

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
