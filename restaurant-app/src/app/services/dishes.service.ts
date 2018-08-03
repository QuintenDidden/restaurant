import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DishesService {
  private dishesUrl = 'api/dishes';  // URL to web api

  constructor(private http: HttpClient) { }

  public getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.dishesUrl);
  }
}
