import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

import {BranchesComponent} from './branches.component';

@NgModule({
  declarations: [
    BranchesComponent
  ],
  exports: [BranchesComponent],
  imports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class BranchesModule {
}
