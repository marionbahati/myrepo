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
import { MatCardModule } from '@angular/material/card';
import { TranslatePageComponent } from './translate-page/translate-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WissenschaftComponent } from './EnlishWilkommenSeite/wissenschaft.component';
import { SarstedtMarkeComponent } from './sarstedt-marke/sarstedt-marke.component';
import { Seite3Component } from './hauptmenu/seite3.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxTouchKeyboardModule } from 'ngx-touch-keyboard';
import { MatIconModule } from '@angular/material/icon';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VideoJsComponent } from 'angular-video-js-player';
import { TooltipModule } from "primeng/tooltip";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule, JsonPipe } from '@angular/common';
import { SecondstohoursPipe } from './secondstohours.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndividuellComponent } from './individuell/individuell.component';
import { TestShowComponent } from './test-show/test-show.component';
import { CubeOnlyIndividuellComponent } from './cube-only-individuell/cube-only-individuell.component';
import { VideosIndividuellComponent } from './videos-individuell/videos-individuell.component';
import { ThemenfilmeComponent } from './themenfilme/themenfilme.component';
import { IndividuelleZusammenstellungComponent } from './individuelle-zusammenstellung/individuelle-zusammenstellung.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SystemTestComponent } from './system-test/system-test.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestingComponent } from './testing/testing.component'; 

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoute: Routes = [

  { path: '', component: Page1Component },
  { path: 'welcome', component:WelcomePageComponent },
  { path: 'translate', component: TranslatePageComponent },
  { path: 'seite3', component: Seite3Component },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'show', component: ShowComponent },
  { path: 'test', component: TestingComponent },
  {path:'testShow',component:TestShowComponent},
  { path: 'themen', component: ThemenComponent },
  { path: 'individuelleZusammenstellung', component: IndividuelleZusammenstellungComponent },
  { path: 'wissenschaft', component: WissenschaftComponent },
  { path: 'marke', component: SarstedtMarkeComponent },
  { path: 'individuell', component: IndividuellComponent },
  { path: 'testShow', component: TestShowComponent },
  { path: 'videoIndividuell', component: VideosIndividuellComponent },
  { path: 'themenfilme', component: ThemenfilmeComponent },
  { path: 'cubeIndividuell', component: CubeOnlyIndividuellComponent },
  { path: '**', component: Page1Component}

]

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    TranslatePageComponent,
    WelcomePageComponent,
    WissenschaftComponent,
    SarstedtMarkeComponent,
    Seite3Component,
    SecondstohoursPipe,
    IndividuellComponent,
    ShowComponent,
    TestShowComponent,
    CubeOnlyIndividuellComponent,
    VideosIndividuellComponent,
    ThemenfilmeComponent,
    IndividuelleZusammenstellungComponent,
    SystemTestComponent,
    TestingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    NgxTouchKeyboardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    VideoJsComponent,
    InputTextModule,
    TooltipModule,
    CommonModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    
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
