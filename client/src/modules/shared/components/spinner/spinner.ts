import {Component, HostBinding, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-shared-spinner',
  templateUrl: 'spinner.html',
  styleUrls: ['spinner.scss']
})
export class SpinnerComponent implements OnDestroy {
  private _currentTimeout: number;

  // From: http://tobiasahlin.com/spinkit/
  @HostBinding('class.sk-fading-circle')
  public spinnerCssClass = true;

  @Input()
  public delay = 300;

  public isDelayedRunning: boolean;

  @Input()
  public set isRunning(value: boolean) {
    if (!value) {
      this.cancelTimeout();
      this.isDelayedRunning = false;
      return;
    }

    if (this._currentTimeout) {
      return;
    }

    this._currentTimeout = window.setTimeout(() => {
      this.isDelayedRunning = value;
      this.cancelTimeout();
    }, this.delay);
  }

  private cancelTimeout(): void {
    clearTimeout(this._currentTimeout);
    this._currentTimeout = void 0;
  }

  public ngOnDestroy(): any {
    this.cancelTimeout();
  }

  @HostBinding('hidden')
  public get isHidden(): boolean {
    return !this.isDelayedRunning;
  }
}
