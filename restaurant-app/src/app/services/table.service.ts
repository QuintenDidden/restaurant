import { Injectable } from '@angular/core';
import {Table} from '../model/table';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TableService {
  configUrl = 'api/tables';
  constructor(private http: HttpClient) {
    console.log('no error in service');
  }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.configUrl);
  }
}
