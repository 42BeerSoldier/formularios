import { Routes } from '@angular/router';

import { PageRendererComponent } from './pages/page-renderer-component/page-renderer-component';
import { Home } from './pages/home/home';
import { Adminpanel } from './pages/adminpanel/adminpanel';

export const routes: Routes = [
	{ path: 'home', component: Home },
	{ path: 'page', component: PageRendererComponent },
	{ path: 'adminpanel', component: Adminpanel },
	{ path: 'page/:type', component: PageRendererComponent },
  	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  	{ path: '**', redirectTo: '/home' }
];
