import {Routes} from '@angular/router';
import {ListComponent} from './components/list/list';
import {AddComponent} from './components/add/add';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  }
];
