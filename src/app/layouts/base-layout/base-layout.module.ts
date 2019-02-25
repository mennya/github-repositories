import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {IconModule} from 'app/blocks/icon';
import {SidenavModule} from 'app/components/sidenav';

import {BaseLayoutComponent} from './base-layout.component';

@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    SidenavModule,
    IconModule
  ]
})
export class BaseLayoutModule {
}
