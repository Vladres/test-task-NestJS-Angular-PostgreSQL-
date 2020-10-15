import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/Item.model';
import { ItemService } from '../../Services/item.service';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {


  cards: Item[] = [];

  constructor(
    private _itemService: ItemService
  ) { }

  ngOnInit(): void {

    this._itemService.onItemsChanged.subscribe(value => {
      this.cards = value;
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    console.log(event)
  }
}
