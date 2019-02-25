import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {IconDirective} from './icon.directive';
import {AppIconService} from './icon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconDirective],
  exports: [IconDirective],
  providers: [AppIconService]
})
export class IconModule {
}
