import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AppIconService} from 'app/blocks/icon';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnDestroy {
  public mobileQuery: MediaQueryList;
  public isOpened = true;
  private readonly _mobileQueryListener: () => void;

  constructor(
    readonly icon: AppIconService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    icon.addShapes({
      menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
      // tslint:disable-next-line:max-line-length
      exit_to_app: 'M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      this.isOpened = !this.mobileQuery.matches;
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public toggle() {
    this.isOpened = !this.isOpened;
  }
}
