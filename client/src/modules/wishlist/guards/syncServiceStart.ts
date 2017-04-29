import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {SyncService} from '../services/sync';
import {DeviceFeatures} from '../../shared/models/deviceFeatures';

@Injectable()
export class SyncServiceStartGuard implements CanActivate {
  constructor(private _syncService: SyncService, private _deviceFeatures: DeviceFeatures) {

  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this._deviceFeatures.sync) {
      this._syncService.start();
    }

    return true;
  }
}
