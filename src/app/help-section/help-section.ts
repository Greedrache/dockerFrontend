import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-help-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './help-section.html',
  styleUrls: ['./help-section.scss'],
})
export class HelpSection {}
