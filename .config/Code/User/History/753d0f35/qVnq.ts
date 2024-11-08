import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables/tables.component';
import { NgModel } from '@angular/forms';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule
   
  
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
