import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ICategories} from './models/ICategories';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCategoriesService implements InMemoryDbService{
  createDb(): object {
    const categories = [
      { title: 'Персонажи', backgroundImg: 'https://starwars-visualguide.com/assets/img/categories/character.jpg', subTitle: 'Список популярных героев «Звёздных войны»', link: '' },
      { title: 'Планеты', backgroundImg: 'https://starwars-visualguide.com/assets/img/categories/planets.jpg', subTitle: 'Планеты вселенной «Звёздных войн»', link: '' },
      { title: 'Расы', backgroundImg: 'https://starwars-visualguide.com/assets/img/categories/species.jpg', subTitle: 'Описание представителей целой вселенной', link: '' },
      { title: 'Звездные корабли', backgroundImg: 'https://starwars-visualguide.com/assets/img/categories/starships.jpg', subTitle: 'Узнайте детали быстрых и смертоносных кораблей', link: '' },
    ];

    return {categories};
  }


  constructor() { }
}
