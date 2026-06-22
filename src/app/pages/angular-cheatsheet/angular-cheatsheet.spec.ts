import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCheatsheet } from './angular-cheatsheet';

describe('AngularCheatsheet', () => {
  let component: AngularCheatsheet;
  let fixture: ComponentFixture<AngularCheatsheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCheatsheet],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularCheatsheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
