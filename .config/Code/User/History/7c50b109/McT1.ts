import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Page2Component } from './page2/page2.component';
import { RouterModule, Routes } from '@angular/router';

import { ShowComponent } from './show/show.component';

import { ThemenComponent } from './themen/themen.component';

import { Page1Component } from './page1/page1.component';

import { TranslatePageComponent } from './translate-page/translate-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WissenschaftComponent } from './EnglishWilkommenSeite/wissenschaft.component';

import { Seite3Component } from './hauptmenu/seite3.component';
import { FormsModule } from '@angular/forms';
import { VideoJsComponent } from 'angular-video-js-player';
import { TooltipModule } from "primeng/tooltip";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule, JsonPipe } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndividuellComponent } from './individuell/individuell.component';
import { TestShowComponent } from './test-show/test-show.component';
import { CubeOnlyIndividuellComponent } from './cube-only-individuell/cube-only-individuell.component';
import { VideosIndividuellComponent } from './videos-individuell/videos-individuell.component';
import { ThemenfilmeComponent } from './themenfilme/themenfilme.component';
import { IndividuelleZusammenstellungComponent } from './individuelle-zusammenstellung/individuelle-zusammenstellung.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestingComponent } from './testing/testing.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { FooterComponent } from './components/structure/footer/footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoute: Routes = [

  { path: '', component: Page1Component },
  { path: 'welcome', component: WelcomePageComponent
    },
  { path: 'translate', component: TranslatePageComponent },
  { path: 'seite3', component: Seite3Component},
  { path: 'page1', component: Page1Component,
         data:{show:false} },
  { path: 'page2', component: Page2Component },
  { path: 'show', component: ShowComponent },
  { path: 'test', component: TestingComponent },
  { path: 'testShow', component: TestShowComponent },
  { path: 'themen', component: ThemenComponent },
  { path: 'individuelleZusammenstellung', component: IndividuelleZusammenstellungComponent },
  { path: 'wissenschaft', component: WissenschaftComponent
  },
 
  { path: 'individuell', component: IndividuellComponent },
  { path: 'testShow', component: TestShowComponent },
  { path: 'videoIndividuell', component: VideosIndividuellComponent },
  { path: 'themenfilme', component: ThemenfilmeComponent },
  { path: 'cubeIndividuell', component: CubeOnlyIndividuellComponent },
  { path: '**', component: Page1Component }

]

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    TranslatePageComponent,
    WelcomePageComponent,
    WissenschaftComponent,
    
    Seite3Component,
   
    IndividuellComponent,
    ShowComponent,
    TestShowComponent,
    CubeOnlyIndividuellComponent,
    VideosIndividuellComponent,
    ThemenfilmeComponent,
    IndividuelleZusammenstellungComponent,
    
    TestingComponent,
         HeaderComponent,
         FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VideoJsComponent,
    InputTextModule,
    TooltipModule,
    CommonModule,
    FontAwesomeModule,


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(appRoute),
    FontAwesomeModule


  ],


  providers: [
    provideClientHydration(),
    { provide: JsonPipe },
    provideAnimationsAsync()


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
