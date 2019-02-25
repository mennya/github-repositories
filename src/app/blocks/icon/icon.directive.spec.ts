import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconDirective} from './icon.directive';
import {AppIconService} from './icon.service';

@Component({
  template: `
    <div appIcon="test"></div>`
})
class TestIconComponent {
}

describe('Directive: IconDirective', () => {

  let component: TestIconComponent;
  let fixture: ComponentFixture<TestIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestIconComponent,
        IconDirective
      ],
      imports: [
        CommonModule
      ],
      providers: [AppIconService]
    });
    fixture = TestBed.createComponent(TestIconComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component)
      .toBeTruthy();
  });
});
