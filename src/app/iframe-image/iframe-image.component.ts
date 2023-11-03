import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-iframe-image',
  templateUrl: './iframe-image.component.html',
  styleUrls: ['./iframe-image.component.css']
})
export class IframeImageComponent implements OnInit, DoCheck {
  @Input() showImg: boolean = false;
  public imageUrl: string = '';
  public responseFromApi: string = '';

  ngOnInit() {
    this.generateImage();
  }

  ngDoCheck() {
    if (this.imageUrl !== this.responseFromApi ) {
      this.imageUrl = this.responseFromApi;
      console.log('ngonchanges if');
    }
  }

  constructor (private apiService: ApiService) {}

  public generateImage() {
    this.apiService.getImage().subscribe((data: any) => {
      this.responseFromApi = data.message;
      if (this.imageUrl !== this.responseFromApi) {
        this.imageUrl = this.responseFromApi;
      }
      console.log(this.responseFromApi);
    })
  }
}
