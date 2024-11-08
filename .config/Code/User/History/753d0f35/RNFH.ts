import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables/tables.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SortPipePipe } from './tables/tables/sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    FilterPipe,
    SortPipePipe,
   
  
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
