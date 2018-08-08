import { Component, OnInit, Input } from '@angular/core';
import {DishesService} from '../../services/dishes.service';
import {MatSnackBar} from '@angular/material';
import {OrderService} from '../../services/order.service';
import {TableService} from '../../services/table.service';

@Component({
  selector: 'app-personal-overview',
  templateUrl: './personal-overview.component.html',
  styleUrls: ['./personal-overview.component.css']
})
export class PersonalOverviewComponent implements OnInit {
  @Input() tableId;
  private table;
  private tableOrders = [];
  private customers = [];

  constructor(private snackBar: MatSnackBar, private dishService: DishesService
              , private orderService: OrderService, private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTable(this.tableId).subscribe(data => {
      this.table = data;
    }, error => {
      console.log('error in reading table');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });

    this.orderService.getOrders().subscribe(data => {
      this.tableOrders = data.filter(order => order.table === this.tableId);
      this.customers = data.filter(order => order.table === this.tableId).filter(order => order.last_name);
    }, error => {
      console.log('error in reading table');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });
  }
}
