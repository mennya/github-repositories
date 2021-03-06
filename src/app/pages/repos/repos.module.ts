import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {GithubModule} from '../../blocks/api/github';
import {IconModule} from '../../blocks/icon';

import {ReposComponent} from './repos.component';

@NgModule({
  declarations: [
    ReposComponent
  ],
  exports: [ReposComponent],
  imports: [
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    IconModule,
    GithubModule
  ]
})
export class ReposModule {
}
