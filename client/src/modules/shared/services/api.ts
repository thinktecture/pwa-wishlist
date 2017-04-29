import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

const API_BASE_URL = 'http://localhost:8090/';

@Injectable()
export class ApiService {
  constructor(private _http: Http) {

  }

  public get(method: string): Promise<any> {
    return this._http.get(`${API_BASE_URL}${method}`)
      .toPromise();
  }

  public post(method: string, payload: any): Promise<any> {
    return this._http.post(`${API_BASE_URL}${method}`, payload)
      .map(result => result.json)
      .toPromise();
  }
}
