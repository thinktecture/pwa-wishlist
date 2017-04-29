import {Component, OnInit} from '@angular/core';
import {DeviceFeatures} from '../../../shared/models/deviceFeatures';
import {ServiceWorkerService} from '../../../shared/services/serviceWorker';
import {WindowRef} from '../../../shared/services/windowRef';
import {NotificationService} from '../../../shared/services/notification';

@Component({
  templateUrl: 'features.html'
})
export class FeaturesComponent implements OnInit {
  public serviceWorkerAvailable: boolean;
  public pushAvailable: boolean;
  public notificationsAvailable: boolean;
  public syncAvailable: boolean;
  public shareAvailable: boolean;
  public getUserMediaAvailable: boolean;
  public localStorageAvailable: boolean;
  public cacheAvailable: boolean;

  private _window: Window;

  constructor(private _deviceFeatures: DeviceFeatures, private _serviceWorker: ServiceWorkerService,
              private _windowRef: WindowRef, private _notificationService: NotificationService) {
    this._window = this._windowRef.nativeWindow;
  }

  public ngOnInit(): void {
    // TODO: Remove obsolete features
    this.serviceWorkerAvailable = this._deviceFeatures.serviceWorker;
    this.pushAvailable = this._deviceFeatures.push;
    this.syncAvailable = this._deviceFeatures.sync;
    this.notificationsAvailable = this._deviceFeatures.notifications;
    this.shareAvailable = this._deviceFeatures.share;
    this.getUserMediaAvailable = this._deviceFeatures.getUserMedia;
    this.localStorageAvailable = this._deviceFeatures.localStorage;
    this.cacheAvailable = this._deviceFeatures.cache;
  }

  // TODO: Remove at the end. Only for test purposes.
  public sendData(): void {
    this._serviceWorker.sendData('Message from client.');
  }

  public notify(): void {
    this._notificationService.notify();
  }
}
