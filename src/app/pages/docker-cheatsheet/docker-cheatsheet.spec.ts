import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerCheatsheet } from './docker-cheatsheet';

describe('DockerCheatsheet', () => {
  let component: DockerCheatsheet;
  let fixture: ComponentFixture<DockerCheatsheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockerCheatsheet],
    }).compileComponents();

    fixture = TestBed.createComponent(DockerCheatsheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
