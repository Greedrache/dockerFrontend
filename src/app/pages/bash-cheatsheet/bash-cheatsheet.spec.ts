import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BashCheatsheet } from './bash-cheatsheet';

describe('BashCheatsheet', () => {
  let component: BashCheatsheet;
  let fixture: ComponentFixture<BashCheatsheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BashCheatsheet],
    }).compileComponents();

    fixture = TestBed.createComponent(BashCheatsheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
