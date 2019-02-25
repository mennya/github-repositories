import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BaseLayoutComponent} from './layouts/base-layout';
import {BranchesComponent} from './pages/branches';
import {ReposComponent} from './pages/repos';
import {WelcomeComponent} from './pages/welcome';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent,
    children: [
      {
        path: '', component: WelcomeComponent
      },
      {
        path: 'repos', component: ReposComponent
      },
      {
        path: ':login/:repo', component: BranchesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
