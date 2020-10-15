import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from './images-list/images-list.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  }
];


@NgModule({
  declarations: [
    ImagesListComponent,
    MainContentComponent,
    UploadPhotoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatCardModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: []
})
export class MainModule { }
