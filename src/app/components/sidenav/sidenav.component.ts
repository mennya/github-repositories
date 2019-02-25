import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AppIconService} from 'app/blocks/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(public readonly snackBar: MatSnackBar,
              readonly icon: AppIconService
  ) {
    // tslint:disable:max-line-length
    icon.addShapes({
      list: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
      home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
    });
  }
}
