import { Routes } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { Accounts } from '../accounts/accounts';

export const routes: Routes = [
  { path: 'accounts', component: Accounts },
  { path: 'dashboard', component: Dashboard },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];