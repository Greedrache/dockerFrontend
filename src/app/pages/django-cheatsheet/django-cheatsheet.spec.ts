import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoCheatsheet } from './django-cheatsheet';

describe('DjangoCheatsheet', () => {
  let component: DjangoCheatsheet;
  let fixture: ComponentFixture<DjangoCheatsheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjangoCheatsheet],
    }).compileComponents();

    fixture = TestBed.createComponent(DjangoCheatsheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
