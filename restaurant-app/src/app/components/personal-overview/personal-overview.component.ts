import {Component, OnInit, Input} from '@angular/core';
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
  table;
  tableOrders = [];
  customers = [];
  uniqueCustomers = [];
  customer1 = [];
  customer2 = [];
  customer3 = [];
  customer4 = [];

  constructor(private snackBar: MatSnackBar, private dishService: DishesService
    , private orderService: OrderService, private tableService: TableService) {
  }

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
      this.customers = data.filter(order => order.table === this.tableId);
      if (this.customers[0] !== null) {
        this.uniqueCustomers.push(this.customers[0]);
        this.customer1 = data.filter(order => order.customer_id === this.customers[0].customer_id);
      }
      if (this.customers[3] !== null) {
        this.uniqueCustomers.push(this.customers[3]);
        this.customer2 = data.filter(order => order.customer_id === this.customers[3].customer_id);
      }
      if (this.customers[6] !== null) {
        this.uniqueCustomers.push(this.customers[6]);
        this.customer3 = data.filter(order => order.customer_id === this.customers[6].customer_id);
      }
      if (this.customers[9] !== null) {
        this.uniqueCustomers.push(this.customers[9]);
        this.customer4 = data.filter(order => order.customer_id === this.customers[9].customer_id);
      }
    }, error => {
      console.log('error in reading table');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });


  }
}
