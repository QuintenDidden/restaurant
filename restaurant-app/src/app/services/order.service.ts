import { Injectable } from '@angular/core';
import {Order} from '../model/order';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {
  private orderUrl = 'api/orders';  // URL to web api

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }
}
