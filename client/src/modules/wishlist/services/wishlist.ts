import {Injectable} from '@angular/core';
import {StorageService} from '../../shared/services/storage';
import {WishlistItem} from '../models/item';
import {Observable} from 'rxjs/Observable';

const WISHLIST_STORAGE_KEY = 'wishlist';

@Injectable()
export class WishlistService {
  constructor(private _storageService: StorageService) {

  }

  public initialize(): void {
    try {
      this._storageService.load<Array<WishlistItem>>(WISHLIST_STORAGE_KEY)
        .subscribe();
    } catch (ex) {
      this._storageService.save(WISHLIST_STORAGE_KEY, []);
    }
  }

  public addItem(wishlistItem: WishlistItem): void {
    this._storageService.load<Array<WishlistItem>>(WISHLIST_STORAGE_KEY)
      .flatMap(list => {
        list.unshift(wishlistItem);
        return this._storageService.save(WISHLIST_STORAGE_KEY, list);
      }).subscribe();
  }

  public deleteItem(item: WishlistItem): void {
    this._storageService.load<Array<WishlistItem>>(WISHLIST_STORAGE_KEY)
      .map(list => {
        const itemToDelete = list.filter(listItem => listItem.id === item.id);
        if (itemToDelete.length) {
          const itemIndex = list.indexOf(itemToDelete[0]);
          list.splice(itemIndex, 1);
          return this._storageService.save(WISHLIST_STORAGE_KEY, list);
        }
      }).subscribe();
  }

  public list(): Observable<Array<WishlistItem>> {
    return this._storageService.load<Array<WishlistItem>>(WISHLIST_STORAGE_KEY);
  }
}
