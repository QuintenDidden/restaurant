import {Component, Input, OnInit} from '@angular/core';
import {DishesService} from '../../services/dishes.service';
import {MatSnackBar} from '@angular/material';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {
  @Input() tableId;
  tableStarters = [];
  tableMains = [];
  tableDesserts = [];

  constructor(private snackBar: MatSnackBar, private dishService: DishesService, private orderService: OrderService) {
  }

  // Get orders of orderService and apply filters
  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.tableStarters = data.filter(order => order.table === this.tableId).filter(order => order.type === 'Starter');
      this.tableMains = data.filter(order => order.table === this.tableId).filter(order => order.type === 'Main');
      this.tableDesserts = data.filter(order => order.table === this.tableId).filter(order => order.type === 'Dessert');
    }, error => {
      this.onError(error);
    });
  }

  // Error handling
  private onError(error) {
    console.log(error);
    this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
  }
}
