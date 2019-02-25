import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {GithubService} from './github.service';

@NgModule({
  declarations: [],
  exports: [],
  providers: [GithubService],
  imports: [
    HttpClientModule
  ]
})
export class GithubModule {
}
