import { Component } from '@angular/core';

@Component({
  selector: 'app-bash-cheatsheet',
  standalone: true,
  imports: [],
  templateUrl: './bash-cheatsheet.html',
  styleUrls: ['./bash-cheatsheet.scss'],
})
export class BashCheatsheet {
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
    });
  }
}
