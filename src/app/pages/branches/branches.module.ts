import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {GithubModule} from '../../blocks/api/github';

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
    GithubModule
  ]
})
export class BranchesModule {
}
