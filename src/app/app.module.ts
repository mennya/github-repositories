import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCommonModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BranchesComponent} from './pages/branches/branches.component';
import {ReposComponent} from './pages/repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    MatCommonModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
