import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BranchesComponent} from './pages/branches/branches.component';
import {ReposComponent} from './pages/repos/repos.component';

const routes: Routes = [
  {
    path: '', component: ReposComponent
  },
  {
    path: ':login/:repo', component: BranchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
