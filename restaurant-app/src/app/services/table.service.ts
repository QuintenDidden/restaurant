import { Injectable } from '@angular/core';
import {Table} from '../model/table';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TableService {
  private tableUrl = 'api/tables';  // URL to web api

  constructor(private http: HttpClient) { }

  // Return all tables
  public getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.tableUrl);
  }

  // Return table by id
  public getTable(id): Observable<Table> {
    return this.http.get<Table>(this.tableUrl + '/' + id);
  }
}
