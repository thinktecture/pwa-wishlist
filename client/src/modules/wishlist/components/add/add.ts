import {Component} from '@angular/core';
import {WishlistService} from '../../services/wishlist';
import {WishlistItem} from '../../models/item';
import {Router} from '@angular/router';

@Component({
  selector: 'wl-add',
  templateUrl: 'add.html'
})
export class AddComponent {
  public item: WishlistItem;

  constructor(private _router: Router,private _wishlistService: WishlistService) {
    this.item = new WishlistItem();
  }

  public save(): void {
    this._wishlistService.addItem(this.item);
    this._router.navigateByUrl('/app');
  }
}
