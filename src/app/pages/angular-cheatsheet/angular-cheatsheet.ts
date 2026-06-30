import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-cheatsheet',
  standalone: true,
  imports: [],
  templateUrl: './angular-cheatsheet.html',
  styleUrls: ['./angular-cheatsheet.scss'],
})
export class AngularCheatsheet {
    copyToClipboard(text: string): void {
      navigator.clipboard.writeText(text).then(() => {
      }).catch(err => {
      });
    }
}
