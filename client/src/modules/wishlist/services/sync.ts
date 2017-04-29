import {Injectable} from '@angular/core';
import {WindowRef} from '../../shared/services/windowRef';

@Injectable()
export class SyncService {
  private _window: Window;

  constructor(private _windowRef: WindowRef) {
    this._window = this._windowRef.nativeWindow;
  }

  public start(): void {
    this._window.setInterval(() => {
      this._window.navigator.serviceWorker.ready
        .then(serviceWorkerRegistration => {
            serviceWorkerRegistration.sync.register('wishlist-data');
        });
    }, 1000);
  }
}
