import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: 'content.html'
})
export class ContentComponent {
  @Input()
  public title: string;
}
