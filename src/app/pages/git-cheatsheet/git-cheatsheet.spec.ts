import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCheatsheet } from './git-cheatsheet';

describe('GitCheatsheet', () => {
  let component: GitCheatsheet;
  let fixture: ComponentFixture<GitCheatsheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitCheatsheet],
    }).compileComponents();

    fixture = TestBed.createComponent(GitCheatsheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
