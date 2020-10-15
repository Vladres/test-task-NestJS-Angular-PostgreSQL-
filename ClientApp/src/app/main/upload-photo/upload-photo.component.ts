import { Component, OnInit } from '@angular/core';
import { ModelRequest } from '../../Models/model-request.model';
import { ItemService } from '../../Services/item.service';

@Component({
  selector: 'upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {

  files: File[] = [];

  constructor(
    private _itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

  filesUploaded(files: FileList) {
    this.files = [];

    this.files.push(files.item(0));

    this.uploadFiles();
  }

  uploadFiles() {
    if (this.files.length > 0) {
      let formData = new FormData();
      for (let item of this.files) {
        formData.append('image', item);
      }

      console.log('uploadFiles')
      let request = new ModelRequest<FormData>({ model: formData });
      this._itemService.onAddItem.next(request);
    }
  }

}
