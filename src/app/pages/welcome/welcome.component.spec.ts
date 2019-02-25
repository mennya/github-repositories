import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WelcomeComponent} from './repos.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WelcomeComponent
      ]
    })
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app)
      .toBeTruthy();
  });

  it(`should have as title 'github-repositories'`, () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title)
      .toEqual('github-repositories');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Welcome to github-repositories!');
  });
});
