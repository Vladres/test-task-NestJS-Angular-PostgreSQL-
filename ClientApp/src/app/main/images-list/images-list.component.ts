import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/Item.model';
import { ItemService } from '../../Services/item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  cards: Item[] = [];

  constructor(
    private _itemService: ItemService,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {

    this._itemService.onItemsChanged.subscribe(value => {
      this.cards = value;
    })
  }

  downloadAction(id: string) { 
    this._http.get(`http://localhost:3000/items/img/${id}`);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this._itemService.onEditItems.next(this.cards);
  }
}
