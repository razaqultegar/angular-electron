import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app';
import { FrontComponent } from './components/front';
import { DetailComponent } from './components/detail';

@NgModule({
  imports: [
    BrowserModule,
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
  bootstrap: [AppComponent]
})

export class AppModule { }
