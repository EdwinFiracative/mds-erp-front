import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { UserProfile } from './components/user-profile/user-profile';
import { Books } from './components/books/books';
import { NotFound } from './components/not-found/not-found';
import { Forbidden } from './components/forbidden/forbidden';
import { canActivateAuthRole } from './guards/auth-role-guard';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'books',
    component: Books,
    canActivate: [canActivateAuthRole],
    data: { role: 'view-books' },
  },
  {
    path: 'profile',
    component: UserProfile,
    canActivate: [canActivateAuthRole],
    data: { role: 'view-profile' },
  },
  { path: 'forbidden', component: Forbidden },
  { path: '**', component: NotFound },
];
