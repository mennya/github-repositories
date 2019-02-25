import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseLayoutModule} from './layouts/base-layout';
import {BranchesModule} from './pages/branches';
import {ReposModule} from './pages/repos';
import {WelcomeModule} from './pages/welcome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BaseLayoutModule,
    WelcomeModule,
    ReposModule,
    BranchesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
