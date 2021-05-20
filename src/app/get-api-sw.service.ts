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

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private entitiesRouting: Map<string, ICard>;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.entitiesRouting = new Map([
      ['people', People],
      ['planets', Planets],
      ['starships', Starships],
      ['species', Species],
    ]);
  }

  getEntities(path: string): Observable< ICard[] > {
    // @ts-ignore
    const entityClass: ICard = this.entitiesRouting.get(path) ?? People;
    return this.http.get<ICard[]>(`${this.apiUrl}${path}/`)
      .pipe(map((data: any) => {
         console.log('this is data', data);
         const entitiesList: [] = data.result;
         return entitiesList.map((entity: any): ICard => {
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
