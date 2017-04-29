import {Component, Input} from '@angular/core';

@Component({
  selector: 'available',
  templateUrl: 'available.html'
})
export class AvailableComponent {
  @Input('value') availableValue: boolean;
}
