import {WindowRef} from './windowRef';
import {DeviceFeatures} from '../models/deviceFeatures';
import {Injectable} from '@angular/core';
import {NotificationService} from './notification';

@Injectable()
export class ServiceWorkerService {
  private _window: Window;
  private _pushSubscription: PushSubscription;

  constructor(private _windowRef: WindowRef, private _features: DeviceFeatures, private _notificationService: NotificationService) {
    this._window = this._windowRef.nativeWindow;
  }

  public async start(): Promise<void> {
    if (!this._features.serviceWorker) {
      console.info('No ServiceWorker available.');
      return;
    }
    // Script url is based on index.html and NOT to the url of the ServiceWorkerService
    await this._window.navigator.serviceWorker.register('./service-worker.js');
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;

    if (this._features.push) {
      try {
        this._pushSubscription = await serviceWorkerRegistration
          .pushManager.subscribe({ userVisibleOnly: true });

        console.info('Registered for push notifications:', this._pushSubscription);
        const splittedEndpoint = this._pushSubscription.endpoint.split('/');
        this._notificationService.register(splittedEndpoint[splittedEndpoint.length - 1]);
      } catch (error) {
        console.log('Push registration failed:', error);
      }
    }

    serviceWorkerRegistration.onupdatefound = () => {
      const installingWorker = serviceWorkerRegistration.installing;

      installingWorker.onstatechange = () => {
        switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              this.sendData('New app update available. Please restart the application.');
            } else {
              console.info('Content is now available offline!');
            }
            break;

          case 'redundant':
            console.error('The installing service worker became redundant.');
            break;
        }
      };
    };

    this._window.navigator.serviceWorker.addEventListener('message', (event: any) => {
      console.info('Message from ServiceWorker received:', event.data);
    });
  }

  public sendData(data): void {
    this._window.navigator.serviceWorker.controller.postMessage(data);
  }

  public async unregister(): Promise<void> {
    if (this._features.push && this._pushSubscription) {
      const unsubscribe = await this._pushSubscription.unsubscribe();
      if (unsubscribe) {
        console.info('Push successfully unregistered.');
      }
    }
  }
}
