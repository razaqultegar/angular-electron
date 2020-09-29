import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App is our top level component
import { AppComponent } from './components/app';
import { FrontComponent } from './components/front';
import { DetailComponent } from './components/detail';

import '../styles/app.scss';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'front', pathMatch: 'full' },
      { path: 'front', component: FrontComponent },
      { path: 'detail', component: DetailComponent }
    ])
  ],
  declarations: [
    AppComponent,
    FrontComponent,
    DetailComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
