import { Component, Input } from '@angular/core';
import { IframeButtonComponent } from './iframe-button/iframe-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Verotel';
  @Input() openImage: boolean = false;

  public showImg: boolean = false;
}
