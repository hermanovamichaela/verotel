import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-iframe-button',
  templateUrl: './iframe-button.component.html',
  styleUrls: ['./iframe-button.component.css']
})
export class IframeButtonComponent {

  @Output() showImg = new EventEmitter<void>();

  constructor() {}

}
