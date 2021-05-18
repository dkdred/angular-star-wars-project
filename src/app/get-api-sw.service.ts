import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from './models/ICard';
import { Peoples } from './models/Peoples';
import { map } from 'rxjs/operators';
import { People } from './models/People';
import { Planets } from './models/Planets';
import { Starships } from './models/Starships';
import { Species } from './models/Species';

@Injectable({
  providedIn: 'root'
})
export class GetApiSwService {

  private apiUrl = 'https://swapi.dev/api/';

  private entitiesRouting = {
    people : People,
    planets : Planets,
    starships : Starships,
    species : Species,
  };

  constructor(private http: HttpClient) { }

  getEntities(path: any): Observable< ICard[] > {
    // @ts-ignore
    const entityClass: ICard = this.entitiesRouting[path];
    return this.http.get<ICard[]>(`${this.apiUrl}${path}`)
      .pipe(map((data: any) => {
        const entitiesList: [] = data.result;
        // tslint:disable-next-line:only-arrow-functions
        return entitiesList.map(function(entity: any): ICard {
          // @ts-ignore
          return new entityClass(entity);
        });
      }));
  }

  // getPeoples(path: string): Observable<Peoples[]> {
  //   return this.http.get<Peoples[]>(`${this.apiUrl}${path}`)
  //     .pipe(
  //       map(data => {
  //         const peopleList = data;
  //       })
  //     );
  // }
}
