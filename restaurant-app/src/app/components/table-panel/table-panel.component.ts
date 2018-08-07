import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TableService} from '../../services/table.service';
import {MatSnackBar} from '@angular/material';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.css']
})
export class TablePanelComponent implements OnInit {

  public tableId;
  private sub: any;
  public table;
  public orders;
  public tableOrders;

  constructor(private router: Router, private route: ActivatedRoute, private tableService: TableService,
              private snackBar: MatSnackBar, private orderService: OrderService) {
    this.sub = this.route.params.subscribe(params => {
      this.tableId = +params['tableId'];
    });
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
      this.orders = data;
      this.tableFilter();
    }, error => {
      console.log('error in reading orders');
      console.log(error);
      this.snackBar.open('Error retrieving data from server', 'X', {duration: 10000});
    });
  }

  tableFilter() {
    this.tableOrders = this.orders.filter(order => order.table === this.tableId);
  }
}
