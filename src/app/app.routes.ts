import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AngularCheatsheet } from './pages/angular-cheatsheet/angular-cheatsheet';
import { GitCheatsheet } from './pages/git-cheatsheet/git-cheatsheet';
import { DjangoCheatsheet } from './pages/django-cheatsheet/django-cheatsheet';
import { DockerCheatsheet } from './pages/docker-cheatsheet/docker-cheatsheet';
import { BashCheatsheet } from './pages/bash-cheatsheet/bash-cheatsheet';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angular-cheatsheet', component: AngularCheatsheet },
  { path: 'git-cheatsheet', component: GitCheatsheet },
  { path: 'django-cheatsheet', component: DjangoCheatsheet },
  { path: 'docker-cheatsheet', component: DockerCheatsheet },
  { path: 'bash-cheatsheet', component: BashCheatsheet },
  { path: '**', redirectTo: '' }
];
