import {AfterViewInit, Component} from '@angular/core';
import {WindowRef} from '../../../shared/services/windowRef';

@Component({
  selector: 'app-root',
  templateUrl: 'root.html',
  styleUrls: ['root.scss']
})
export class RootComponent implements AfterViewInit {
  private _window: Window;

  constructor(private _windowRef: WindowRef) {
    this._window = this._windowRef.nativeWindow;
  }

  public ngAfterViewInit(): void {
    const loader = <any>this._window.document.getElementsByClassName('loader-container')[0];
    loader.style.display = 'none';
  }
}
