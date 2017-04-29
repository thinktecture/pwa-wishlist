import {Injectable} from '@angular/core';
import {ApiService} from './api';

@Injectable()
export class NotificationService {
  constructor(private _api: ApiService) {
  }

  public register(client: string): void {
    this._api.post('notification/register', {
      id: client
    });
  }

  public notify(): void {
    this._api.get('notification');
  }
}
