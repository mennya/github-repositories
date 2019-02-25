import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {WelcomeComponent} from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  exports: [WelcomeComponent],
  imports: [
    MatCardModule,
    BrowserModule,
    RouterModule
  ]
})
export class WelcomeModule {
}
