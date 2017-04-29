import {Routes} from '@angular/router';
import {AboutComponent} from './components/about/about';
import {FeaturesComponent} from './components/features/features';
import {SyncServiceStartGuard} from '../wishlist/guards/syncServiceStart';
import {AppComponent} from './components/app/app';
import {ServiceWorkerStartGuard} from '../shared/guards/serviceWorkerStart';

export const ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [ServiceWorkerStartGuard, SyncServiceStartGuard],
    children: [
      {
        path: 'app',
        loadChildren: 'modules/wishlist/module#WishlistModule'
      },
      {
        path: 'features',
        component: FeaturesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  },
];
