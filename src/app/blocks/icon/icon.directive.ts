import {Directive, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {isUndefined} from 'lodash';

import {AppIconService, IShapes} from './icon.service';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective implements OnInit, OnChanges {
  @Input() private readonly appSize: string;
  @Input() private readonly appIcon: string;
  private readonly DEFAULT_ICON = 'help_circle_outline';
  private readonly DEFAULT_SIZE = 24;
  private readonly XMLNS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ';
  private iconName;
  private size;
  private readonly shapes: IShapes = {
    help_circle_outline: `M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l
    -.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9
    -2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z`
  };

  constructor(private readonly el: ElementRef, readonly icon: AppIconService) {
    this.shapes = icon.getShapes();
  }

  public ngOnInit(): void {
    this.render();
  }

  public ngOnChanges(): void {
    this.render();
  }

  private render(): void {
    if (isUndefined(this.appSize)) {
      this.size = this.DEFAULT_SIZE;
    }

    this.iconName = this.appIcon;
    if (isUndefined(this.shapes[this.iconName])) {
      this.iconName = this.DEFAULT_ICON;
    }

    // render
    this.el.nativeElement.innerHTML = this.getSvgHtml();
  }

  private getSvgHtml() {
    return `${this.XMLNS} width="${this.size}" height="${this.size}"><path d="${this.shapes[this.iconName]}"/></svg>`;
  }
}
