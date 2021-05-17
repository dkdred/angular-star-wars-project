import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICategories } from './models/ICategories';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  private categoriesUrl = 'api/categories';

  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'});
  // }

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.categoriesUrl);
  }

}
