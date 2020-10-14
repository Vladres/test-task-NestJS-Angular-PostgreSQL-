import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImageCardComponent } from './image-card/image-card.component';

const routes: Routes = [
  {
    path: '',
    component: ImagesListComponent
  }
];


@NgModule({
  declarations: [
    ImagesListComponent,
    ImageCardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: []
})
export class MainModule { }
