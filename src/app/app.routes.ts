import { Routes } from '@angular/router';

import { PageRendererComponent } from './pages/page-renderer-component/page-renderer-component';
import { Home } from './pages/home/home';

export const routes: Routes = [
	{ path: 'page/:page', component: PageRendererComponent },
	{ path: 'home', component: Home },
  	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
