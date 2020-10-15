import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  cards = [
    { name: "fasafs.jpg", image_url: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { name: "fasafs2.jpg", image_url: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { name: "fasafs3.jpg", image_url: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { name: "fasafs4.jpg", image_url: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    console.log(event)
  }
}
