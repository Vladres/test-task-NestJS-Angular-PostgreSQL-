import { Injectable } from '@angular/core';
import { APIItemService } from './api/api-item.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Item } from '../Models/Item.model';
import { DialogService } from './dialog.service';
import { ModelRequest } from '../Models/model-request.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  onGetItems: Subject<any>;
  onAddItem: Subject<any>;
  onEditItems: Subject<any>;


  onItemsChanged: BehaviorSubject<Item[]>;

  constructor(
    private _apiService: APIItemService,
    private _dialogService: DialogService

  ) {
    this.onGetItems = new Subject();
    this.onAddItem = new Subject();
    this.onEditItems = new Subject();

    this.onItemsChanged = new BehaviorSubject([]);

    this.onGetItems.subscribe(request => {
      this.getItems();
    });

    this.onEditItems.subscribe(async request => {
      this.editItems(request);
      await this.getItems();
    });



    this.onAddItem.subscribe(async request => {
      this.addProduct(request)
      await this.getItems();
    });

    this.getItems();
  }

  private async getItems(): Promise<void> {
    let response = await this._apiService.getItems();

    if (response.success) {
      this.onItemsChanged.next(response.model);
      return;
    }
  }

  private async editItems(request): Promise<void> {
    let req = new ModelRequest<Item[]>({ model: request });
    
    let response = await this._apiService.editItems(req);
    if (response.success) {
      this.onItemsChanged.next(response.model);
      return;
    }
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




}
