import { Injectable } from '@angular/core';
import { APIItemService } from './api/api-item.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Item } from '../Models/Item.model';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  onGetItems: Subject<any>;
  onAddItem: Subject<any>;

  onItemsChanged: BehaviorSubject<Item[]>;

  constructor(
    private _apiService: APIItemService,
    private _dialogService: DialogService

  ) {
    this.onGetItems = new Subject();
    this.onAddItem = new Subject();

    this.onItemsChanged = new BehaviorSubject([]);

    this.onGetItems.subscribe(request => {
      if (request != null) {
        this.getItems();
      }
    });


    this.onAddItem.subscribe(request => {
      this.addProduct(request)
      this.getItems();
    });

    this.getItems();
  }

  private async addProduct(request): Promise<void> {
    let response = await this._apiService.addItem(request);

    if (response.success) {
      this.onGetItems.next(null);
      this._dialogService.showSnackBar("Додано");
      return;
    }

    this._dialogService.showSnackBar("Не додано");
  }

  private async getItems(): Promise<void> {
    let response = await this._apiService.getItems();

    if (response.success) {
      this.onItemsChanged.next(response.model);
      return;
    }
  }
}
