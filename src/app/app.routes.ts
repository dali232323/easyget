import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DriverOverviewComponent } from '../master-data/components/driver-overview/driver-overview.component';
import { TestComponent } from '../master-data/components/test/test.component';
import { DriverTruckMapComponent } from '../master-data/components/driver-truck-map/driver-truck-map.component';

// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
//   { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
//   { path: 'master-data', loadChildren: () => import('../master-data/master-data.route').then(m => m.MASTER_DATA_ROUTES) },

  
// ];


export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'driver-overview', component: DriverOverviewComponent },
  { path: 'driver-truck-map', component: DriverTruckMapComponent },
  
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'welcome' }
];
