import { Injectable } from '@angular/core';
import {Table} from '../model/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TableService {
  configUrl = 'src/assets/backend/tables.json';
  constructor(private http: HttpClient) {}

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.configUrl);
  }
}
