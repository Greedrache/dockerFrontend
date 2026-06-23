import { Component } from '@angular/core';

@Component({
  selector: 'app-git-cheatsheet',
  imports: [],
  templateUrl: './git-cheatsheet.html',
  styleUrl: './git-cheatsheet.scss',
})
export class GitCheatsheet {
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
    });
  }
}
