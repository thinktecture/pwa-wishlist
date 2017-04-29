import {DeviceFeatures} from '../models/deviceFeatures';
import {Directive, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appSupportsTouch]'
})
export class SupportsTouchDirective implements OnInit {
  @HostBinding('class.no-touch')
  public noTouch: boolean;

  constructor(private _deviceFeatures: DeviceFeatures) {
  }

  public ngOnInit(): void {
    this.noTouch = !this._deviceFeatures.touch;
  }
}
