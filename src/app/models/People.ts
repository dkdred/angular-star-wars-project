import { ICard } from './ICard';

export class People implements ICard {

  constructor(private data: any) {

  }

  getTitle(): string {

    return `${this.data?.name }`;
  }
  getImage(): string {
    const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/';
    return `${imgUrl}${this.data?.id}`;

  }

  getInfo(): Array<any> {
    return  [
      {
        field : 'Пол:',
        value : `${this.data?.gender}`,
      },
      {
        field : 'Дата Рождения:',
        value : `${this.data?.birth_year}`,
      },
      {
        field: 'Рост:',
        value: `${this.data?.height}`
      },
      {
        field: 'Вес:',
        value: `${this.data?.mass}`
      },

      {
        field: 'Цвет волос:',
        value: `${this.data?.hair_color}`
      },
      {
        field: 'Цвет глаз:',
        value: `${this.data?.eye_color}`
      }
    ];
  }
}
