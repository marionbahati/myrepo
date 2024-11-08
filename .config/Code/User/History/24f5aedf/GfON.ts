import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { TableComponent } from './table/table.component';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    FilterPipe,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
