import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatSnackBarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {IconModule} from 'app/blocks/icon';

import {SidenavComponent} from './sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    IconModule,
    RouterModule
  ],
  exports: [SidenavComponent]

})
export class SidenavModule {
}
