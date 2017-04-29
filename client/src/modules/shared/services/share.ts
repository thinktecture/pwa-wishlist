import {Injectable} from '@angular/core';
import {DeviceFeatures} from '../models/deviceFeatures';
import {WindowRef} from './windowRef';

@Injectable()
export class ShareService {
  private _window: Window;

  constructor(private _features: DeviceFeatures, private _windowRef: WindowRef) {
    this._window = this._windowRef.nativeWindow;
  }

  public share(title: string, text: string, url: string): void {
    if (this._features.share) {
      this._window.navigator.share({
        title: title,
        text: text,
        url: url
      });
    }
  }
}
