import {NgModule} from '@angular/core';
import {LocalStorageService} from './services/localStorage';
import {StorageService} from './services/storage';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {SpinnerComponent} from './components/spinner/spinner';
import {PlatformService} from './services/platform';
import {DeviceFeaturesService} from './services/deviceFeatures';
import {DeviceFeatures} from './models/deviceFeatures';
import {SupportsTouchDirective} from './directives/supportsTouch';
import {ContentComponent} from './components/content/content';
import {WindowRef} from './services/windowRef';
import {ServiceWorkerService} from './services/serviceWorker';
import {BarcodeScannerService} from './services/barcodeScanner';
import {ServiceWorkerStartGuard} from './guards/serviceWorkerStart';
import {ShareService} from './services/share';
import {ApiService} from './services/api';
import {NotificationService} from './services/notification';

export function deviceFeaturesFactory(deviceFeaturesService: DeviceFeaturesService) {
  return deviceFeaturesService.detect();
}

@NgModule({
  imports: [
    HttpModule,
    RouterModule
  ],
  exports: [
    HttpModule,
    RouterModule,
    SpinnerComponent,
    SupportsTouchDirective,
    ContentComponent,
  ],
  declarations: [
    SpinnerComponent,
    SupportsTouchDirective,
    ContentComponent
  ],
  providers: [
    { provide: StorageService, useClass: LocalStorageService },
    PlatformService,
    DeviceFeaturesService,
    { provide: DeviceFeatures, useFactory: deviceFeaturesFactory, deps: [DeviceFeaturesService] },
    WindowRef,
    ServiceWorkerService,
    BarcodeScannerService,
    ServiceWorkerStartGuard,
    ShareService,
    ApiService,
    NotificationService
  ]
})
export class SharedModule {
}
