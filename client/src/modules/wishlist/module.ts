import {NgModule} from '@angular/core';
import {ListComponent} from './components/list/list';
import {WishlistService} from './services/wishlist';
import {SharedModule} from '../shared/module';
import {SyncService} from './services/sync';
import {SyncServiceStartGuard} from './guards/syncServiceStart';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {AddComponent} from './components/add/add';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ListComponent,
    AddComponent
  ],
  exports: [
    ListComponent
  ],
  providers: [
    WishlistService,
    SyncService,
    SyncServiceStartGuard
  ]
})
export class WishlistModule {
  constructor(private _wishlistService: WishlistService) {
    this._wishlistService.initialize();
  }
}
