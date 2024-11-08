import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Seite1Component } from './seite1/seite1.component';
import { TranslateSeiteComponent } from './translate-seite/translate-seite.component';
import { WillkommenSeiteComponent } from './willkommen-seite/willkommen-seite.component';
import { ShowSeiteComponent } from './show-seite/show-seite.component';
import { ThemenSeiteComponent } from './themen-seite/themen-seite.component';
import { TestSeiteComponent } from './test-seite/test-seite.component';
import { GesamtshowSeiteComponent } from './gesamtshow-seite/gesamtshow-seite.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorSeiteComponent } from './error-seite/error-seite.component';

const appRoute:Routes=[
  {path:'',component:TranslateSeiteComponent},
  {path:'translate',component:TranslateSeiteComponent},
  {path:'willkommen',component:WillkommenSeiteComponent},
  {path:'show',component:ShowSeiteComponent},
  {path:'test',component:TestSeiteComponent},
  {path:'themen',component:ThemenSeiteComponent},
  {path:'**',component:ErrorSeiteComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    Seite1Component,
    TranslateSeiteComponent,
    WillkommenSeiteComponent,
    ShowSeiteComponent,
    ThemenSeiteComponent,
    TestSeiteComponent,
    GesamtshowSeiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)

    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
