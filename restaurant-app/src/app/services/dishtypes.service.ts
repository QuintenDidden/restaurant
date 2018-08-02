import { Injectable } from '@angular/core';
import {DishType} from '../model/dishtype';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DishtypesService {
  private dishTypesUrl = 'api/dishtypes';  // URL to web api

  constructor(private http: HttpClient) { }

  public getDishTypes(): Observable<DishType[]> {
    return this.http.get<DishType[]>(this.dishTypesUrl);
  }
}


