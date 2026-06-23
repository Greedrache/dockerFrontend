import { Component } from '@angular/core';

@Component({
  selector: 'app-django-cheatsheet',
  imports: [],
  templateUrl: './django-cheatsheet.html',
  styleUrl: './django-cheatsheet.scss',
})
export class DjangoCheatsheet {
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
    });
  }
}
