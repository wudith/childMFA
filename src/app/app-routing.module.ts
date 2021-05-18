import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },  
  { path: 'demo', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule) }
  
  
];

export const Routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { useHash: true });
