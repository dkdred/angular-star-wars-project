import { Component, OnInit } from '@angular/core';

import { ICategories } from '../models/ICategories';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  categories: ICategories[] = [];

  constructor(private starWarsService: StarWarsService) { }

  getCategories(): void {
    this.starWarsService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
