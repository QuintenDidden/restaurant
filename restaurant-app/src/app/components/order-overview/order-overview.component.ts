import {Component, Input, OnInit} from '@angular/core';
import {DishesService} from '../../services/dishes.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {
  @Input() orders;
  starters = [];
  mains = [];
  desserts = [];
  dishes = [];

  constructor(private snackBar: MatSnackBar, private dishService: DishesService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(data => {
      this.dishes = data;
      this.filterOrders();
    }, error => {
      console.log('error in reading table');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });
  }

  filterOrders() {
    this.starters = this.orders.filter(order => order.dish < 8);
    this.mains = this.orders.filter(order => order.dish > 7 && order.dish < 16);
    this.desserts = this.orders.filter(order => order.dish > 15);
  }
}
