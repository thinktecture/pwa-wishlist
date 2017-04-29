import {DeviceFeatures} from '../models/deviceFeatures';
import {WindowRef} from './windowRef';
import {Injectable} from '@angular/core';

@Injectable()
export class DeviceFeaturesService {
  private _window: Window;

  constructor(private _windowRef: WindowRef) {
    this._window = this._windowRef.nativeWindow;
  }

  public detect(): DeviceFeatures {
    const features = new DeviceFeatures();

    features.touch = this._detectTouch();
    features.serviceWorker = this._detectServiceWorker();
    features.push = this._detectPush();
    features.sync = this._detectSync();
    features.notifications = this._detectNotifications();
    features.share = this._detectShare();
    features.getUserMedia = this._detectGetUserMedia();
    features.localStorage = this._detectLocalStorage();
    features.cache = this._detectCache();

    return features;
  }

  private _detectTouch(): boolean {
    return ('ontouchstart' in this._window)
      || (navigator.maxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0);
  }

  private _detectServiceWorker(): boolean {
    return !!this._window.navigator.serviceWorker;
  }

  private _detectPush(): boolean {
    return 'PushManager' in this._window;
  }

  private _detectSync(): boolean {
    return 'SyncManager' in this._window;
  }

  private _detectNotifications(): boolean {
    return 'Notification' in this._window;
  }

  private _detectShare(): boolean {
    return !!this._window.navigator.share;
  }

  private _detectGetUserMedia(): boolean {
    return !!this._window.navigator.getUserMedia;
  }

  private _detectLocalStorage(): boolean {
    return !!this._window.localStorage;
  }

  private _detectCache(): boolean {
    return 'Cache' in this._window;
  }
}
