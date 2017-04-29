import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {DeviceFeatures} from '../models/deviceFeatures';
import {ServiceWorkerService} from '../services/serviceWorker';

@Injectable()
export class ServiceWorkerStartGuard implements CanActivate {
  constructor(private _serviceWorker: ServiceWorkerService, private _deviceFeatures: DeviceFeatures) {

  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this._deviceFeatures.serviceWorker) {
      this._serviceWorker.start();
    }

    return true;
  }
}
