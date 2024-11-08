import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Page2Component } from './page2/page2.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WilkommenComponent } from './wilkommen/wilkommen.component';
import { ShowComponent } from './show/show.component';
import { TestComponent } from './test/test.component';
import { ThemenComponent } from './themen/themen.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GesamtshowComponent } from './gesamtshow/gesamtshow.component';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { TranslatePageComponent } from './translate-page/translate-page.component'; 


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

const appRoute:Routes=[

  {path:'',component:HomeComponent},
 {path:'page1',component:Page1Component},
 {path:'home',component:HomeComponent},
 {path:'page2',component:Page2Component},
 {path:'wilkommen',component:WilkommenComponent},
 {path:'show',component:ShowComponent},
 {path:'test',component:TestComponent},
 {path:'themen',component:ThemenComponent},
{path:'gesamtshow',component:GesamtshowComponent},
 {path:'**',component:ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    HomeComponent,
    TranslatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient],
      },
    }),
    RouterModule.forRoot(appRoute)

   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
