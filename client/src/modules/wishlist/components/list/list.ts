import {Component, OnInit} from '@angular/core';
import {WishlistService} from '../../services/wishlist';
import {Router} from '@angular/router';
import {WishlistItem} from '../../models/item';
import {ShareService} from '../../../shared/services/share';

@Component({
  selector: 'wl-list',
  templateUrl: 'list.html'
})
export class ListComponent implements OnInit {
  public list: Array<WishlistItem>;

  constructor(private _router: Router, private _wishlistService: WishlistService, private _shareService: ShareService) {
  }

  public ngOnInit(): void {
    this._wishlistService.list()
      .subscribe(list => this.list = list);
  }

  public goToAdd(): void {
    this._router.navigateByUrl('app/add');
  }

  public share(item: WishlistItem): void {
    this._shareService.share(item.title, item.info, item.url);
  }

  public deleteItem(item: WishlistItem): void {
    // TODO: Optimize. Not perfect, that I have to reload the list manually
    this._wishlistService.deleteItem(item);

    this._wishlistService.list()
      .subscribe(list => this.list = list);
  }
}
