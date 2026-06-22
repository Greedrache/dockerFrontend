import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { HelpSection } from '../../help-section/help-section';
import { About } from '../../about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, HelpSection, About],
  template: `
    <app-hero></app-hero>
    <app-help-section></app-help-section>
    <app-about></app-about>
  `
})
export class HomeComponent {}