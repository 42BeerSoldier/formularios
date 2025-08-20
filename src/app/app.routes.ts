import { Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form';

export const routes: Routes = [
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: '', redirectTo: '/dynamic-form', pathMatch: 'full' },
  { path: '**', redirectTo: '/dynamic-form' }
];
