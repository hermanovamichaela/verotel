import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeButtonComponent } from './iframe-button/iframe-button.component';
import { IframeImageComponent } from './iframe-image/iframe-image.component';

const routes: Routes = [
  { path: 'iframe-button-component', component: IframeButtonComponent },
  { path: 'iframe-image-component', component: IframeImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
