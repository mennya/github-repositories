import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatSnackBarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {IconModule} from 'app/blocks/icon';

import {SidenavComponent} from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach((async () => TestBed.configureTestingModule({
    declarations: [SidenavComponent],
    imports: [
      BrowserModule,
      MatSidenavModule,
      MatListModule,
      MatSnackBarModule,
      MatButtonModule,
      MatIconModule,
      IconModule,
      RouterTestingModule
    ]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
